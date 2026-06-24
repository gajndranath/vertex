import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Engineering Simulation FAQ",
  description: "Comprehensive answers regarding our FEA/CFD technical capabilities, implicit vs explicit solvers, NDA data security, and consulting pricing.",
});

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
