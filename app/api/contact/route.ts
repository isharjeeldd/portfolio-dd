import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const { firstName, lastName, email, country, phoneNumber, message } = await req.json()

    if (!firstName || !lastName || !email || !country || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    try {
        const data = await resend.emails.send({
            from: process.env.RESEND_EMAIL_FROM || "Sharjeel's Portfolio <contact@sharjeelafzaal.com>",
            to: process.env.RESEND_EMAIL_TO || 'sharjeelafzaal123@gmail.com',
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            replyTo: email,
            react: EmailTemplate({ firstName, lastName, email, country, phoneNumber, message }),
        })

        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ success: false, error }, { status: 500 })
    }
}