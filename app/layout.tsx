import type { Metadata, Viewport } from "next";
import { keshiva } from "@/lib/fonts";
import {
  defaultDescription,
  defaultTitle,
  keywords,
  siteName,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords,
  authors: [{ name: "Theodor Pintilie", url: siteUrl }],
  creator: "Theodor Pintilie",
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Theodor Pintilie — freelance videographer and remote video editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/hero.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
        sizes: "32x32"
      },
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    apple: [
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
        sizes: "180x180"
      }
    ],
    shortcut: [{ url: "/images/idevibelogo.png" }],
    other: [
      {
        rel: "icon",
        url: "/images/idevibelogo.png",
      },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Theodor Pintilie",
      url: siteUrl,
      jobTitle: "Freelance Videographer & Remote Video Editor",
      description: defaultDescription,
      knowsAbout: [
        "Videography",
        "Video Editing",
        "Corporate Video Production",
        "Colour Grading",
        "Post-Production",
        "Adobe Premiere Pro",
        "DaVinci Resolve",
      ],
      areaServed: ["Worldwide", "Europe", "Romania"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: defaultDescription,
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: siteName,
      url: siteUrl,
      description: defaultDescription,
      provider: { "@id": `${siteUrl}/#person` },
      areaServed: "Worldwide",
      serviceType: [
        "Corporate Video Production",
        "Brand Films",
        "Promotional Videos",
        "Remote Video Editing",
        "Event Videography",
        "Post-Production",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${keshiva.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/idevibelogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/idevibelogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/idevibelogo.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${keshiva.className} font-sans bg-black bg-dotted-grid`}>{children}</body>
    </html>
  );
}
