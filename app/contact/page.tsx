'use client'

import { Button } from "@/components/ui/button"
import { Bebas_Neue } from "next/font/google"
import { Sidebar } from "@/components/Sidebar"

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export default function ContactPage() {
  return (
    <div className={`min-h-screen bg-black text-white flex ${bebas.className}`}>
      <Sidebar active="contact" />

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
