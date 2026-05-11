'use client'

import { useMemo, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Bebas_Neue } from "next/font/google"
import { Sidebar } from "@/components/Sidebar"

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
})

export default function ContactPage() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [comments, setComments] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const canSubmit = useMemo(() => {
    const ok =
      firstName.trim() &&
      lastName.trim() &&
      email.trim() &&
      confirmEmail.trim() &&
      comments.trim() &&
      email.trim() === confirmEmail.trim() &&
      status !== 'sending'
    return Boolean(ok)
  }, [comments, confirmEmail, email, firstName, lastName, status])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    if (email.trim() !== confirmEmail.trim()) {
      setStatus('error')
      setError('Email addresses do not match.')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          comments,
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error ?? 'Failed to send message.')
      }

      setStatus('sent')
      setFirstName('')
      setLastName('')
      setEmail('')
      setConfirmEmail('')
      setComments('')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Failed to send message.')
    }
  }

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

          <form className="space-y-10 max-w-3xl" onSubmit={onSubmit}>
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Last</p>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Confirm Email</p>
                  <input
                    type="email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
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
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="w-full border border-neutral-300 px-3 py-2 text-sm resize-vertical focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <p className="text-xs text-neutral-400">{comments.length} of 600 max characters</p>
            </div>

            {status === 'sent' ? (
              <p className="text-sm text-green-700">Message sent. I&apos;ll get back to you soon.</p>
            ) : null}
            {status === 'error' && error ? (
              <p className="text-sm text-red-700">{error}</p>
            ) : null}

            <div>
              <Button
                type="submit"
                disabled={!canSubmit}
                className="rounded-none bg-red-500 hover:bg-red-600 text-xs tracking-[0.25em] uppercase px-10 py-4"
              >
                {status === 'sending' ? 'Sending…' : 'Submit'}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
