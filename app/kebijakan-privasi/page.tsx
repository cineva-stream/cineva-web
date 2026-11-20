import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Prinsip Local-first, data minimal: akun tidak wajib, data disimpan di perangkat secara bawaan, dan layanan cloud hanya untuk fitur opsional Cineva.",
  alternates: {
    canonical: "/kebijakan-privasi",
  },
  openGraph: {
    title: "Kebijakan Privasi | Cineva",
    description: "Prinsip Local-first, data minimal: akun tidak wajib, data disimpan di perangkat secara bawaan, dan layanan cloud hanya untuk fitur opsional Cineva.",
    url: "/kebijakan-privasi",
  },
};

export default function KebijakanPrivasiPage() {
  return <LegalLayout doc={privacyPolicy} currentSlug="kebijakan-privasi" />;
}
