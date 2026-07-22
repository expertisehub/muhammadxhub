import nodemailer from "nodemailer";
<<<<<<< HEAD
=======
import { appendSubmission } from "../../../lib/admin-store.js";
>>>>>>> e15cd74 (Admin commit)

export async function POST(req) {
  try {
    const data = await req.json();
    const { type, name, email, subject, message, extra } = data;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 },
      );
    }

<<<<<<< HEAD
    // Build email body
    const html = `
      <h2>New ${type || "contact"} submission</h2>
=======
    const category =
      type === "volunteer"
        ? "Volunteer"
        : type === "partner"
          ? "Partner"
          : type === "donate"
            ? "Donate"
            : "Contact inquiry";

    await appendSubmission({
      type: type || "contact",
      category,
      name,
      email,
      subject: subject || "No subject",
      message,
      extra: extra || {},
      history: [
        {
          status: "Pending",
          note: "Submission received from public form",
          at: new Date().toISOString(),
        },
      ],
    });

    // Build email body
    const html = `
      <h2>New ${category} submission</h2>
>>>>>>> e15cd74 (Admin commit)
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
      ${extra ? `<pre>${JSON.stringify(extra, null, 2)}</pre>` : ""}
    `;

    // Configure transporter: support SendGrid via SMTP (user 'apikey') or custom SMTP
    let transporter;
    if (process.env.SENDGRID_API_KEY) {
      transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        secure: false,
        auth: {
          user: "apikey",
          pass: process.env.SENDGRID_API_KEY,
        },
      });
    } else if (
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      return new Response(
        JSON.stringify({
          error:
            "No SMTP configuration found. Set SENDGRID_API_KEY or SMTP_* env vars.",
        }),
        { status: 500 },
      );
    }

    const mailOptions = {
      from:
        process.env.SMTP_FROM ||
        // process.env.SMTP_USER ||
        '"Expertise Hub Website" <no-reply@localhost>',
      to: "expertisehub1@gmail.com",
      subject: `New message from ${name}`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ ok: true, info }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
    });
  }
}
