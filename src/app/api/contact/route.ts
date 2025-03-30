import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
    return NextResponse.json({ message: "API is working!" });
}

export async function POST(req: Request) {
    try {
        const { firstName, lastName, email, phone, company, website, marketingDepartment, marketingBudget, services, message } = await req.json();

        // Nodemailer transport setup
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'solarisxavier@gmail.com',
                pass: 'hlwe ejng jehy zdqh',
              },
        });

        let mailOptions = {
            from: 'mondalrishav763@gmail.com',
            to: email, 
            subject: "New Contact Form Submission",
            text: `
                Name: ${firstName} ${lastName}
                Email: ${email}
                Phone: ${phone}
                Company: ${company}
                Website: ${website}
                Marketing Department: ${marketingDepartment}
                Marketing Budget: ${marketingBudget}
                Interested Service: ${services}
                Message: ${message}
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
