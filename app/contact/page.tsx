'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Bebas_Neue } from "next/font/google"

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export default function ContactPage() {
  return (
    <div className={`min-h-screen bg-black text-white flex ${bebas.className}`}>
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-black border-r border-neutral-900 flex flex-col justify-between py-10 px-10 sticky top-0 h-screen">
        <div className="space-y-10">
          <Link href="/" className="block cursor-pointer select-none">
            <div>
              <div
                className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mb-4"
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
          </Link>

          <nav className="space-y-4 text-sm tracking-[0.25em] uppercase text-neutral-400">
            <Link href="/" className="block hover:text-white transition-colors">
              About
            </Link>
            <button className="block hover:text-white transition-colors">Video</button>
            <button className="block hover:text-white transition-colors">Design</button>
            <button className="block hover:text-white transition-colors">Photo</button>
            <button className="block hover:text-white transition-colors">Blog</button>
          </nav>
        </div>

        <div>
          <Link href="/contact">
            <Button className="w-full rounded-none bg-red-500 hover:bg-red-600 text-xs tracking-[0.25em] uppercase">
              Contact
            </Button>
          </Link>
        </div>
      </aside>

      {/* Contact content */}
      <main className="flex-1 bg-white text-black">
        <div className="max-w-4xl mx-auto py-20 px-8">
          <h2
            className={`text-4xl md:text-5xl font-semibold mb-10 tracking-tight text-neutral-900 ${bebas.className}`}
          >
            Contact Us
          </h2>

          <form className="space-y-10 max-w-3xl">
            {/* Name */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-neutral-900">
                Name <span className="text-red-500 text-xs align-middle">(Required)</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-neutral-500 mb-1">First</p>
                  <input
                    type="text"
                    className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Last</p>
                  <input
                    type="text"
                    className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-neutral-900">
                Email <span className="text-red-500 text-xs align-middle">(Required)</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Enter Email</p>
                  <input
                    type="email"
                    className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Confirm Email</p>
                  <input
                    type="email"
                    className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-neutral-900">
                Comments <span className="text-red-500 text-xs align-middle">(Required)</span>
              </label>
              <p className="text-xs text-neutral-500">
                Please let me know what&apos;s on your mind. Have a question or a project idea? Ask
                away.
              </p>
              <textarea
                rows={6}
                maxLength={600}
                className="w-full border border-neutral-300 px-3 py-2 text-sm resize-vertical focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <p className="text-xs text-neutral-400">0 of 600 max characters</p>
            </div>

            <div>
              <Button
                type="submit"
                className="rounded-none bg-red-500 hover:bg-red-600 text-xs tracking-[0.25em] uppercase px-10 py-4"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
