import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Firm & Leadership",
  description: "Learn about Vortex Engineering's manifesto, our leadership team of industry veterans, and our global delivery network for precision FEA.",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
