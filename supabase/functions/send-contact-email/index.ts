import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.57.4/cors";
import { z } from "https://deno.land/x/zod@v3.24.2/mod.ts";
import nodemailer from "npm:nodemailer@6.9.16";

const requestSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(3).max(180),
  message: z.string().trim().min(10).max(5000),
});

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid form data", details: parsed.error.flatten().fieldErrors }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const gmailAppPassword = Deno.env.get("GMAIL_APP_PASSWORD");
    const senderEmail = Deno.env.get("SMTP_SENDER_EMAIL");
    const leadsRecipientEmail = Deno.env.get("LEADS_RECIPIENT_EMAIL");

    if (!gmailAppPassword) {
      throw new Error("GMAIL_APP_PASSWORD is not configured");
    }

    if (!senderEmail) {
      throw new Error("SMTP_SENDER_EMAIL is not configured");
    }

    if (!leadsRecipientEmail) {
      throw new Error("LEADS_RECIPIENT_EMAIL is not configured");
    }

    const { name, email, subject, message } = parsed.data;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: gmailAppPassword,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: `SouthVoyage Contact <${senderEmail}>`,
      to: leadsRecipientEmail,
      replyTo: email,
      subject: `New contact form lead — ${subject}`,
      text: [
        "New contact form submission from SouthVoyage",
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; background: #ffffff; color: #172033; padding: 24px;">
          <div style="max-width: 640px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden;">
            <div style="padding: 24px 28px; background: #f6efe4; border-bottom: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px; color: #0f766e; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase;">SouthVoyage</p>
              <h1 style="margin: 0; font-size: 24px; line-height: 1.2;">New contact form lead</h1>
            </div>
            <div style="padding: 28px;">
              <p style="margin: 0 0 16px;"><strong>Name:</strong> ${safeName}</p>
              <p style="margin: 0 0 16px;"><strong>Email:</strong> ${safeEmail}</p>
              <p style="margin: 0 0 16px;"><strong>Subject:</strong> ${safeSubject}</p>
              <div style="margin-top: 24px; padding: 20px; background: #f8fafc; border-radius: 12px; border: 1px solid #e5e7eb;">
                <p style="margin: 0 0 12px;"><strong>Message</strong></p>
                <p style="margin: 0; line-height: 1.7;">${safeMessage}</p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});