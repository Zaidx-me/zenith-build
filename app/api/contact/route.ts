const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_REGEX = /(.+)@(.+){2,}\.(.+){2,}/;

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const isBot = String(formData.get("name") ?? "");
  const fromName = String(formData.get("fromName") ?? "");
  const email = String(formData.get("email") ?? "");
  const subject = String(formData.get("subject") ?? "");
  const message = String(formData.get("message") ?? "");

  if (isBot) return Response.json({ success: true });

  const errors: Record<string, string> = {};

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message) {
    errors.message = "Please enter a message.";
  }
  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = "Email is too long.";
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = "Message is too long.";
  }

  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipients = (process.env.EMAIL ?? "").split(",").map((s) => s.trim()).filter(Boolean);

  if (!apiKey || recipients.length === 0) {
    console.error("Missing RESEND_API_KEY or EMAIL");
    return Response.json({ errors: { message: "Server config error." } }, { status: 500 });
  }

  const date = new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const textBody = [
    subject ? `Subject: ${subject}` : "",
    `From: ${fromName} (${email})`,
    `Date: ${date}`,
    "",
    message,
    "",
    "—",
    "Zenith Build",
    "contact@zareen.qzz.io",
  ].filter(Boolean).join("\n");

  const htmlBody = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1a1a1a;">
  <table style="max-width: 560px; margin: 0 auto; border-collapse: collapse;">
    <tr><td style="padding-bottom: 8px; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px;">New inquiry</td></tr>
    <tr><td style="padding-bottom: 4px; font-size: 13px; color: #888;">From</td></tr>
    <tr><td style="padding-bottom: 16px; font-size: 16px; font-weight: 600;">${esc(fromName) || "—"} &lt;${esc(email)}&gt;</td></tr>
    ${subject ? `<tr><td style="padding-bottom: 4px; font-size: 13px; color: #888;">Subject</td></tr><tr><td style="padding-bottom: 16px; font-size: 16px; font-weight: 600;">${esc(subject)}</td></tr>` : ""}
    <tr><td style="padding-bottom: 4px; font-size: 13px; color: #888;">Message</td></tr>
    <tr><td style="padding-bottom: 24px; font-size: 15px; line-height: 1.6; color: #333; white-space: pre-wrap;">${esc(message)}</td></tr>
    <tr><td style="padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #999;">Zenith Build &mdash; contact@zareen.qzz.io</td></tr>
  </table>
</body>
</html>`.trim();

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Zenith Build <contact@zareen.qzz.io>",
      to: recipients,
      reply_to: email,
      subject: `New inquiry from ${fromName || email}`,
      text: textBody,
      html: htmlBody,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", res.status, err);
    return Response.json({ errors: { message: "Failed to send. Try again later." } }, { status: 500 });
  }

  return Response.json({ success: true });
}
