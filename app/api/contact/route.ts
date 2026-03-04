import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validators";
import { sendAdminEmail } from "@/lib/server/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

    const c = parsed.data;
    const text = ["New contact message", "", `Name: ${c.name}`, `Email: ${c.email}`, "", c.message].join("\n");

    await sendAdminEmail({ subject: `Contact: ${c.name}`, text });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
