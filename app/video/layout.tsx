import type { Metadata } from "next";
import { keywords, portfolioTags, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Corporate video, brand films, promotional videos, testimonials, interviews, and documentary-style work. Freelance videography and remote video editing portfolio.",
  keywords: [...keywords, ...portfolioTags],
  openGraph: {
    title: `Portfolio | ${siteName}`,
    description:
      "Corporate video, brand films, promotional videos, and commercial editing by a freelance videographer and remote video editor.",
  },
};

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
