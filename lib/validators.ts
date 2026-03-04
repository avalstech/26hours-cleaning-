import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  postcode: z.string().min(3),
  serviceType: z.enum(["Home cleaning", "Deep cleaning", "End of tenancy", "Office cleaning"]),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  preferredDate: z.string().min(4),
  notes: z.string().max(1200).optional()
});

export const cleanerSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  city: z.string().min(2),
  postcode: z.string().min(3),
  services: z.array(z.string()).min(1),
  experienceYears: z.string().min(1),
  notes: z.string().max(1200).optional()
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(1500)
});
