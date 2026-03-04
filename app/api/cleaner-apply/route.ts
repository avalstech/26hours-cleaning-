import { NextResponse } from "next/server";
import { cleanerSchema } from "@/lib/validators";
import { sendAdminEmail } from "@/lib/server/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = cleanerSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

    const c = parsed.data;
    const text = [
      "New cleaner application",
      "",
      `Name: ${c.fullName}`,
      `Email: ${c.email}`,
      `Phone: ${c.phone}`,
      `City: ${c.city}`,
      `Postcode: ${c.postcode}`,
      `Services: ${c.services.join(", ")}`,
      `Experience: ${c.experienceYears} years`,
      `Notes: ${c.notes || "-"}`
    ].join("\n");

    await sendAdminEmail({ subject: `Cleaner application: ${c.fullName} (${c.city})`, text });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
