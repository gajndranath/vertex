import { constructMetadata } from "@/lib/seo";

// This generates dynamic metadata for the specific blog post based on the slug URL
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const titleSlug = params.slug || "engineering-article";
  const title = titleSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return constructMetadata({
    title: `${title} | Engineering Insights`,
    description: `Read our comprehensive technical breakdown on ${title}. Expert FEA and CFD insights from Vortex Engineering.`,
  });
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
