import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Validate environment variables
const validateEnv = () => {
  const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM', 'SMTP_TO']
  const missing = required.filter(key => !process.env[key])
  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(', ')}`)
  }
}

// Validate email input
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email) && email.length <= 254
}

// Sanitize text input
const sanitizeInput = (text) => {
  if (!text) return ''
  return text.toString().slice(0, 5000).trim()
}

export async function POST(request) {
  try {
    // Validate environment variables
    try {
      validateEnv()
    } catch (err) {
      console.error('Environment configuration error:', err.message)
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = email.toLowerCase().trim()
    const sanitizedPhone = sanitizeInput(phone)
    const sanitizedService = sanitizeInput(service)
    const sanitizedMessage = sanitizeInput(message)

    if (!sanitizedName || !sanitizedMessage) {
      return NextResponse.json(
        { error: 'Name and message cannot be empty' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      family: 4,
      connectionTimeout: 10000,
      socketTimeout: 10000,
    })

    // ======================
    // 1. ADMIN EMAIL
    // ======================
    const firstName = sanitizedName.split(' ')[0]
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Contact Form Submission — ${sanitizedName}`,
      replyTo: sanitizedEmail,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #FF6F23; margin-bottom: 8px;">New Contact Form Submission</h2>
          <p style="color: #555; margin-bottom: 24px;">Someone has submitted the contact form on rankfest.co.</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 16px; background: #f8f2e9; border-radius: 8px 8px 0 0; font-weight: 600; color: #0a0a0a; width: 140px;">Name</td>
              <td style="padding: 12px 16px; background: #f8f2e9; border-radius: 8px 8px 0 0; color: #0a0a0a;">${sanitizedName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #fff; border: 1px solid #eee; font-weight: 600; color: #0a0a0a;">Email</td>
              <td style="padding: 12px 16px; background: #fff; border: 1px solid #eee; color: #0a0a0a;">${sanitizedEmail}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #f8f2e9; font-weight: 600; color: #0a0a0a;">Phone</td>
              <td style="padding: 12px 16px; background: #f8f2e9; color: #0a0a0a;">${sanitizedPhone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #fff; border: 1px solid #eee; font-weight: 600; color: #0a0a0a;">Service Interest</td>
              <td style="padding: 12px 16px; background: #fff; border: 1px solid #eee; color: #0a0a0a;">${sanitizedService || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #f8f2e9; border-radius: 0 0 8px 8px; font-weight: 600; color: #0a0a0a; vertical-align: top;">Message</td>
              <td style="padding: 12px 16px; background: #f8f2e9; border-radius: 0 0 8px 8px; color: #0a0a0a; white-space: pre-wrap;">${sanitizedMessage}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #FF6F23; border-radius: 8px; display: inline-block;">
            <a href="mailto:${sanitizedEmail}" style="color: white; font-weight: 700; text-decoration: none; font-size: 14px;">
              Reply to ${sanitizedName} →
            </a>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Submitted at ${new Date().toLocaleString('en-GB', { timeZone: 'UTC' })} UTC via rankfest.co/contact
          </p>
        </div>
      `,
    })

    // ======================
    // 2. USER CONFIRMATION EMAIL
    // ======================
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: sanitizedEmail,
      subject: `Thanks for reaching out, ${firstName} — We'll be in touch soon`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f2e9;">
          <div style="background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 24px rgba(0,0,0,0.06);">
            <h1 style="font-size: 26px; color: #0a0a0a; margin-bottom: 8px;">
              Message received, ${firstName}! 👋
            </h1>
            <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
              Thanks for getting in touch with RankFest. A member of our team will review your message and
              get back to you within <strong style="color: #0a0a0a;">24 hours</strong> — usually much sooner.
            </p>
            ${sanitizedService ? `
            <div style="background: #f8f2e9; border-radius: 8px; padding: 16px; margin-bottom: 24px; border-left: 4px solid #FF6F23;">
              <strong style="color: #FF6F23;">You asked about:</strong>
              <span style="color: #0a0a0a; margin-left: 8px;">${sanitizedService}</span>
            </div>
            ` : ''}
            <p style="color: #666; font-size: 15px; line-height: 1.7; margin-bottom: 8px;">
              While you wait, here are a few things worth knowing:
            </p>
            <ul style="color: #666; font-size: 15px; line-height: 2; padding-left: 20px; margin-bottom: 24px;">
              <li>We never pitch you on a call without understanding your situation first</li>
              <li>Our free audit takes 24 hours and gives you a real picture of your local visibility</li>
              <li>No long-term contracts — we earn your business every single month</li>
            </ul>
            <div style="text-align: center; margin-top: 32px;">
              <a href="https://rankfest.co/#free-audit" style="background: #FF6F23; color: white; padding: 14px 32px; border-radius: 100px; text-decoration: none; font-weight: 700; font-size: 15px;">
                Get Your Free Audit While You Wait
              </a>
            </div>
            <p style="margin-top: 32px; font-size: 13px; color: #aaa; text-align: center;">
              Questions? Reply to this email or reach us at info@rankfest.co · +44 748 7516 849
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form API error:', error)

    // Don't expose internal error details to client
    if (error.message?.includes('ECONNREFUSED') || error.message?.includes('SMTP')) {
      return NextResponse.json(
        { error: 'Email service temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
