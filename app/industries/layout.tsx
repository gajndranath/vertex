import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Industries We Empower",
  description: "Production-ready simulation data for Automotive OEM, Aerospace & Defense, Heavy Machinery, and Medical Devices.",
});

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
