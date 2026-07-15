import type { Metadata } from "next";
import { defaultDescription, keywords, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Freelance videographer and remote video editor based in Romania, available worldwide. End-to-end corporate video production, brand films, editing, colour grading, and post-production for agencies and businesses.",
  keywords,
  openGraph: {
    title: `About | ${siteName}`,
    description: defaultDescription,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
