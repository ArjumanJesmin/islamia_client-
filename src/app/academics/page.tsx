"use client";
import { useEffect, useState } from "react";
import { GradientText } from "../Components/ui/gradient-text";
import { ClassCarousel } from "./components/ClassCarousel";
import { AcademicCalendarSection } from "./components/AcademicCalendarSection";
import CurriculumSection from "./components/CurriculumSection";
import ContactCTA from "./components/ContactCTA";

type ClassInfo = {
  grade: string;
  subjects: string[];
  age: string;
  seats: number;
  color: string;
};

export default function Academics() {
  const [activeIndex, setActiveIndex] = useState(0);

  const classes: ClassInfo[] = [
    {
      grade: "প্রথম শ্রেণী",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "৬-৭ বছর",
      seats: 40,
      color: "from-blue-500 to-cyan-500"
    },
    {
      grade: "দ্বিতীয় শ্রেণী", 
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "৭-৮ বছর",
      seats: 40,
      color: "from-green-500 to-emerald-500"
    },
    {
      grade: "তৃতীয় শ্রেণী",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "৮-৯ বছর",
      seats: 35,
      color: "from-orange-500 to-amber-500"
    },
    {
      grade: "চতুর্থ শ্রেণী",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "৯-১০ বছর",
      seats: 35,
      color: "from-purple-500 to-pink-500"
    },
    {
      grade: "পঞ্চম শ্রেণী",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "১০-১১ বছর",
      seats: 35,
      color: "from-red-500 to-rose-500"
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="min-h-screen pt-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            একাডেমিক 
            <GradientText variant="primary" className="ml-4">
              তথ্য
            </GradientText>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            আমাদের শিক্ষা কার্যক্রম, শ্রেণীভিত্তিক পাঠ্যসূচি এবং একাডেমিক ক্যালেন্ডার
          </p>
        </div>

        {/* Class Information Carousel */}
        <ClassCarousel 
          classes={classes} 
          activeIndex={activeIndex} 
          setActiveIndex={setActiveIndex}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />

        {/* Academic Calendar */}
        <AcademicCalendarSection />

        {/* Curriculum Section */}
        <CurriculumSection />

        {/* Contact CTA */}
        <ContactCTA/>
          </div>
        </div>
      );
    }