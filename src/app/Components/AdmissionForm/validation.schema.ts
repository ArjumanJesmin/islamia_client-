import { z } from "zod";
// Validation Schema
export const admissionFormSchema = z.object({
  studentName: z.string().min(2, "ছাত্র/ছাত্রীর নাম কমপক্ষে ২ অক্ষর হতে হবে"),
  fatherName: z.string().min(2, "পিতার নাম কমপক্ষে ২ অক্ষর হতে হবে"),
  motherName: z.string().min(2, "মাতার নাম কমপক্ষে ২ অক্ষর হতে হবে"),
  dateOfBirth: z.date(),
  gender: z.string().min(1, "লিঙ্গ নির্বাচন করুন"),
  className: z.string().min(1, "ক্লাস নির্বাচন করুন"),
  address: z.string().min(10, "ঠিকানা কমপক্ষে ১০ অক্ষর হতে হবে"),
  phone: z.string()
    .min(11, "ফোন নম্বর কমপক্ষে ১১ ডিজিট হতে হবে")
    .max(11, "ফোন নম্বর সর্বোচ্চ ১১ ডিজিট হতে হবে")
    .regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল নম্বর দিন"),
  email: z.string().email("সঠিক ইমেইল দিন").optional().or(z.literal("")),
  birthCertificate: z.instanceof(File).optional(),
  photo: z.instanceof(File).optional(),
}).refine((data) => data.dateOfBirth instanceof Date && !isNaN(data.dateOfBirth.getTime()), {
  message: "জন্ম তারিখ নির্বাচন করুন",
  path: ["dateOfBirth"],
});

 export type AdmissionFormValues = z.infer<typeof admissionFormSchema>;