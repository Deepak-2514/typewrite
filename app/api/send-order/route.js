import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    console.log("Received order data:", data);

    const {
      name,
      companyName,
      email,
      phone,
      address,
      city,
      state,
      country,
      zipCode,
      deliveryDate,
      products,
    } = data;

    // Validate required fields
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !country ||
      !zipCode ||
      !deliveryDate ||
      !products ||
      !Array.isArray(products)
    ) {
      return NextResponse.json(
        { error: "Missing required fields or invalid data format" },
        { status: 400 }
      );
    }

    console.log("Received order from:", email);

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Calculate total quantity
    const totalQuantity = products.reduce(
      (sum, product) => sum + (product.quantity || 0),
      0
    );

    // Format delivery date
    const formattedDeliveryDate = new Date(deliveryDate).toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

    // Email content for admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: ["rajusanapala1974@gmail.com", "rajus@bioareca.com"],
      subject: "New Order Received",
      html: `
        <h2>New Order Details</h2>
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company Name:</strong> ${companyName || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>ZIP Code:</strong> ${zipCode}</p>
        <p><strong>Intended Delivery Date:</strong> ${formattedDeliveryDate}</p>
        
        <h3>Order Details</h3>
        <p><strong>Total Items:</strong> ${products.length}</p>
        <p><strong>Total Quantity:</strong> ${totalQuantity}</p>
        
        <div style="margin-top: 20px;">
          ${products
            .map(
              (product) => `
            <div style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid #eee;">
              <p><strong>Product:</strong> ${product.name}</p>
              <p><strong>Size:</strong> ${product.selectedSize}</p>
              <p><strong>Quantity:</strong> ${product.quantity}</p>
            </div>
          `
            )
            .join("")}
        </div>
      `,
    };

    // Simplified email content for customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Order Received - BioAreca",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #10B981; text-align: center;">BioAreca</h2>
          <div style="background-color: #F0FDF4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #065F46; font-size: 16px;">Dear ${name},</p>
            <p style="color: #065F46; font-size: 16px;">Thank you for your order! We have received it and are processing it now. For help contact rajus@bioareca.com</p>
          </div>
          <p style="color: #6B7280; text-align: center; font-size: 14px;">Thank you for choosing BioAreca!</p>
        </div>
      `,
    };

    // Send emails with better error handling
    try {
      console.log("Sending admin email...");
      await transporter.sendMail(adminMailOptions);
      console.log("Admin email sent successfully");
    } catch (adminError) {
      console.error("Error sending admin email:", adminError);
      // Continue with customer email even if admin email fails
    }

    try {
      console.log("Sending customer email to:", email);
      await transporter.sendMail(customerMailOptions);
      console.log("Customer email sent successfully");
    } catch (customerError) {
      console.error("Error sending customer email:", customerError);
      // Return error specifically about customer email
      return NextResponse.json(
        { error: "Failed to send customer confirmation email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing order:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process order" },
      { status: 500 }
    );
  }
}
