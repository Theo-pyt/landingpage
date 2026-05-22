'use client'

import { useMemo, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Button } from '@/components/ui/button'
import { Bebas_Neue } from 'next/font/google'
import { PageLayout } from '@/components/PageLayout'
import { PageContent } from '@/components/PageContent'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

const inputClass = 'form-input'
const labelClass = 'form-label'
const hintClass = 'form-hint'

export default function ContactPage() {
  const [state, handleSubmit] = useForm('mjgzgblg')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [comments, setComments] = useState('')
  const [emailMismatch, setEmailMismatch] = useState(false)

  const canSubmit = useMemo(() => {
    const ok =
      firstName.trim() &&
      lastName.trim() &&
      email.trim() &&
      confirmEmail.trim() &&
      comments.trim() &&
      email.trim() === confirmEmail.trim() &&
      !state.submitting
    return Boolean(ok)
  }, [comments, confirmEmail, email, firstName, lastName, state.submitting])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (email.trim() !== confirmEmail.trim()) {
      e.preventDefault()
      setEmailMismatch(true)
      return
    }
    setEmailMismatch(false)
    await handleSubmit(e)
  }

  return (
    <PageLayout active="contact" mainClassName="bg-white text-black">
      <PageContent
        narrow
        className="lg:-translate-x-[calc(clamp(12rem,18vw,16rem)/2)]"
      >
        <h2
          className={`text-fluid-2xl font-semibold mb-6 sm:mb-8 lg:mb-10 tracking-tight text-neutral-900 ${bebas.className}`}
        >
          Contact Us
        </h2>

        {state.succeeded ? (
          <p className="text-fluid-base text-green-700">
            Message sent. I&apos;ll get back to you soon.
          </p>
        ) : (
          <form
            className="w-full space-y-6 sm:space-y-8 lg:space-y-10"
            onSubmit={onSubmit}
          >
            <div className="space-y-3">
              <label className={labelClass}>
                Name{' '}
                <span className="text-red-500 text-fluid-sm align-middle">(Required)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <p className={`${hintClass} mb-1`}>First</p>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={inputClass}
                  />
                  <ValidationError
                    field="firstName"
                    errors={state.errors}
                    className="text-fluid-sm text-red-700 mt-1"
                  />
                </div>
                <div>
                  <p className={`${hintClass} mb-1`}>Last</p>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={inputClass}
                  />
                  <ValidationError
                    field="lastName"
                    errors={state.errors}
                    className="text-fluid-sm text-red-700 mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className={labelClass}>
                Email{' '}
                <span className="text-red-500 text-fluid-sm align-middle">(Required)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <p className={`${hintClass} mb-1`}>Enter Email</p>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                  <ValidationError
                    field="email"
                    errors={state.errors}
                    className="text-fluid-sm text-red-700 mt-1"
                  />
                </div>
                <div>
                  <p className={`${hintClass} mb-1`}>Confirm Email</p>
                  <input
                    type="email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
              {emailMismatch ? (
                <p className="text-fluid-sm text-red-700">Email addresses do not match.</p>
              ) : null}
            </div>

            <div className="space-y-3">
              <label className={labelClass}>
                Comments{' '}
                <span className="text-red-500 text-fluid-sm align-middle">(Required)</span>
              </label>
              <p className={hintClass}>
                Please let me know what&apos;s on your mind. Have a question or a project idea?
                Ask away.
              </p>
              <textarea
                maxLength={600}
                name="message"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className={`${inputClass} min-h-textarea resize-y`}
              />
              <p className="text-fluid-sm text-neutral-400">
                {comments.length} of 600 max characters
              </p>
              <ValidationError
                field="message"
                errors={state.errors}
                className="text-fluid-sm text-red-700"
              />
            </div>

            <ValidationError errors={state.errors} className="text-fluid-sm text-red-700" />

            <div>
              <Button
                type="submit"
                disabled={!canSubmit}
                className="w-full sm:w-auto rounded-none bg-red-500 hover:bg-red-600 text-xs tracking-[0.25em] uppercase px-8 sm:px-10 py-3 sm:py-4"
              >
                {state.submitting ? 'Sending…' : 'Submit'}
              </Button>
            </div>
          </form>
        )}
      </PageContent>
    </PageLayout>
  )
}
