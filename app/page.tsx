'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { PageLayout } from '@/components/PageLayout'
import { bebas } from '@/lib/fonts'

function HeroRedDots() {
  return (
    <span
      className="inline-flex flex-col items-center justify-between h-[0.82em] shrink-0"
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => (
        <span key={i} className="bg-red-500 w-[0.16em] h-[0.16em] rounded-[0.04em] shrink-0" />
      ))}
    </span>
  )
}

function HeroOrnament() {
  return (
    <span className={`inline-flex items-center gap-[0.12em] shrink-0 text-fluid-hero ${bebas.className}`}>
      <span className="inline-flex items-center gap-[0.04em]">
        <span className="text-red-500 leading-none">|</span>
        <HeroRedDots />
      </span>
      <span
        className="inline-block w-[1.25em] h-[0.65em] border-[0.08em] border-solid border-red-500 box-border shrink-0"
        aria-hidden="true"
      />
      <span className="inline-flex items-center gap-[0.04em]">
        <HeroRedDots />
        <span className="text-red-500 leading-none">|</span>
      </span>
    </span>
  )
}

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  return (
    <PageLayout active="home" layoutClassName="bg-deep-blue">
      <style jsx global>{`
        .hero-bg {
          position: relative;
          background-image:
            linear-gradient(
              to right,
              rgba(10, 22, 40, 0.95),
              rgba(10, 22, 40, 0.75),
              rgba(10, 22, 40, 0.85)
            ),
            url('/hero.jpg');
          background-size: cover;
          background-position: center;
        }

        .hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle at 20% 20%,
            rgba(255, 255, 255, 0.08),
            transparent 55%
          );
          mix-blend-mode: soft-light;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }
      `}</style>

        {/* Hero — offset on lg so copy sits at viewport center, not main-column center */}
        <section className="hero-bg min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center justify-center w-full">
          <div className="hero-content w-full max-w-2xl mx-auto px-section-x sm:px-8 flex flex-col items-center text-center lg:-translate-x-[calc(clamp(12rem,18vw,16rem)/2)]">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="inline-grid grid-cols-[1fr_auto] items-center gap-x-3 tracking-tight">
                <span className="text-neutral-100 text-right text-fluid-hero font-semibold [font-family:var(--font-keshiva),sans-serif]">
                  Video Producer
                </span>
                <HeroOrnament />
                <span className="text-neutral-100 text-right text-fluid-hero font-semibold [font-family:var(--font-keshiva),sans-serif]">
                  Videographer
                </span>
                <HeroOrnament />
                <span className="text-neutral-100 text-right text-fluid-hero font-semibold [font-family:var(--font-keshiva),sans-serif]">
                  Video Editor
                </span>
                <HeroOrnament />
              </div>
            </div>

            <p className="text-fluid-lg text-neutral-200 max-w-xl mb-6 sm:mb-8">
              Framing the idea. Shooting the shot. Nailing the edit.
            </p>

            <Link href="/video/" className="inline-flex justify-center">
              <Button className="rounded-none bg-transparent border border-red-500 text-red-400 hover:bg-red-500 hover:text-white text-xs tracking-[0.25em] uppercase font-bold px-6 sm:px-8 py-4 sm:py-5">
                Portfolio
              </Button>
            </Link>
          </div>
        </section>

        {/* Block 1 – white text block */}
        <section className="bg-white text-black">
          <div className="max-w-content mx-auto py-section-y px-section-x sm:px-8">
            <div className="max-w-prose w-full">
              <Link
                href="/video"
                className="block text-[clamp(1.3rem,1.1rem+1.1vw,1.65rem)] leading-relaxed text-neutral-900 hover:text-red-600 transition-colors cursor-pointer"
              >
                From hero videos to corporate interviews check out some of the engaging content
                I&apos;ve created throughout the years.
              </Link>
            </div>
          </div>
        </section>

        {/* Block 3 – full-width contact CTA */}
        <section className="bg-deep-blue text-white flex justify-center w-full">
          <div className="w-full max-w-content mx-auto py-section-y px-section-x sm:px-8 flex flex-col items-center text-center lg:-translate-x-[calc(clamp(12rem,18vw,16rem)/2)]">
            <h3
              className="text-fluid-2xl font-semibold mb-8 sm:mb-10 tracking-tight"
            >
              Get moving. Get creative.
            </h3>

            <Link href="/contact" className="inline-flex justify-center mb-12">
              <Button className="rounded-none bg-red-500 hover:bg-red-600 text-xs tracking-[0.25em] uppercase font-bold px-8 sm:px-10 py-3 sm:py-4">
                Contact
              </Button>
            </Link>

            <div className="text-xs text-neutral-600 space-y-1">
              <p>Copyright – © {new Date().getFullYear()} Theodor Pintilie</p>
              <p>Created by Theodor Pintilie</p>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}