import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — Cineva",
  description: "Prinsip perlindungan data pribadi dan filosofi privasi nol-pelacakan (Zero Data Collection) Cineva.",
};

export default function KebijakanPrivasiPage() {
  return <LegalLayout doc={privacyPolicy} currentSlug="kebijakan-privasi" />;
}
