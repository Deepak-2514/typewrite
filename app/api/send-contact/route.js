import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, companyName, companyAddress, message } =
      await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required fields" },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email credentials in environment variables");
      return NextResponse.json(
        { message: "Email configuration error" },
        { status: 500 }
      );
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return NextResponse.json(
        { message: "SMTP connection failed", error: verifyError.message },
        { status: 500 }
      );
    }

    // Email content for admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: ["rajusanapala1974@gmail.com", "rajus@bioareca.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company Name:</strong> ${companyName || "N/A"}</p>
        ${
          companyAddress
            ? `<p><strong>Company Address:</strong> ${companyAddress}</p>`
            : ""
        }
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Email content for customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting BioAreca",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #10B981; text-align: center;">BioAreca</h2>
          <div style="background-color: #F0FDF4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #065F46; font-size: 16px;">Dear ${name},</p>
            <p style="color: #065F46; font-size: 16px;">Thank you for contacting us. We have received your message and will process your details within 24 hours.</p>
            <p style="color: #065F46; font-size: 16px;">If you have any urgent inquiries, please feel free to contact us directly at rajus@bioareca.com</p>
          </div>
          <p style="color: #6B7280; text-align: center; font-size: 14px;">Thank you for choosing BioAreca!</p>
        </div>
      `,
    };

    // Send emails
    console.log("Attempting to send emails...");
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);
    console.log("Emails sent successfully");

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Detailed error sending email:", {
      message: error.message,
      code: error.code,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        message: "Failed to send email",
        error: error.message,
        code: error.code,
      },
      { status: 500 }
    );
  }
}
