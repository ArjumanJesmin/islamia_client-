"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Academics() {
  const [activeIndex, setActiveIndex] = useState(0);

  const classes = [
    {
      grade: "প্রথম শ্রেণী",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ"],
      age: "৬-৭ বছর",
      seats: 40
    },
    {
      grade: "দ্বিতীয় শ্রেণী", 
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "৭-৮ বছর",
      seats: 40
    },
    {
      grade: "তৃতীয় শ্রেণী",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "৮-৯ বছর",
      seats: 35
    },
    {
      grade: "চতুর্থ শ্রেণী",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "৯-১০ বছর",
      seats: 35
    },
    {
      grade: "পঞ্চম শ্রেণী",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "১০-১১ বছর",
      seats: 35
    }
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => 
      prev === classes.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) => 
      prev === 0 ? classes.length - 1 : prev - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="min-h-screen pt-8">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            একাডেমিক তথ্য
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            আমাদের শিক্ষা কার্যক্রম, শ্রেণীভিত্তিক পাঠ্যসূচি এবং একাডেমিক ক্যালেন্ডার
          </p>
        </div>

        {/* Class Information - Small Cards Carousel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">শ্রেণীভিত্তিক তথ্য</h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-4"
                style={{ transform: `translateX(-${activeIndex * (100 / 5)}%)` }}
              >
                {classes.map((classInfo, index) => (
                  <div key={index} className="flex-shrink-0 w-1/5 px-1">
                    <Card className="hover:shadow-lg transition-all duration-300 border-2 border-school-primary/20 rounded-2xl hover:border-school-primary/40 hover:scale-105 min-h-[220px] flex flex-col">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base text-school-primary text-center">{classInfo.grade}</CardTitle>
                        <p className="text-xs text-muted-foreground text-center">বয়স: {classInfo.age}</p>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col p-4">
                        <div className="mb-3 flex-1">
                          <h4 className="font-semibold mb-2 text-foreground text-xs">বিষয়সমূহ:</h4>
                          <div className="space-y-1">
                            {classInfo.subjects.slice(0, 3).map((subject, idx) => (
                              <span 
                                key={idx} 
                                className="block bg-school-primary/10 text-school-primary px-1 py-1 rounded text-xs text-center"
                              >
                                {subject}
                              </span>
                            ))}
                            {classInfo.subjects.length > 3 && (
                              <span className="block bg-school-primary/5 text-school-primary px-1 py-1 rounded text-xs text-center">
                                + {classInfo.subjects.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2 pt-2 border-t border-gray-200">
                          <div className="text-xs text-muted-foreground text-center">
                            সিট: {classInfo.seats}
                          </div>
                          <Button asChild size="sm" className="w-full bg-school-primary hover:bg-school-primary/90 text-xs py-1 h-7">
                            <Link href="/contact">ভর্তি তথ্য</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 border border-gray-300 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous class"
            >
              <ChevronLeft className="h-4 w-4 text-gray-700" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 border border-gray-300 rounded-full p-2 shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next class"
            >
              <ChevronRight className="h-4 w-4 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {classes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-school-primary scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="mb-16">
          <Card className="border-2 border-school-primary/10 rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-school-primary/5 to-school-secondary/5 rounded-t-2xl">
              <CardTitle className="text-2xl text-school-primary flex items-center gap-2 justify-center">
                📅 একাডেমিক ক্যালেন্ডার ২০২৪
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-foreground bg-school-primary/10 px-4 py-2 rounded-lg text-center">প্রথম সাময়িক</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-school-primary rounded-full"></div>
                      <span className="text-sm">ক্লাস শুরু: <strong>১লা জানুয়ারি</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-school-primary rounded-full"></div>
                      <span className="text-sm">প্রথম মূল্যায়ন: <strong>১৫-২০ মার্চ</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-school-primary rounded-full"></div>
                      <span className="text-sm">ফলাফল: <strong>৩১শে মার্চ</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-school-primary rounded-full"></div>
                      <span className="text-sm">ছুটি: <strong>১লা এপ্রিল - ৭ই এপ্রিল</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-foreground bg-school-secondary/10 px-4 py-2 rounded-lg text-center">দ্বিতীয় সাময়িক</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-school-secondary rounded-full"></div>
                      <span className="text-sm">ক্লাস শুরু: <strong>৮ই এপ্রিল</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-school-secondary rounded-full"></div>
                      <span className="text-sm">বার্ষিক পরীক্ষা: <strong>১৫-২০ নভেম্বর</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-school-secondary rounded-full"></div>
                      <span className="text-sm">ফলাফল: <strong>৩০শে নভেম্বর</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-school-secondary rounded-full"></div>
                      <span className="text-sm">বার্ষিক ছুটি: <strong>১লা ডিসেম্বর</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Curriculum */}
        <section className="mb-16">
          <Card className="border-2 border-school-primary/10 rounded-2xl">
            <CardHeader className="bg-gradient-to-r from-school-primary/5 to-school-secondary/5 rounded-t-2xl">
              <CardTitle className="text-2xl text-school-primary flex items-center gap-2 justify-center">
                📚 পাঠ্যক্রম
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-foreground text-center">প্রধান বৈশিষ্ট্য:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-school-primary/5 to-school-secondary/5 p-4 rounded-xl border border-school-primary/20 text-center">
                      <h5 className="font-semibold text-school-primary mb-2 text-sm">জাতীয় শিক্ষাক্রম</h5>
                      <p className="text-xs text-muted-foreground">জাতীয় শিক্ষাক্রম অনুসরণ</p>
                    </div>
                    <div className="bg-gradient-to-br from-school-primary/5 to-school-secondary/5 p-4 rounded-xl border border-school-primary/20 text-center">
                      <h5 className="font-semibold text-school-primary mb-2 text-sm">ডিজিটাল শিক্ষা</h5>
                      <p className="text-xs text-muted-foreground">আধুনিক প্রযুক্তির মাধ্যমে</p>
                    </div>
                    <div className="bg-gradient-to-br from-school-primary/5 to-school-secondary/5 p-4 rounded-xl border border-school-primary/20 text-center">
                      <h5 className="font-semibold text-school-primary mb-2 text-sm">ব্যবহারিক শিক্ষা</h5>
                      <p className="text-xs text-muted-foreground">প্রয়োগ-based শিক্ষা</p>
                    </div>
                    <div className="bg-gradient-to-br from-school-primary/5 to-school-secondary/5 p-4 rounded-xl border border-school-primary/20 text-center">
                      <h5 className="font-semibold text-school-primary mb-2 text-sm">সৃজনশীল活动</h5>
                      <p className="text-xs text-muted-foreground">ক্রিয়েটিভ এক্টিভিটি</p>
                    </div>
                    <div className="bg-gradient-to-br from-school-primary/5 to-school-secondary/5 p-4 rounded-xl border border-school-primary/20 text-center">
                      <h5 className="font-semibold text-school-primary mb-2 text-sm">নৈতিক শিক্ষা</h5>
                      <p className="text-xs text-muted-foreground">মানবিক মূল্যবোধ</p>
                    </div>
                    <div className="bg-gradient-to-br from-school-primary/5 to-school-secondary/5 p-4 rounded-xl border border-school-primary/20 text-center">
                      <h5 className="font-semibold text-school-primary mb-2 text-sm">সাংস্কৃতিক活动</h5>
                      <p className="text-xs text-muted-foreground">খেলাধুলা ও সংস্কৃতি</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-school-primary to-school-secondary text-white shadow-xl rounded-2xl">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">আরও তথ্য প্রয়োজন?</h3>
              <p className="mb-6 opacity-90 text-lg">
                আমাদের একাডেমিক বিষয়ে আরও বিস্তারিত জানতে সরাসরি যোগাযোগ করুন
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-school-primary hover:bg-gray-100 font-semibold rounded-xl">
                <Link href="/contact">যোগাযোগ করুন</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}