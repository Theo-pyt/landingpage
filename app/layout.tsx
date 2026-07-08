import type { Metadata, Viewport } from "next";
import { keshiva } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theo.video",
  description: "Theodor's portfolio of work as a videographer.",
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
      </head>
      <body className={`${keshiva.className} font-sans bg-black bg-dotted-grid`}>{children}</body>
    </html>
  );
}
