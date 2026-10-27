import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { termsOfUse } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Syarat Penggunaan - Cineva",
  description: "Perjanjian hukum dan ketentuan penggunaan piranti lunak Cineva secara global.",
};

export default function SyaratPenggunaanPage() {
  return <LegalLayout doc={termsOfUse} currentSlug="syarat-penggunaan" />;
}
