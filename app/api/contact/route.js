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

// Validate URL format
const isValidUrl = (urlString) => {
  try {
    // Add protocol if missing
    const urlToValidate = urlString.startsWith('http') ? urlString : `https://${urlString}`
    new URL(urlToValidate)
    return true
  } catch {
    return false
  }
}

// Validate email input
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email) && email.length <= 254
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
    const { url, email } = body

    if (!url || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: url, email' },
        { status: 400 }
      )
    }

    // Validate URL format
    if (!isValidUrl(url)) {
      return NextResponse.json(
        { error: 'Invalid URL format' },
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

    const sanitizedUrl = url.slice(0, 2048).toLowerCase().trim()
    const sanitizedEmail = email.toLowerCase().trim()

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
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Free Audit Request — ${sanitizedUrl}`,
      replyTo: sanitizedEmail,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #FF6F23; margin-bottom: 8px;">New Audit Request</h2>
          <p style="color: #555; margin-bottom: 24px;">A new free audit request has been submitted via the RankFest website.</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 16px; background: #f8f2e9; border-radius: 8px 8px 0 0; font-weight: 600; color: #0a0a0a;">Website URL</td>
              <td style="padding: 12px 16px; background: #f8f2e9; border-radius: 8px 8px 0 0; color: #0a0a0a;">${sanitizedUrl}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #fff; border: 1px solid #eee; font-weight: 600; color: #0a0a0a;">Client Email</td>
              <td style="padding: 12px 16px; background: #fff; border: 1px solid #eee; color: #0a0a0a;">${sanitizedEmail}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; background: #f8f2e9; border-radius: 0 0 8px 8px; font-weight: 600; color: #0a0a0a;">Submitted At</td>
              <td style="padding: 12px 16px; background: #f8f2e9; border-radius: 0 0 8px 8px; color: #0a0a0a;">${new Date().toLocaleString('en-GB', { timeZone: 'UTC' })} UTC</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #FF6F23; border-radius: 8px;">
            <a href="mailto:${sanitizedEmail}" style="color: white; font-weight: 700; text-decoration: none; font-size: 14px;">
              Reply to Client →
            </a>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">This notification was sent automatically from rankfest.co</p>
        </div>
      `,
    })

    // ======================
    // 2. USER CONFIRMATION EMAIL
    // ======================
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: sanitizedEmail,
      subject: 'Your Free SEO Audit Request — We\'ve Got It 🎯',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f2e9;">
          <div style="background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 24px rgba(0,0,0,0.06);">
            <h1 style="font-size: 28px; color: #0a0a0a; margin-bottom: 8px;">
              Your audit is in the queue 🚀
            </h1>
            <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
              Thanks for reaching out! We've received your free audit request for:
            </p>
            <div style="background: #f8f2e9; border-radius: 8px; padding: 16px; margin-bottom: 24px; border-left: 4px solid #FF6F23;">
              <strong style="color: #FF6F23;">Website:</strong>
              <span style="color: #0a0a0a; margin-left: 8px;">${sanitizedUrl}</span>
            </div>
            <p style="color: #666; font-size: 15px; line-height: 1.7; margin-bottom: 16px;">
              Here's what happens next:
            </p>
            <ul style="color: #666; font-size: 15px; line-height: 2; padding-left: 20px; margin-bottom: 24px;">
              <li>Our team will review your site within <strong style="color: #0a0a0a;">24 hours</strong></li>
              <li>We'll run a full audit: GBP, citations, on-page signals, and backlinks</li>
              <li>You'll receive a detailed report with your top priority fixes</li>
              <li>No sales pressure — just honest data about where you stand</li>
            </ul>
            <div style="text-align: center; margin-top: 32px;">
              <a href="https://rankfest.co" style="background: #FF6F23; color: white; padding: 14px 32px; border-radius: 100px; text-decoration: none; font-weight: 700; font-size: 15px;">
                Visit RankFest.co
              </a>
            </div>
            <p style="margin-top: 32px; font-size: 13px; color: #aaa; text-align: center;">
              Questions? Reply to this email or reach us at info@rankfest.co
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)

    // Don't expose internal error details to client
    if (error.message?.includes('ECONNREFUSED') || error.message?.includes('SMTP')) {
      return NextResponse.json(
        { error: 'Email service temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}
