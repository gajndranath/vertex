import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact & Consultation",
  description: "Request a technical quote or engineering consultation. Secure NDA compliance and rapid 24-hour turnaround options available.",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
