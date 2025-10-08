// app/privacy/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Database, UserCheck, Eye, Lock, Server } from "lucide-react";
import { GradientText } from "../Components/ui/gradient-text";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-school-primary/5 via-background to-school-secondary/5 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/signup"
            className="inline-flex items-center text-sm font-medium text-school-primary hover:text-school-secondary transition-colors duration-200 mb-4 sm:mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            সাইন আপ এ ফিরে যান
          </Link>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="p-2 bg-school-primary/10 rounded-lg w-fit">
              <Shield className="w-6 h-6 text-school-primary" />
            </div>
            <div>
              <GradientText
                variant="primary"
                size="3xl"
                weight="bold"
                align="left"
                responsive
                className="mb-2"
              >
                গোপনীয়তা নীতি
              </GradientText>
              <p className="text-sm sm:text-base text-muted-foreground">
                সর্বশেষ আপডেট: {new Date().toLocaleDateString('bn-BD', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-border shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8">
          <div className="space-y-6 sm:space-y-8">
            
            {/* Introduction */}
            <section className="space-y-3 sm:space-y-4">
              <GradientText
                variant="secondary"
                size="xl"
                weight="semibold"
                align="left"
                responsive={false}
              >
                ভূমিকা
              </GradientText>
              <p className="text-sm sm:text-base text-muted-foreground text-justify leading-relaxed">
                এডুপ্ল্যাটফর্ম ("আমরা," "আমাদের," বা "আমাদের") আপনার গোপনীয়তার প্রতি 
                প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতিটি ব্যাখ্যা করে যে আমরা কিভাবে আপনার 
                ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার, এবং সুরক্ষা করি যখন আপনি আমাদের ওয়েবসাইট 
                এবং পরিষেবাগুলি ব্যবহার করেন।
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-school-primary flex-shrink-0" />
                <GradientText
                  variant="primary"
                  size="xl"
                  weight="semibold"
                  align="left"
                  responsive={false}
                >
                  আমরা কোন তথ্য সংগ্রহ করি
                </GradientText>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">আমরা নিম্নলিখিত ধরনের তথ্য সংগ্রহ করি:</p>
              <ul className="space-y-2 ml-4 sm:ml-6 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-primary rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">ব্যক্তিগত তথ্য:</strong> নাম, ইমেইল ঠিকানা, ফোন নম্বর</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-primary rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">অ্যাকাউন্ট তথ্য:</strong> ব্যবহারকারীর নাম, পাসওয়ার্ড (এনক্রিপ্টেড)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-primary rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">শিক্ষাগত তথ্য:</strong> কোর্সের অগ্রগতি, পরীক্ষার ফলাফল</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-primary rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">টেকনিক্যাল তথ্য:</strong> আইপি ঠিকানা, ব্রাউজার টাইপ, ডিভাইস তথ্য</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-primary rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-foreground">ব্যবহারের তথ্য:</strong> আপনি কিভাবে আমাদের প্ল্যাটফর্ম ব্যবহার করেন</span>
                </li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="space-y-3 sm:space-y-4">
              <GradientText
                variant="secondary"
                size="xl"
                weight="semibold"
                align="left"
                responsive={false}
              >
                কিভাবে আমরা তথ্য ব্যবহার করি
              </GradientText>
              <ul className="space-y-2 ml-4 sm:ml-6 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>আমাদের পরিষেবাগুলি প্রদান এবং উন্নত করতে</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>ব্যক্তিগতকৃত শিক্ষার অভিজ্ঞতা তৈরি করতে</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>কাস্টমার সাপোর্ট প্রদান করতে</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>নতুন বৈশিষ্ট্য এবং আপডেট সম্পর্কে আপনাকে জানাতে</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>প্ল্যাটফর্মের নিরাপত্তা এবং কার্যকারিতা নিশ্চিত করতে</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>আইনি প্রয়োজনীয়তা পূরণ করতে</span>
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-school-primary flex-shrink-0" />
                <GradientText
                  variant="primary"
                  size="xl"
                  weight="semibold"
                  align="left"
                  responsive={false}
                >
                  তথ্য শেয়ারিং
                </GradientText>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground text-justify">
                আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের সাথে বিক্রি বা ভাগ করি না, 
                নিম্নলিখিত ক্ষেত্রে ছাড়া:
              </p>
              <ul className="space-y-2 ml-4 sm:ml-6 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-accent rounded-full mt-2 flex-shrink-0" />
                  <span>আপনার স্পষ্ট সম্মতিতে</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-accent rounded-full mt-2 flex-shrink-0" />
                  <span>আইনি প্রয়োজনীয়তা পূরণ করতে</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-accent rounded-full mt-2 flex-shrink-0" />
                  <span>আমাদের পরিষেবাগুলি প্রদানের জন্য (যেমন হোস্টিং প্রদানকারী)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-accent rounded-full mt-2 flex-shrink-0" />
                  <span>ব্যবসার একত্রীকরণ বা অধিগ্রহণের ক্ষেত্রে</span>
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-school-primary flex-shrink-0" />
                <GradientText
                  variant="primary"
                  size="xl"
                  weight="semibold"
                  align="left"
                  responsive={false}
                >
                  তথ্য সুরক্ষা
                </GradientText>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground text-justify">
                আমরা আপনার তথ্য রক্ষা করতে উপযুক্ত প্রযুক্তিগত এবং সাংগঠনিক ব্যবস্থা 
                বাস্তবায়ন করি। এর মধ্যে রয়েছে:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-background/50 rounded-lg p-3 sm:p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Server className="w-4 h-4 text-school-success" />
                    <span className="text-sm font-medium text-foreground">এনক্রিপশন</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    ট্রানজিট এবং রেস্টে থাকা সমস্ত ডেটা এনক্রিপ্ট করা হয়
                  </p>
                </div>
                <div className="bg-background/50 rounded-lg p-3 sm:p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-4 h-4 text-school-warning" />
                    <span className="text-sm font-medium text-foreground">অ্যাক্সেস কন্ট্রোল</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    কঠোর অ্যাক্সেস নিয়ন্ত্রণ এবং অডিট লগ
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="space-y-3 sm:space-y-4">
              <GradientText
                variant="secondary"
                size="xl"
                weight="semibold"
                align="left"
                responsive={false}
              >
                আপনার অধিকার
              </GradientText>
              <p className="text-sm sm:text-base text-muted-foreground">
                আপনার ব্যক্তিগত তথ্য সম্পর্কে আপনার নিম্নলিখিত অধিকার রয়েছে:
              </p>
              <ul className="space-y-2 ml-4 sm:ml-6 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-success rounded-full mt-2 flex-shrink-0" />
                  <span>আপনার তথ্য অ্যাক্সেস করার অধিকার</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-success rounded-full mt-2 flex-shrink-0" />
                  <span>ভুল তথ্য সংশোধন করার অধিকার</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-success rounded-full mt-2 flex-shrink-0" />
                  <span>আপনার তথ্য মুছে ফেলার অনুরোধ করার অধিকার</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-school-success rounded-full mt-2 flex-shrink-0" />
                  <span>ডেটা প্রসেসিং সীমাবদ্ধ করার অধিকার</span>
                </li>
              </ul>
            </section>

            {/* Cookies */}
            <section className="space-y-3 sm:space-y-4">
              <GradientText
                variant="primary"
                size="xl"
                weight="semibold"
                align="left"
                responsive={false}
              >
                কুকিজ
              </GradientText>
              <p className="text-sm sm:text-base text-muted-foreground text-justify">
                আমরা ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে কুকিজ এবং অনুরূপ ট্র্যাকিং টেকনোলজি 
                ব্যবহার করি। আপনি আপনার ব্রাউজার সেটিংসের মাধ্যমে কুকিজ নিয়ন্ত্রণ করতে পারেন।
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="space-y-3 sm:space-y-4">
              <GradientText
                variant="secondary"
                size="xl"
                weight="semibold"
                align="left"
                responsive={false}
              >
                নীতিতে পরিবর্তন
              </GradientText>
              <p className="text-sm sm:text-base text-muted-foreground text-justify">
                আমরা যেকোনো সময় এই গোপনীয়তা নীতি আপডেট করতে পারি। আমরা আমাদের ওয়েবসাইটে 
                আপডেটেড নীতি পোস্ট করে এবং প্রয়োজনে আপনাকে ইমেলের মাধ্যমে জানিয়ে পরিবর্তনগুলি 
                সম্পর্কে আপনাকে অবহিত করব।
              </p>
            </section>

            {/* Footer */}
            <div className="pt-4 border-t border-border">
              <p className="text-xs sm:text-sm text-center text-muted-foreground">
                এই গোপনীয়তা নীতি পড়ার জন্য আপনাকে ধন্যবাদ। আপনার তথ্য সুরক্ষিত রাখাই আমাদের অগ্রাধিকার।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}