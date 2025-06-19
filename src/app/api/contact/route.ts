import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        console.log("Received Form Data:", data); // ✅ Debugging

        let transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com", // ✅ Hostinger SMTP
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAILER_USER,
                pass: process.env.MALER_PASS, 
            },
        });

        console.log("SMTP Connection Test...");
        try {
            await transporter.verify();
            console.log("✅ SMTP Connection Successful!");
        } catch (error) {
            console.error("❌ SMTP Connection Failed:", error);
            return NextResponse.json({ error: "SMTP connection failed", details: error  }, { status: 500 });
        }


        let mailOptions = {
            from: '"Bixeltek Support" <noreply@bixeltek.com>',
            to: "zee@bixeltek.com", // ✅ Sending to the entered email
            subject: " Bixeltek - New Contact Form Submission",
            text: `Name: ${data.firstName} ${data.lastName}
                Email: ${data.email}
                Phone: ${data.phone}
                Company: ${data.company}
                country: ${data.country}
                Marketing Budget: ${data.marketingBudget}
                Interested Service: ${data.services}
                Message: ${data.message}
                Website: ${data.website}`,
        };

        let info = await transporter.sendMail(mailOptions);
        console.log("Email Sent:", info.response); // ✅ Debugging

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error : any) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
    }
}
