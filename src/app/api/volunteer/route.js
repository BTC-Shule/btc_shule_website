import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

function getServiceAccountKey() {
  const raw = process.env.VOLUNTEER_SA_KEY_B64;
  if (!raw) {
    throw new Error("Missing VOLUNTEER_SA_KEY_B64");
  }
  return JSON.parse(Buffer.from(raw, "base64").toString("utf8"));
}

async function sendVolunteerConfirmationEmail({ firstName, email }) {
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
    subject: "Welcome to the Volunteer Program – BTC Shule",
    html: `
      <p>Dear ${firstName},</p>

      <p>Thank you for expressing interest in joining our <b>BTC Shule Volunteer Program</b>.</p>

      <p>We appreciate your willingness to contribute your time and skills to support Bitcoin education in Africa.</p>

      <p>Our team will review your application and get in touch with you shortly with the next steps.</p>

      <p>Meanwhile, stay connected with us through our community channels and initiatives.</p>

      <p>Warm regards,<br/>
      The BTC Shule Team</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(request) {
  const { name, email, interest, message } =
    await request.json();

//   const normalizedCountry =
//     country && country.trim().length > 0
//       ? country.trim().charAt(0).toUpperCase() +
//         country.trim().slice(1).toLowerCase()
//       : "";

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

  // 📝 Replace with your Google Sheet ID for volunteers
  const spreadsheetId = "1p0EjOR2frsQ1jm6CkfPVTOIiQsH77IKf3CwjTuSqvw";

  try {
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!C2:C", // assuming email is in column C
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
      range: "Sheet1!A2:G2",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            name,
            email,
            interest,
            message,
          ],
        ],
      },
    });

    await sendVolunteerConfirmationEmail({ firstName, email });

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (err) {
    console.error("Volunteer registration error:", err);
    return NextResponse.json(
      { status: "error", message: err.message },
      { status: 500 }
    );
  }
}
