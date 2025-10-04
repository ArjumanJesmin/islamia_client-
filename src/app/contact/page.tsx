import { MessageCircle } from "lucide-react";

import { GradientText } from "../Components/ui/gradient-text";
import SchoolMap from "./SchoolMap";
import EmergencyContact from "./EmergencyContact";

import SendEmail from "./SendEmail";
import ContactUs from "./ContactUs";

export default function Contact() {
  return (
    <div className="min-h-screen pt-8 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-school-primary to-school-secondary rounded-3xl shadow-2xl mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            যোগাযোগ
            <GradientText variant="primary" className="ml-4">
              করুন
            </GradientText>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            আপনার যেকোনো প্রশ্ন বা মতামত আমাদের জানান। আমরা আপনার সাথে যোগাযোগ
            করতে পেরে আনন্দিত হব।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Left: বার্তা পাঠান - 2/3 width */}
          <SendEmail />

          {/* Right: যোগাযোগ তথ্য - 1/3 width */}
          <div className="lg:col-span-1">
            <ContactUs />
          </div>
        </div>

        {/* Second Section: আমাদের অবস্থান (2/3) + জরুরি যোগাযোগ (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left: আমাদের অবস্থান - 2/3 width */}
          <div className="lg:col-span-3">
            <div className="border-0 overflow-hidden h-full">
              <SchoolMap />
            </div>
          </div>

          {/* Right: জরুরি যোগাযোগ - 1/3 width */}
          <div className="lg:col-span-1 mb-4">
            <EmergencyContact />
          </div>
        </div>
      </div>
    </div>
  );
}
