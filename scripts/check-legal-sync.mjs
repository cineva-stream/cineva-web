import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Memeriksa bahwa dokumen legal di cineva-web (lib/legal.ts) identik dengan aplikasi Cineva
 * (lib/features/settings/data/legal_content.dart). Gagal (exit 1) jika ada perbedaan.
 *
 * Path repo aplikasi: env CINEVA_REPO, default ../cineva (repo saudara).
 * Judul dokumen "Syarat" memang berbeda per platform dan tidak dibandingkan.
 */
const here = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(here, "..");
const appRoot = path.resolve(process.env.CINEVA_REPO || path.join(webRoot, "..", "cineva"));
const TS_FILE = path.join(webRoot, "lib", "legal.ts");
const DART_FILE = path.join(appRoot, "lib", "features", "settings", "data", "legal_content.dart");

for (const f of [TS_FILE, DART_FILE]) {
  if (!fs.existsSync(f)) {
    console.error(`File tidak ditemukan: ${f}\nAtur CINEVA_REPO ke path repo aplikasi Cineva.`);
    process.exit(2);
  }
}

// ---------- parse TS ----------
function parseTs(src) {
  let s = src.replace(/\r\n/g, "\n");
  s = s.replace(/^import type[^\n]*\n/gm, "");
  s = s.replace(/export interface \w+ \{[\s\S]*?\n\}\n/g, "");
  s = s.replace(/export const legalUi[\s\S]*$/, "");
  s = s.replace(/export const (\w+): LegalDocument =/g, "const $1 =");
  s = s.replace(/export const LEGAL_VERSION =/, "const LEGAL_VERSION =");
  const names = ["privacyPolicy", "termsOfUse", "disclaimerDoc", "privacyPolicyEn", "termsOfUseEn", "disclaimerDocEn"];
  const fn = new Function(`${s}\nreturn { LEGAL_VERSION, ${names.join(", ")} };`);
  const r = fn();
  return {
    version: r.LEGAL_VERSION,
    docs: {
      "privacy.id": r.privacyPolicy, "terms.id": r.termsOfUse, "disclaimer.id": r.disclaimerDoc,
      "privacy.en": r.privacyPolicyEn, "terms.en": r.termsOfUseEn, "disclaimer.en": r.disclaimerDocEn,
    },
  };
}

// ---------- parse Dart ----------
const unescapeDart = (t) => t.replace(/\\(['$\\])/g, "$1");
const STR = "'((?:[^'\\\\]|\\\\.)*)'";

function parseDartDoc(seg) {
  const doc = { sections: [] };
  const tok = new RegExp(
    `(LegalSection\\()|(bulletPoints:\\s*\\[)|(\\])|(?:(number|title|body|subtitle|lastUpdated|calloutSummary|concludingNotice):\\s*${STR})|(?:^\\s*${STR},\\s*$)`,
    "gm"
  );
  let cur = null;
  let inBullets = false;
  let m;
  while ((m = tok.exec(seg))) {
    if (m[1]) { cur = { number: "", title: "", body: "", bulletPoints: [] }; doc.sections.push(cur); inBullets = false; }
    else if (m[2]) inBullets = true;
    else if (m[3]) inBullets = false;
    else if (m[4]) {
      const k = m[4], v = unescapeDart(m[5]);
      if (cur && ["number", "title", "body"].includes(k)) cur[k] = v; else { doc[k] = v; if (k === "concludingNotice") cur = null; }
    } else if (m[6] !== undefined && inBullets && cur) cur.bulletPoints.push(unescapeDart(m[6]));
  }
  return doc;
}

function parseDart(src) {
  const s = src.replace(/\r\n/g, "\n");
  const version = Number((s.match(/static const int currentVersion = (\d+);/) || [])[1]);
  const docs = {};
  const fns = { privacy: "_getPrivacyPolicy", terms: "_getTermsAndConditions", disclaimer: "_getDisclaimer" };
  for (const [key, name] of Object.entries(fns)) {
    const start = s.indexOf(`static LegalDocumentData ${name}(`);
    const next = s.indexOf("static LegalDocumentData", start + 10);
    const body = s.slice(start, next === -1 ? s.length : next);
    const [idPart, enPart] = body.split(/\n    \} else \{\n/);
    docs[`${key}.id`] = parseDartDoc(idPart);
    docs[`${key}.en`] = parseDartDoc(enPart);
  }
  return { version, docs };
}

const web = parseTs(fs.readFileSync(TS_FILE, "utf8"));
const app = parseDart(fs.readFileSync(DART_FILE, "utf8"));

const problems = [];
const cmp = (label, a, b) => { if (a !== b) problems.push({ label, web: a, app: b }); };

cmp("LEGAL_VERSION / currentVersion", String(web.version), String(app.version));
for (const key of Object.keys(web.docs)) {
  const w = web.docs[key], a = app.docs[key];
  if (!a) { problems.push({ label: `${key}: dokumen tidak ada di aplikasi`, web: "ada", app: "-" }); continue; }
  for (const f of ["subtitle", "lastUpdated", "calloutSummary", "concludingNotice"]) cmp(`${key}.${f}`, w[f], a[f]);
  cmp(`${key}.jumlah pasal`, String(w.sections.length), String(a.sections.length));
  const n = Math.min(w.sections.length, a.sections.length);
  for (let i = 0; i < n; i++) {
    const ws = w.sections[i], as = a.sections[i];
    const p = `${key}.pasal ${i + 1}`;
    cmp(`${p}.judul`, ws.title, as.title);
    cmp(`${p}.isi`, ws.body, as.body);
    const wb = ws.bulletPoints || [];
    cmp(`${p}.jumlah poin`, String(wb.length), String(as.bulletPoints.length));
    for (let j = 0; j < Math.min(wb.length, as.bulletPoints.length); j++) cmp(`${p}.poin ${j + 1}`, wb[j], as.bulletPoints[j]);
  }
}

if (problems.length === 0) {
  const total = Object.values(web.docs).reduce((n, d) => n + d.sections.length, 0);
  console.log(`OK: dokumen legal sinkron (versi ${web.version}, 6 dokumen, ${total} pasal).`);
  process.exit(0);
}

const clip = (t) => (t.length > 110 ? t.slice(0, 107) + "..." : t);
console.error(`GAGAL: ${problems.length} perbedaan antara cineva-web dan aplikasi Cineva.\n`);
for (const p of problems.slice(0, 40)) {
  console.error(`- ${p.label}\n    web: ${clip(p.web)}\n    app: ${clip(p.app)}`);
}
if (problems.length > 40) console.error(`... dan ${problems.length - 40} lainnya.`);
process.exit(1);
