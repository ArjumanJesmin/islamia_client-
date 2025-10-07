"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../DarkModeToggle";
import { NotificationBell } from "../../sections/Announcements/NotificationBell"; // Import the NotificationBell
import logo from "../../../../../public/islamia_logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/95 backdrop-blur-sm border-b border-border/40"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-14 h-14  items-center justify-center">
              <Image src={logo} alt="Logo" height={40} width={40}  />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-6 mr-6">
              <Link
                href="/"
                className="btn-text"
              >
                হোম
              </Link>
              <Link
                href="/about"
                className="btn-text"
              >
                আমাদের সম্পর্কে
              </Link>
              <Link
                href="/academics"
                className="btn-text"
              >
                একাডেমিক
              </Link>
              <Link
                href="/contact"
                className="btn-text"
              >
                যোগাযোগ
              </Link>
            </div>
            
            {/* Notification Bell for Desktop */}
            <NotificationBell />
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Notification Bell for Mobile */}
            <NotificationBell />
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <Link
                    href="/"
                    className="text-lg-hover"
                    onClick={() => setIsOpen(false)}
                  >
                    হোম
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg-hover"
                    onClick={() => setIsOpen(false)}
                  >
                    আমাদের সম্পর্কে
                  </Link>
                  <Link
                    href="/academics"
                    className="text-lg-hover"
                    onClick={() => setIsOpen(false)}
                  >
                    একাডেমিক
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg-hover"
                    onClick={() => setIsOpen(false)}
                  >
                    যোগাযোগ
                  </Link>
                  
                  {/* Mobile Notification Section */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">নোটিফিকেশন</h3>
                      <span className="text-xs text-muted-foreground">
                        সর্বশেষ আপডেট
                      </span>
                    </div>
                    {/* You can add mobile-specific notification items here if needed */}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}