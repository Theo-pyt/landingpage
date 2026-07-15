import type { Metadata } from "next";
import { keywords, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for remote video production, freelance videography, and video editing. Available for corporate, brand, and commercial projects worldwide.",
  keywords,
  openGraph: {
    title: `Contact | ${siteName}`,
    description:
      "Contact a freelance videographer and remote video editor for corporate video production and post-production services.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
