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
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"BTC Shule" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to the Bitcoin Diploma Course",
    html: `
      <p>Dear ${firstName},</p>

      <p>Thank you for registering for the <strong>Bitcoin Diploma Course</strong> – we're happy to have you onboard!</p>

      <p>📅 <strong>Classes begin on 21st October 2025</strong><br/>
      📍 Online | Hosted by <strong>The Core – Bitcoin Education</strong></p>

      <p>🎯 <strong>What You’ll Gain:</strong></p>
      <ul>
        <li>A solid understanding of Bitcoin fundamentals and the concept of money</li>
        <li>Practical skills on how to set up a wallet and send/receive Bitcoin securely</li>
        <li>A Certificate of Completion + Bitcoin rewards sent directly to your wallet</li>
      </ul>

      <p>🔔 <strong>Stay Connected!</strong><br/>
      👉 <a href="https://chat.whatsapp.com/FgFflU9UbNxKuuyQDUZBNi">Join WhatsApp Group</a><br/>
      👉 <a href="https://t.me/thecor21m/3359">Join Telegram Group</a></p>

      <p>📌 Please read the group description after joining for important details about the course.</p>

      <p>If you have any questions before the course begins, feel free to reply to this email.</p>

      <p>We’re excited to meet you in class and start this journey together!</p>

      <p>Best regards,<br/>
      <strong>The Core – Bitcoin Education Team</strong></p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(request) {
  const { firstName, secondName, email, country } = await request.json();

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
  const spreadsheetId = "1mbMFy16w_ogZtbOBe3Dj2Sh7_qzLcGC4sFqRL-nznsA";

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
            secondName,
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