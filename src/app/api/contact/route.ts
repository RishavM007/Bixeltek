import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      firstName,
      lastName,
      name,
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
      city,
    } = data;

    const fullName =
      firstName && lastName
        ? `${firstName} ${lastName}`
        : name || "N/A";

    const location = country || city || "Unknown";

    /* ---------------- EMAIL ---------------- */

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILER_USER!,
        pass: process.env.MAILER_PASS!,
      },
    });

    await transporter.sendMail({
      from: '"Bixeltek Support" <noreply@bixeltek.com>',
      to: "zee@bixeltek.com",
      subject: "New Contact Form Submission",
      text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Company: ${company}
Location: ${location}
Budget: ${marketingBudget || "N/A"}
Service: ${services}
Website: ${website}

Message:
${message}
      `,
    });

    /* ---------------- FRAPPE CRM LEAD ---------------- */

    const frappeLeadPayload = {
      lead_name: fullName,
      email_id: email,
      mobile_no: phone || "",
      company_name: company || "",
      source: services || "Website",
      website: website || "",
      notes: `
    Location: ${location}
    Marketing Budget: ${marketingBudget || "N/A"}
    Service: ${services}

    Message:
    ${message}
        `,
        };

    try {
      const frappeRes = await fetch(
        `${process.env.FRAPPE_URL}/api/resource/Lead`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${process.env.FRAPPE_API_KEY}:${process.env.FRAPPE_API_SECRET}`,
          },
          body: JSON.stringify(frappeLeadPayload),
        }
      );

      const frappeData = await frappeRes.json();

      if (!frappeRes.ok) {
        console.error("❌ Frappe CRM Lead Error:", frappeData);
      } else {
        console.log("✅ Lead stored in Frappe CRM:", frappeData.data.name);
      }
    } catch (err) {
      console.error("❌ Frappe CRM API failed:", err);
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Server error" },
      { status: 500 }
    );
  }
}

