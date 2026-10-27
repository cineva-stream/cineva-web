import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { termsOfUse } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Syarat Penggunaan",
  description: "Perjanjian hukum dan ketentuan penggunaan piranti lunak aplikasi Cineva secara global.",
  alternates: {
    canonical: "/syarat-penggunaan",
  },
  openGraph: {
    title: "Syarat Penggunaan | Cineva",
    description: "Perjanjian hukum dan ketentuan penggunaan piranti lunak aplikasi Cineva secara global.",
    url: "/syarat-penggunaan",
  },
};

export default function SyaratPenggunaanPage() {
  return <LegalLayout doc={termsOfUse} currentSlug="syarat-penggunaan" />;
}
