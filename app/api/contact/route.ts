const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_REGEX = /(.+)@(.+){2,}\.(.+){2,}/;

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
  const recipient = process.env.EMAIL;

  if (!apiKey || !recipient) {
    console.error("Missing RESEND_API_KEY or EMAIL");
    return Response.json({ errors: { message: "Server config error." } }, { status: 500 });
  }

  const body = subject
    ? `From: ${fromName} (${email})\nSubject: ${subject}\n\n${message}`
    : `From: ${fromName} (${email})\n\n${message}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Zenith Build <onboarding@resend.dev>",
      to: [recipient],
      reply_to: email,
      subject: `Zenith Build — message from ${fromName || email}`,
      text: body,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", res.status, err);
    return Response.json({ errors: { message: "Failed to send. Try again later." } }, { status: 500 });
  }

  return Response.json({ success: true });
}
