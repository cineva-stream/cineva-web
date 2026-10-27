import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { disclaimerDoc } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Disclaimer & Hak Cipta — Cineva",
  description: "Pernyataan penafian hak cipta, kepatuhan DMCA, dan batasan tanggung jawab hukum Cineva.",
};

export default function DisclaimerPage() {
  return <LegalLayout doc={disclaimerDoc} currentSlug="disclaimer" />;
}
