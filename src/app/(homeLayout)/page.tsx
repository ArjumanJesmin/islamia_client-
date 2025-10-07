"use client";

import { useState, useEffect } from "react";
import Academics from "../academics/page";
import { AcademicProgramsSection } from "../Components/sections/AcademicProgramsSection";
import { TestimonialsSection } from "../Components/sections/TestimonialsSection";
import { FeaturesSection } from "../Components/sections//FeaturesSection//FeaturesSection";
import { GallerySection } from "../Components/sections/GallerySection";
import WelcomeSection from "../Components/sections/WelcomeSection";

import HeroSection from "../Components/ui/HeroSection/HeroSection";
import Contact from "../contact/page";
import Router from "next/router";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const images = [
    "/hero_images/student_1.jpg",
    "/hero_images/student_2.jpg",
    "/hero_images/student_3.jpg",
    "/hero_images/student_4.jpg",
  ];

  return (
    <div>
      <HeroSection
        title="ইসলামিয়া সরকারি প্রাথমিক বিদ্যালয়"
        subtitle="জ্ঞানের আলোয়ে উদ্ভাসিত একটি আধুনিক শিক্ষা প্রতিষ্ঠান"
        images={["/hero_images/student_1.jpg"]}
        ctaText="আমাদের সম্পর্কে জানুন"
      />
      <WelcomeSection />
      <FeaturesSection isLoading={isLoading} />
      <AcademicProgramsSection />
      <TestimonialsSection />
      <GallerySection />
      <Academics />
      <Contact />
    </div>
  );
}
