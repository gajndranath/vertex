import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Core Capabilities & Services",
  description: "Advanced Meshing, Structural FEA, Thermal & CFD, and Crash & Impact simulations. Flawless engineering utilizing ANSYS, LS-DYNA, and Abaqus.",
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
