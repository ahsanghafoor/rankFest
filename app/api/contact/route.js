import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, businessName, website, budget, message } = await req.json();

    // Create a transporter using dummy credentials as requested
    // In production, these should be in .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'dummy_user@example.com',
        pass: process.env.SMTP_PASS || 'dummy_password',
      },
    });

    // Email content
    const mailOptions = {
      from: `"RankFest Contact" <${process.env.SMTP_USER || 'noreply@rankfest.com'}>`,
      to: 'hello@rankfest.com', // Agency email
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
        <h3>New Lead from RankFest Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Website:</strong> <a href="${website}">${website || 'N/A'}</a></p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Note: Since these are dummy credentials, this will likely fail if actually run
    // unless the user provides real ones. We wrap it to ensure it doesn't crash the app.
    // For now, we'll simulate a success to show the flow.
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Form received (Dev mode, simulating success):', { name, email, businessName });
      return NextResponse.json({ message: 'Success (Simulated)' }, { status: 200 });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ message: 'Error sending message', error: error.message }, { status: 500 });
  }
}
