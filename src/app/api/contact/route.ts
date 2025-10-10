import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        console.log("Received Form Data:", data);

        const {
            firstName,
            lastName,
            email,
            phone,
            company,
            country,
            marketingBudget,
            services,
            website,
            message,
            websiteType,
            seoGoals,
            ppcPlatform,
        } = data;

        let transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAILER_USER,
                pass: process.env.MAILER_PASS,
            },
        });

        try {
            await transporter.verify();
            console.log("✅ SMTP Connection Successful!");
        } catch (error) {
            console.error("❌ SMTP Connection Failed:", error);
            return NextResponse.json(
                { error: "SMTP connection failed", details: error },
                { status: 500 }
            );
        }

        // 🧠 Dynamically append conditional service-specific inputs
        let serviceDetails = "";
        if (services === "Web Design and Development" && websiteType) {
            serviceDetails += `\nWebsite Type: ${websiteType}`;
        }
        if (services === "SEO Optimization" && seoGoals) {
            serviceDetails += `\nSEO Goals: ${seoGoals}`;
        }
        if (services === "PPC Campaigns" && ppcPlatform) {
            serviceDetails += `\nPPC Platform: ${ppcPlatform}`;
        }

        const mailOptions = {
            from: '"Bixeltek Support" <noreply@bixeltek.com>',
            to: "zee@bixeltek.com",
            subject: "Bixeltek - New Contact Form Submission",
            text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company}
Country: ${country}
Marketing Budget: ${marketingBudget}
Interested Service: ${services}${serviceDetails}
Message: ${message}
Website: ${website}
            `,
        };

        let info = await transporter.sendMail(mailOptions);
        console.log("📩 Email Sent:", info.response);

        return NextResponse.json(
            { message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("❌ Server Error:", error);
        return NextResponse.json(
            { error: error.message || "Failed to send email" },
            { status: 500 }
        );
    }
}
