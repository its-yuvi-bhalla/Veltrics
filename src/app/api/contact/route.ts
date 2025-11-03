import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Create transporter

    console.log("MAIL_USER:", process.env.MAIL_USER)
console.log("MAIL_PASS exists:", !!process.env.MAIL_PASS)


    const transporter = nodemailer.createTransport({
      host: "smtp.ionos.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER, // your domain email
        pass: process.env.MAIL_PASS, // your email password or app password
      },
    })

    // Send mail
    await transporter.sendMail({
      from: `"Veltrics Website" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: `📩 New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ success: false, error })
  }
}
