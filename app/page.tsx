'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Bebas_Neue } from 'next/font/google'

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
    <div className={`min-h-screen bg-black text-white flex ${bebas.className}`}>
      <style jsx global>{`
        .hero-bg {
          position: relative;
          background-image:
            linear-gradient(
              to right,
              rgba(0, 0, 0, 0.95),
              rgba(0, 0, 0, 0.75),
              rgba(0, 0, 0, 0.85)
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

      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-black border-r border-neutral-900 flex flex-col justify-between py-10 px-10 sticky top-0 h-screen">
        <div className="space-y-10">
          <div>
            <div
              className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mb-8"
              aria-hidden="true"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
              >
                <path d="M7 4v16l13-8z" />
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase">
                Portfolio of
              </p>
              <h1 className={`text-[2.4rem] font-extrabold tracking-[0.12em] leading-[1.05] ${bebas.className}`}>
                THEODOR
                <br />
                PINTILIE
              </h1>
            </div>
          </div>

          <nav className="space-y-4 text-sm tracking-[0.25em] uppercase text-neutral-400">
            <button className="block hover:text-white transition-colors">About</button>
            <button className="block hover:text-white transition-colors">Video</button>
            <button className="block hover:text-white transition-colors">Design</button>
            <button className="block hover:text-white transition-colors">Photo</button>
            <button className="block hover:text-white transition-colors">Blog</button>
          </nav>
        </div>

        <div>
          <Button className="w-full rounded-none bg-red-500 hover:bg-red-600 text-xs tracking-[0.25em] uppercase">
            Contact
          </Button>
        </div>
      </aside>

      {/* Right column with scrolling sections */}
      <main className="flex-1 overflow-x-hidden">
        {/* Hero */}
        <section className="hero-bg min-h-screen flex items-center justify-center">
          <div className="hero-content w-full px-10 md:px-20 flex justify-center">
            <div className="max-w-2xl text-center">
              <h2
                className={`text-5xl md:text-6xl font-semibold tracking-tight mb-4 ${bebas.className}`}
              >
                <span className="text-neutral-100">Videographer</span>
                <span className="text-red-500">|</span>
              </h2>

              <p className="text-lg text-neutral-200 max-w-xl mx-auto mb-8">
                Allow your business to be seen in tomorrow&apos;s digital world.
              </p>

              <Button className="rounded-none bg-transparent border border-red-500 text-red-400 hover:bg-red-500 hover:text-white text-xs tracking-[0.25em] uppercase px-8 py-5">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Block 1 – white text block */}
        <section className="bg-white text-black">
          <div className="max-w-5xl mx-auto py-20 px-8">
            <div className="max-w-3xl">
              <p className={`text-xl leading-relaxed text-neutral-900 ${bebas.className}`}>
                From animated corporate social graphics to cinematic wedding films, check out some
                of the engaging content I&apos;ve created throughout the years.
              </p>
            </div>
          </div>
        </section>

        {/* Block 2 – black with imagery */}
        <section className="bg-black text-white">
          <div className="max-w-5xl mx-auto py-20 px-8">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black h-64 md:h-96 relative overflow-hidden">
                <img
                  src="/reel-1.jpg"
                  alt="Portrait still"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="bg-black h-64 md:h-96 relative overflow-hidden md:col-span-2">
                <img
                  src="/reel-2.jpg"
                  alt="Camera operator at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black h-40 md:h-48 overflow-hidden">
                <img
                  src="/reel-3.jpg"
                  alt="On-site filming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black h-40 md:h-48 overflow-hidden">
                <img
                  src="/reel-4.jpg"
                  alt="Outdoor production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-black h-40 md:h-48 overflow-hidden">
                <img
                  src="/reel-5.jpg"
                  alt="Additional production still"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Block 3 – full-width contact CTA */}
        <section className="bg-black text-white">
          <div className="max-w-5xl mx-auto py-24 px-8 text-center">
            <h3
              className={`text-3xl md:text-4xl font-semibold mb-10 tracking-tight ${bebas.className}`}
            >
              Get moving. Get creative.
            </h3>

            <div className="mb-12">
              <Button className="rounded-none bg-red-500 hover:bg-red-600 text-xs tracking-[0.25em] uppercase px-10 py-4">
                Contact
              </Button>
            </div>

            <div className="text-xs text-neutral-600 space-y-1">
              <p>Copyright – © {new Date().getFullYear()} Theodor Pintilie</p>
              <p>Created by Theodor Pintilie</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}