"use client";

import { useState } from "react";
import { bookingSchema, cleanerSchema, contactSchema } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };

async function postJSON(url: string, data: unknown) {
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json?.error || "Request failed");
  return json;
}

export function BookingForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(formData: FormData) {
    setStatus({ type: "loading" });
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      postcode: String(formData.get("postcode") || ""),
      serviceType: String(formData.get("serviceType") || "Home cleaning"),
      bedrooms: String(formData.get("bedrooms") || ""),
      bathrooms: String(formData.get("bathrooms") || ""),
      preferredDate: String(formData.get("preferredDate") || ""),
      notes: String(formData.get("notes") || "")
    };

    const parsed = bookingSchema.safeParse(payload);
    if (!parsed.success) {
      setStatus({ type: "error", message: "Please check the form fields and try again." });
      return;
    }

    try {
      await postJSON("/api/booking", parsed.data);
      setStatus({ type: "success", message: "Booking request received! We’ll email you shortly with available cleaners." });
      (document.getElementById("bookingForm") as HTMLFormElement | null)?.reset();
    } catch (e: any) {
      setStatus({ type: "error", message: e?.message || "Something went wrong." });
    }
  }

  return (
    <form id="bookingForm" action={async (fd) => onSubmit(fd)} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="fullName">Full name</Label>
        <Input id="fullName" name="fullName" required />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" required />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="postcode">Postcode</Label>
          <Input id="postcode" name="postcode" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="serviceType">Service</Label>
          <select
            id="serviceType"
            name="serviceType"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold shadow-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
            defaultValue="Home cleaning"
            required
          >
            <option>Home cleaning</option>
            <option>Deep cleaning</option>
            <option>End of tenancy</option>
            <option>Office cleaning</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="grid gap-2">
          <Label htmlFor="bedrooms">Bedrooms</Label>
          <Input id="bedrooms" name="bedrooms" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="bathrooms">Bathrooms</Label>
          <Input id="bathrooms" name="bathrooms" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="preferredDate">Preferred date & time</Label>
          <Input id="preferredDate" name="preferredDate" required />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="notes">Notes (optional)</Label>
        <Textarea id="notes" name="notes" />
      </div>

      <Button type="submit" size="lg" disabled={status.type === "loading"}>
        {status.type === "loading" ? "Sending..." : "Submit booking request"}
      </Button>

      {status.type !== "idle" && (
        <div className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
          status.type === "success" ? "border-brand-200 bg-brand-50 text-slate-800" : "border-red-200 bg-red-50 text-red-800"
        }`}>
          {status.message}
        </div>
      )}

    </form>
  );
}

export function CleanerApplyForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(formData: FormData) {
    setStatus({ type: "loading" });

    const services = ["Home cleaning", "Deep cleaning", "End of tenancy", "Office cleaning"]
      .filter((s) => formData.get(`svc:${s}`) === "on");

    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      city: String(formData.get("city") || ""),
      postcode: String(formData.get("postcode") || ""),
      services,
      experienceYears: String(formData.get("experienceYears") || ""),
      notes: String(formData.get("notes") || "")
    };

    const parsed = cleanerSchema.safeParse(payload);
    if (!parsed.success) {
      setStatus({ type: "error", message: "Please complete all required fields and select at least one service." });
      return;
    }

    try {
      await postJSON("/api/cleaner-apply", parsed.data);
      setStatus({ type: "success", message: "Application received! We’ll contact you after verification." });
      (document.getElementById("cleanerForm") as HTMLFormElement | null)?.reset();
    } catch (e: any) {
      setStatus({ type: "error", message: e?.message || "Something went wrong." });
    }
  }

  return (
    <form id="cleanerForm" action={async (fd) => onSubmit(fd)} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="fullName">Full name</Label>
        <Input id="fullName" name="fullName" required />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" required />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="grid gap-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" required />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="postcode">Primary postcode</Label>
          <Input id="postcode" name="postcode" required />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="text-sm font-extrabold">Services you offer</div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {["Home cleaning", "Deep cleaning", "End of tenancy", "Office cleaning"].map((s) => (
            <label key={s} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <input type="checkbox" name={`svc:${s}`} className="h-4 w-4 accent-brand-600" />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="experienceYears">Years of experience</Label>
        <Input id="experienceYears" name="experienceYears" required />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="notes">Notes (optional)</Label>
        <Textarea id="notes" name="notes" />
      </div>

      <Button type="submit" size="lg" disabled={status.type === "loading"}>
        {status.type === "loading" ? "Sending..." : "Submit application"}
      </Button>

      {status.type !== "idle" && (
        <div className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
          status.type === "success" ? "border-brand-200 bg-brand-50 text-slate-800" : "border-red-200 bg-red-50 text-red-800"
        }`}>
          {status.message}
        </div>
      )}
    </form>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function onSubmit(formData: FormData) {
    setStatus({ type: "loading" });

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || "")
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      setStatus({ type: "error", message: "Please complete the form." });
      return;
    }

    try {
      await postJSON("/api/contact", parsed.data);
      setStatus({ type: "success", message: "Message sent! We’ll respond as soon as possible." });
      (document.getElementById("contactForm") as HTMLFormElement | null)?.reset();
    } catch (e: any) {
      setStatus({ type: "error", message: e?.message || "Something went wrong." });
    }
  }

  return (
    <form id="contactForm" action={async (fd) => onSubmit(fd)} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required />
      </div>

      <Button type="submit" size="lg" disabled={status.type === "loading"}>
        {status.type === "loading" ? "Sending..." : "Send message"}
      </Button>

      {status.type !== "idle" && (
        <div className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
          status.type === "success" ? "border-brand-200 bg-brand-50 text-slate-800" : "border-red-200 bg-red-50 text-red-800"
        }`}>
          {status.message}
        </div>
      )}
    </form>
  );
}
