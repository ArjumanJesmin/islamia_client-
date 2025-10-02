"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Youtube,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Newsletter from "./Newsletter";
import logo from "../../../../../public/islamia_logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      {/* Main Footer Content */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src={logo} alt="Logo" height={40} width={40} />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-school-primary to-school-secondary bg-clip-text text-transparent">
                ইসলামিয়া সরকারি প্রাথমিক বিদ্যালয়
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              মানসম্মত শিক্ষা ও নৈতিক মূল্যবোধের সমন্বয়ে গড়ে উঠা আমাদের শিক্ষা
              প্রতিষ্ঠান। আমরা শিক্ষার্থীদের সৃজনশীল, দক্ষ ও দেশপ্রেমিক নাগরিক
              হিসেবে গড়ে তুলতে প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="flex space-x-3 pt-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=14EB8zoXbks/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-blue-100 hover:text-white p-2 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                </Button>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/intent/tweet?url=https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-blue-100 hover:text-white p-2 transition-colors"
                >
                  {/* X Logo SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-blue-400"
                  >
                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.924 2.206-4.924 4.924 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.729-.666 1.577-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 3.42-1.68 1.316-3.809 2.101-6.102 2.101-.396 0-.787-.023-1.175-.069 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634.962-.695 1.8-1.562 2.46-2.549l-.047-.02z" />
                  </svg>
                </Button>
              </a>

              {/* Youtube */}
              <a
                href="https://www.youtube.com/@arjumanjesmin2308"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-red-100 hover:text-white p-2 transition-colors"
                >
                  <Youtube className="h-5 w-5 text-red-600" />
                </Button>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/arjumanjesmin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-pink-100 hover:text-white p-2 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-pink-600" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "হোম" },
                { href: "/about", label: "আমাদের সম্পর্কে" },
                { href: "/academics", label: "একাডেমিক" },
                { href: "/teachers", label: "শিক্ষকবৃন্দ" },
                { href: "/students", label: "শিক্ষার্থী" },
                { href: "/contact", label: "যোগাযোগ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-school-primary transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">যোগাযোগ</h4>
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "স্কুল রোড, ইসলামপুর, জামালপুর, বাংলাদেশ",
                },
                {
                  icon: Phone,
                  text: "+৮৮০ ১২৩৪-৫৬৭৮৯",
                  href: "tel:+8801234567890",
                },
                {
                  icon: Mail,
                  text: "info@islamiaprimaryschool.edu.bd",
                  href: "mailto:info@islamiaprimaryschool.edu.bd",
                },
                {
                  icon: Clock,
                  text: "রবি - বৃহস্পতি: সকাল ৯:০০ - বিকাল ৪:০০\nশুক্রবার: সকাল ৯:০০ - দুপুর ১২:৩০",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon className="h-5 w-5 text-school-primary mt-0.5 flex-shrink-0" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-school-primary transition-colors text-sm leading-relaxed"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-border">
          <Newsletter onSubmit={(email) => alert(`Subscribed with ${email}`)} />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-muted/30">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} ইসলামিয়া সরকারি প্রাথমিক বিদ্যালয়। সকল স্বত্ব
              সংরক্ষিত।
            </p>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {[
                { href: "/privacy", label: "গোপনীয়তা নীতি" },
                { href: "/terms", label: "ব্যবহারের শর্তাবলী" },
                { href: "/sitemap", label: "সাইটম্যাপ" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-school-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
