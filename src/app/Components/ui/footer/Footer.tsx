"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Youtube, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      {/* Main Footer Content */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* School Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-school-primary to-school-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ইস</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-school-primary to-school-secondary bg-clip-text text-transparent">
                ইসলামিয়া সরকারি প্রাথমিক বিদ্যালয়
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              মানসম্মত শিক্ষা ও নৈতিক মূল্যবোধের সমন্বয়ে গড়ে উঠা আমাদের শিক্ষা প্রতিষ্ঠান। 
              আমরা শিক্ষার্থীদের সৃজনশীল, দক্ষ ও দেশপ্রেমিক নাগরিক হিসেবে গড়ে তুলতে প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="flex space-x-3 pt-2">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-school-primary hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-400 hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-red-600 hover:text-white transition-colors">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-pink-600 hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">দ্রুত লিংক</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "হোম" },
                { href: "/about", label: "আমাদের সম্পর্কে" },
                { href: "/academics", label: "একাডেমিক" },
                { href: "/teachers", label: "শিক্ষকবৃন্দ" },
                { href: "/students", label: "শিক্ষার্থী" },
                { href: "/contact", label: "যোগাযোগ" }
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
                { icon: MapPin, text: "স্কুল রোড, ইসলামপুর, জামালপুর, বাংলাদেশ" },
                { icon: Phone, text: "+৮৮০ ১২৩৪-৫৬৭৮৯", href: "tel:+8801234567890" },
                { icon: Mail, text: "info@islamiaprimaryschool.edu.bd", href: "mailto:info@islamiaprimaryschool.edu.bd" },
                { icon: Clock, text: "রবি - বৃহস্পতি: সকাল ৯:০০ - বিকাল ৪:০০\nশুক্রবার: সকাল ৯:০০ - দুপুর ১২:৩০" }
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
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                নিউজলেটার সাবস্ক্রাইব করুন
              </h4>
              <p className="text-muted-foreground text-sm">
                সর্বশীন খবর ও আপডেট পেতে আপনার ইমেইল দিন
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
              <Input 
                type="email" 
                placeholder="আপনার ইমেইল ঠিকানা" 
                className="bg-background border-input text-foreground w-full sm:w-64"
              />
              <Button className="bg-school-primary hover:bg-school-primary/90 whitespace-nowrap">
                সাবস্ক্রাইব
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-muted/30">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} ইসলামিয়া সরকারি প্রাথমিক বিদ্যালয়। সকল স্বত্ব সংরক্ষিত।
            </p>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {[
                { href: "/privacy", label: "গোপনীয়তা নীতি" },
                { href: "/terms", label: "ব্যবহারের শর্তাবলী" },
                { href: "/sitemap", label: "সাইটম্যাপ" }
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
  )
}