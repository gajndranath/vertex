import type { Metadata } from 'next';

const siteName = 'Vortex Engineering Solutions';
const defaultDescription = 'World-class CAE and FEA outsourcing partner for Automotive & Aerospace. We deliver precision meshing and simulation services globally.';
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vortex-engineering.com';

export function constructMetadata({
  title,
  description = defaultDescription,
  image = '/og-image.png',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: title ? `${title} | ${siteName}` : siteName,
    description,
    openGraph: {
      title: title ? `${title} | ${siteName}` : siteName,
      description,
      url: baseUrl,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${siteName}` : siteName,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
    metadataBase: new URL(baseUrl),
  };
}
