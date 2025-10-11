import { GradientText } from "@/app/Components/ui/gradient-text";
import { Award, BookOpen, Clock, GraduationCap, Users, Star, Heart, Target } from "lucide-react";
 const teachingMethods = [
    {
      icon: Target,
      title: "লক্ষ্য ভিত্তিক শিক্ষা",
      description: "নির্দিষ্ট লক্ষ্য নির্ধারণ করে শিক্ষাদান পদ্ধতি"
    },
    {
      icon: Users,
      title: "ব্যক্তিগত মনোযোগ",
      description: "প্রতিটি শিক্ষার্থীর জন্য আলাদা মনোযোগ ও কেয়ার"
    },
    {
      icon: BookOpen,
      title: "ব্যবহারিক শিক্ষা",
      description: "তত্ত্বীয় জ্ঞানের পাশাপাশি ব্যবহারিক শিক্ষা"
    },
    {
      icon: Heart,
      title: "স্নেহ",
      description: "শিক্ষার্থীদের প্রতি স্নেহপূর্ণ আচরণ"
    }
  ];
const MethodSection = () => {
    return (
         <section className="mb-12">
          <div className="text-center mb-8">
            <GradientText
              variant="secondary"
              size="3xl"
              weight="bold"
              align="center"
              responsive
              className="mb-4"
            >
              🎯 আমাদের শিক্ষা পদ্ধতি
            </GradientText>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আধুনিক ও বৈজ্ঞানিক পদ্ধতিতে শিক্ষাদান যা শিক্ষার্থীদের সর্বোচ্চ বিকাশ নিশ্চিত করে
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teachingMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-100/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-school-primary to-school-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </section>
    );
};

export default MethodSection;