"use client";

import Link from "next/link";
import { ArrowLeft, Shield, FileText, Users, Lock } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-school-primary/5 via-background to-school-secondary/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/signup"
            className="inline-flex items-center text-sm font-medium text-school-primary hover:text-school-secondary transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            সাইন আপ এ ফিরে যান
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-school-primary/10 rounded-lg">
              <FileText className="w-6 h-6 text-school-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">সেবার শর্তাবলী</h1>
          </div>
          <p className="text-muted-foreground">
            সর্বশেষ আপডেট: {new Date().toLocaleDateString('bn-BD', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border shadow-xl p-6 sm:p-8">
          <div className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-school-primary" />
                ১. ভূমিকা
              </h2>
              <p className="mb-4 text-justify">
                এডুপ্ল্যাটফর্মে স্বাগতম ("আমরা," "আমাদের," বা "আমাদের")। এই সেবার শর্তাবলী 
                আমাদের শিক্ষামূলক প্ল্যাটফর্ম এবং সেবাগুলি ব্যবহারের জন্য প্রযোজ্য। আমাদের 
                সেবা ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলী মেনে নিচ্ছেন বলে ধরে নেওয়া হবে।
              </p>
            </section>

            {/* Account Terms */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-school-primary" />
                ২. অ্যাকাউন্টের শর্তাবলী
              </h2>
              <ul className="space-y-2 ml-6 list-disc text-justify">
                <li>আমাদের সেবা ব্যবহার করার জন্য আপনার বয়স কমপক্ষে ১৩ বছর হতে হবে</li>
                <li>নিবন্ধনের সময় আপনাকে সঠিক এবং সম্পূর্ণ তথ্য প্রদান করতে হবে</li>
                <li>আপনার অ্যাকাউন্টের নিরাপত্তা বজায় রাখার দায়িত্ব আপনার</li>
                <li>আপনার অ্যাকাউন্টের অধীনে সংঘটিত সকল কার্যক্রমের জন্য আপনি দায়ী</li>
                <li>আপনার অ্যাকাউন্টের কোনো অননুমোদিত ব্যবহারের কথা আমাদের অবিলম্বে জানাতে হবে</li>
              </ul>
            </section>

            {/* Acceptable Use */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">৩. গ্রহণযোগ্য ব্যবহার</h2>
              <p className="mb-4">আপনি সম্মত হচ্ছেন যে আপনি:</p>
              <ul className="space-y-2 ml-6 list-disc text-justify">
                <li>কোনো অবৈধ উদ্দেশ্যে সেবাটি ব্যবহার করবেন না</li>
                <li>আপনার এখতিয়ারের কোনো আইন লঙ্ঘন করবেন না</li>
                <li>ক্ষতিকারক কোড আপলোড বা শেয়ার করবেন না</li>
                <li>স্প্যাম, ফিশিং বা প্রতারণামূলক কার্যকলাপে জড়িত হবেন না</li>
                <li>সেবার সঠিক কার্যকারিতায় হস্তক্ষেপ করবেন না</li>
                <li>কোনো সিস্টেমে অননুমোদিত প্রবেশের চেষ্টা করবেন না</li>
              </ul>
            </section>

            

            {/* User Content */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">৫. ব্যবহারকারীর বিষয়বস্তু</h2>
              <p className="mb-4 text-justify">
                আপনি আমাদের প্ল্যাটফর্মে তৈরি এবং শেয়ার করা যেকোনো বিষয়বস্তুর মালিকানা 
                ধরে রাখেন। বিষয়বস্তু পোস্ট করার মাধ্যমে, আপনি আমাদের সেবা প্রদানের একমাত্র 
                উদ্দেশ্যে আপনার বিষয়বস্তু ব্যবহার, প্রদর্শন এবং বিতরণ করার জন্য আমাদের একটি 
                বিশ্বব্যাপী, অ-এক্সক্লুসিভ লাইসেন্স প্রদান করেন।
              </p>
            </section>

            {/* Privacy */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-school-primary" />
                ৬. গোপনীয়তা
              </h2>
              <p className="mb-4 text-justify">
                আপনার গোপনীয়তা আমাদের কাছে গুরুত্বপূর্ণ। কিভাবে আমরা আপনার ব্যক্তিগত তথ্য 
                সংগ্রহ, ব্যবহার এবং সুরক্ষা করি তা বুঝতে আমাদের 
                <Link href="/privacy" className="text-school-primary hover:underline mx-1">
                  গোপনীয়তা নীতি
                </Link>
                পর্যালোচনা করুন।
              </p>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">৭. সমাপ্তি</h2>
              <p className="mb-4 text-justify">
                আমরা যেকোনো সময়, যেকোনো কারণে, কোনো নোটিশ ছাড়াই আপনার অ্যাকাউন্ট বাতিল 
                বা স্থগিত করার অধিকার রাখি। আপনি যেকোনো সময় আমাদের সেবা ব্যবহার বন্ধ 
                করতে পারেন।
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">৮. শর্তাবলীতে পরিবর্তন</h2>
              <p className="mb-4 text-justify">
                আমরা যেকোনো সময় এই শর্তাবলী আপডেট করার অধিকার রাখি। পরিবর্তনগুলি 
                কার্যকর হওয়ার আগে আমরা আপনাকে নোটিশ প্রদান করব। পরিবর্তনগুলির পরে 
                আমাদের সেবা ব্যবহার চালিয়ে যাওয়া আপডেটেড শর্তাবলী গ্রহণের সমতুল্য।
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}