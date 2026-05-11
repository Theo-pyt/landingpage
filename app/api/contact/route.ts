import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const TO_EMAIL = 'theodor.pint@gmail.com'

type ContactPayload = {
  firstName: string
  lastName: string
  email: string
  comments: string
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function getEnv(name: string): string | undefined {
  const v = process.env[name]
  return v && v.trim() ? v : undefined
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { firstName, lastName, email, comments } = (body ?? {}) as Partial<ContactPayload>

  if (
    !isNonEmptyString(firstName) ||
    !isNonEmptyString(lastName) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(comments)
  ) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 },
    )
  }

  const host = getEnv('SMTP_HOST')
  const portRaw = getEnv('SMTP_PORT')
  const user = getEnv('SMTP_USER')
  const pass = getEnv('SMTP_PASS')

  if (!host || !portRaw || !user || !pass) {
    return NextResponse.json(
      {
        error:
          'Email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS.',
      },
      { status: 500 },
    )
  }

  const port = Number(portRaw)
  if (!Number.isFinite(port)) {
    return NextResponse.json({ error: 'SMTP_PORT must be a number' }, { status: 500 })
  }

  const from = getEnv('SMTP_FROM') ?? user

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  const subject = `New contact message from ${firstName} ${lastName}`
  const text = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    '',
    'Message:',
    comments,
  ].join('\n')

  try {
    await transporter.sendMail({
      from,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      text,
    })
  } catch (err) {
    const isProd = process.env.NODE_ENV === 'production'
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json(
      isProd ? { error: 'Failed to send email' } : { error: 'Failed to send email', details: message },
      { status: 500 },
    )
  }

  return NextResponse.json({ ok: true })
}

