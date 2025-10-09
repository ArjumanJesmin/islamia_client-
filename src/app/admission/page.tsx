// app/admission/page.tsx
import AdmissionForm from "../Components/AdmissionForm/AdmissionForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ভর্তি ফর্ম - ইসলামিয়া সরকারি প্রাথমিক বিদ্যালয়",
  description: "ইসলামিয়া সরকারি প্রাথমিক বিদ্যালয়ে অনলাইন ভর্তি আবেদন ফর্ম",
};

export default function AdmissionPage() {
  return <AdmissionForm />;
}