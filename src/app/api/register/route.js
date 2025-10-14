import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

function getServiceAccountKey() {
  const raw = process.env.ENROLLMENT_SA_KEY_B64;
  if (!raw) {
    throw new Error("Missing SA_KEY_BASE64");
  }
  return JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
}

async function sendConfirmationEmail({ firstName, email }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"BTC Shule" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to the Trezor Academy Program",
    html: `
      <p>Dear ${firstName},</p>

      <p>Thank you for signing up for our Trezor Academy program.</p>

      <p>You are currently on our waiting list, and we will share the details of the next cohort with you soon, it will take place in the coming days.</p>

      <p>In the meantime, please stay updated by following our 
      👉 <a href="https://academy.trezor.io/countries/burundi">Trezor Academy Burundi</a> page for the latest information.</p>

      <p>Welcome once again!</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(request) {
  const { firstName, lastName, email, country } = await request.json();

  const normalizedCountry =
    country && country.trim().length > 0
      ? country.trim().charAt(0).toUpperCase() +
        country.trim().slice(1).toLowerCase()
      : "";

  const key = getServiceAccountKey();
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: key.client_email,
      private_key: key.private_key,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "12oNfQaws3nQbH7n7qTEtmS8IkKLM4YlvXcBCyoUMCN0";

  try {
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!D2:D",
    });

    const emails = (existing.data.values || [])
      .flat()
      .map((e) => e.toLowerCase());

    if (emails.includes(email.toLowerCase())) {
      return NextResponse.json(
        { status: "duplicate", message: "Email already registered." },
        { status: 400 }
      );
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A2:H2",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            firstName,
            lastName,
            email,
            normalizedCountry,
          ],
        ],
      },
    });

    await sendConfirmationEmail({ firstName, email });

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (err) {
    console.error("Enrollment error:", err);
    return NextResponse.json(
      { status: "error", message: err.message },
      { status: 500 }
    );
  }
}
