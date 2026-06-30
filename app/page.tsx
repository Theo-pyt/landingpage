'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Bebas_Neue } from 'next/font/google'
import { PageLayout } from '@/components/PageLayout'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

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
            <h2
              className={`text-fluid-hero font-semibold tracking-tight mb-3 sm:mb-4 ${bebas.className}`}
            >
              <span className="text-neutral-100">Videographer</span>
              <span className="text-red-500">|</span>
            </h2>

            <p className="text-fluid-lg text-neutral-200 max-w-xl mb-6 sm:mb-8">
              Allow your business to be seen in tomorrow&apos;s digital world.
            </p>

            <Link href="/about" className="inline-flex justify-center">
              <Button className="rounded-none bg-transparent border border-red-500 text-red-400 hover:bg-red-500 hover:text-white text-xs tracking-[0.25em] uppercase px-6 sm:px-8 py-4 sm:py-5">
                Learn More
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
                className={`block text-fluid-xl leading-relaxed text-neutral-900 hover:text-red-600 transition-colors cursor-pointer ${bebas.className}`}
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
              className={`text-fluid-2xl font-semibold mb-8 sm:mb-10 tracking-tight ${bebas.className}`}
            >
              Get moving. Get creative.
            </h3>

            <Link href="/contact" className="inline-flex justify-center mb-12">
              <Button className="rounded-none bg-red-500 hover:bg-red-600 text-xs tracking-[0.25em] uppercase px-8 sm:px-10 py-3 sm:py-4">
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