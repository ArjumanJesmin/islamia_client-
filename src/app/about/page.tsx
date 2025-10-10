import SchoolHistory from "./components/SchoolHistory";
import MissionVission from "./MissionVission";
import Facilities from "./Facilities ";
import CATSection from "./CATSection";

export default function About() {
  return (
    <div className="min-h-screen pt-8">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            আমাদের সম্পর্কে
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ইসলামিয়া সরকারি প্রাথমিক বিদ্যালয় - শিক্ষা, মূল্যবোধ ও উন্নত
            ভবিষ্যতের প্রতিশ্রুতি
          </p>
        </div>

        {/* School History */}
        <SchoolHistory />

        {/* Mission & Vision */}
        <MissionVission />

        {/* Facilities */}
        <Facilities />

        {/* CTA Section */}
        <CATSection />
      </div>
    </div>
  );
}
