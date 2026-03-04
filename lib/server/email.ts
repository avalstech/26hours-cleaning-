import { randomUUID } from "crypto";

type EmailPayload = {
  subject: string;
  text: string;
};

export async function sendAdminEmail(payload: EmailPayload) {
  const to = process.env.ADMIN_EMAIL;
  const from = process.env.SES_FROM_EMAIL;

  // If not configured, no-op (still succeeds) so MVP deploy works out of the box.
  if (!to || !from) {
    return { ok: true, skipped: true, id: `skipped_${randomUUID()}` };
  }

  const { SESv2Client, SendEmailCommand } = await import("@aws-sdk/client-sesv2");
  const client = new SESv2Client({ region: process.env.AWS_REGION || "eu-west-2" });

  const command = new SendEmailCommand({
    FromEmailAddress: from,
    Destination: { ToAddresses: [to] },
    Content: {
      Simple: {
        Subject: { Data: payload.subject, Charset: "UTF-8" },
        Body: { Text: { Data: payload.text, Charset: "UTF-8" } }
      }
    }
  });

  const res = await client.send(command);
  return { ok: true, skipped: false, id: res.MessageId || `sent_${randomUUID()}` };
}
