import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const {
      name,
      email,
      phone,
      businessName,
      website,
      budget,
      message,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      family: 4,
    });

    // ✅ Safe website link
    const safeWebsite =
      website && website.startsWith('http')
        ? website
        : website
          ? `https://${website}`
          : null;

    // ======================
    // 1. ADMIN EMAIL
    // ======================
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Lead: ${businessName} - Website Audit Request`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Business: ${businessName}
Website: ${website || 'N/A'}
Budget: ${budget || 'N/A'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f9f9f9; padding:20px;">
          <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid #eee;">
            
            <div style="background:#000; padding:15px;">
              <h2 style="color:#C9F31D; margin:0;">New Lead</h2>
            </div>

            <div style="padding:20px; color:#333;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
              <p><strong>Business:</strong> ${businessName}</p>
              <p><strong>Website:</strong> ${safeWebsite
          ? `<a href="${safeWebsite}" style="color:#000;">${website}</a>`
          : 'N/A'
        }</p>
              <p><strong>Budget:</strong> ${budget || 'N/A'}</p>

              <div style="margin-top:15px;">
                <p><strong>Message:</strong></p>
                <p style="background:#f5f5f5; padding:10px; border-radius:5px;">
                  ${message.replace(/\n/g, '<br>')}
                </p>
              </div>
            </div>

          </div>
        </div>
      `,
    });

    // ======================
    // 2. USER EMAIL
    // ======================
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'We received your request we will be in touch shortly',
      text: `
Hi ${name},

Thanks for reaching out. We have received your website audit request.

Our team will review your details and get back to you within 24 hours.

Business: ${businessName}
Website: ${website || 'N/A'}

If you want to add anything, just reply to this email.

Best regards,
Team RankFest
      `,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f9f9f9; padding:20px;">
          <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden; border:1px solid #eee;">
            
            <!-- Header -->
            <div style="background:#000; padding:20px; text-align:center;">
              <img src="${process.env.LOGO_URL}" alt="RankFest" style="max-height:40px; margin-bottom:10px;" />
              <h2 style="color:#C9F31D; margin:0;">Request Received</h2>
            </div>

            <!-- Body -->
            <div style="padding:20px; color:#333;">
              <p>Hi ${name},</p>

              <p>Thanks for reaching out. We have received your website audit request.</p>

              <p>Our team is reviewing your details and will get back to you within <strong>24 hours</strong>.</p>

              <div style="background:#f5f5f5; border-left:4px solid #C9F31D; padding:15px; margin:20px 0;">
                <p style="margin:0;"><strong>Business:</strong> ${businessName}</p>
                <p style="margin:5px 0 0;">
                  <strong>Website:</strong> ${website || 'N/A'}
                </p>
              </div>

              <p>If you want to add anything, just reply to this email.</p>

              <p style="margin-top:20px;">
                Best regards<br/>
                <strong>Team RankFest</strong>
              </p>
            </div>

            <!-- Footer -->
            <div style="background:#fafafa; padding:15px; text-align:center; font-size:12px; color:#777;">
              <p style="margin:0;">This is a confirmation that we received your request.</p>
            </div>

          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.log('SMTP Error:', error);
    return NextResponse.json(
      { message: 'Error sending message', error: error.message },
      { status: 500 }
    );
  }
}