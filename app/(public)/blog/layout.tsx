import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Engineering Insights & Blog",
  description: "Deep technical dives into structural FEA, Hexahedral meshing quality, crash simulations, and computational fluid dynamics by our senior engineers.",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
