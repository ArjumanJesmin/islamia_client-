 "use client"

import Academics from "../academics/page";
import HeroSection from "../Components/ui/HeroSection/HeroSection";
import Contact from "../contact/page";

export default function HomePage() {
  const images = [
    "/hero_images/student_1.jpg",
    "/hero_images/student_2.jpg",
    "/hero_images/student_3.jpg",
    "/hero_images/student_4.jpg",
  ];

  return (
    <div>
      <HeroSection
        title="ইসলামিয়া সরকারি প্রাথমিক বিদ্যালয়"
        subtitle="শিশুদের উজ্জ্বল ভবিষ্যতের জন্য শিক্ষা দান"
        images={images}
        ctaText="আরও জানুন"
        onCtaClick={() => alert("About page এ যাবে")}
      />
      <Academics />
      <Contact />

    </div>
  );
}
