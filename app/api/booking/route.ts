import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validators";
import { sendAdminEmail } from "@/lib/server/email";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = bookingSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

    const b = parsed.data;
    const text = [
      "New booking request",
      "",
      `Name: ${b.fullName}`,
      `Email: ${b.email}`,
      `Phone: ${b.phone}`,
      `Postcode: ${b.postcode}`,
      `Service: ${b.serviceType}`,
      `Bedrooms: ${b.bedrooms || "-"}`,
      `Bathrooms: ${b.bathrooms || "-"}`,
      `Preferred: ${b.preferredDate}`,
      `Notes: ${b.notes || "-"}`
    ].join("\n");

    await sendAdminEmail({ subject: `Booking request: ${b.serviceType} (${b.postcode})`, text });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}
