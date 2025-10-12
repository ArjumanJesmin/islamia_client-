import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GradientText } from "../Components/ui/gradient-text";
import {
  Award,
  BookOpen,
  Clock,
  GraduationCap,
  Users,
  Star,
  Target,
} from "lucide-react";
import MethodSection from "./components/MethodSection";
import Philosophy from "./components/Philosophy ";
import TeacherCard from "./components/TeacherCard"; 

export default function Teachers() {
  const teachers = [
    {
      name: "মোঃ মনিরুল ইসলাম",
      position: "প্রধান শিক্ষক",
      qualification: "বিএড, এমএ",
      experience: "২৯ বছর",
      subject: "ইংরেজি, গণিত",
      image: "/teacher/monirul.png",
      expertise: ["ইংরেজি", "গণিত", "শিক্ষা ব্যবস্থাপনা"],
      achievements: ["২৫+ বছর অভিজ্ঞতা", "শিক্ষা উন্নয়নে বিশেষ অবদান"],
      specialization: "ভাষা ও গণিত শিক্ষা",
    },
    {
      name: "তাছলিমা খাতুন",
      position: "সহকারী শিক্ষক",
      qualification: "বিএড, এম কম(ম্যানেজমেন্ট)",
      experience: "২৫ বছর",
      subject: "বাংলা, ইংরেজি, গণিত",
      image: "/teacher/taslima1.png",
      expertise: ["বাংলা", "ইংরেজি", "ব্যবস্থাপনা"],
      achievements: ["২৫+ বছর অভিজ্ঞতা"],
      specialization: "মানবিক ও ব্যবস্থাপনা",
    },
    {
      name: "আরজুমান জেসমিন",
      position: "সহকারী শিক্ষক",
      qualification: "ডিপিএড, এমএসএস(সমাজবিজ্ঞান)",
      experience: "০৯ বছর",
      subject: "গণিত, বিজ্ঞান, ইংরেজি, বাংলাদেশ ও বিশ্বপরিচয়",
      image: "/teacher/jesmin.png",
      expertise: ["সমাজবিজ্ঞান", "গণিত", "বিজ্ঞান"],
      achievements: ["ডিজিটাল শিক্ষা বিশেষজ্ঞ"],
      specialization: "সামাজিক বিজ্ঞান",
    },
    {
      name: "সুমনা দাশ",
      position: "সহকারী শিক্ষক",
      qualification: "ডিপিএড, এমএ(বাংলা)",
      experience: "০৮ বছর",
      subject: "বাংলা, ইংরেজি, বিজ্ঞান, ধর্ম",
      image: "/teacher/sumana.png",
      expertise: ["বাংলা সাহিত্য", "ধর্ম শিক্ষা", "ভাষা শিক্ষা"],
      achievements: ["সৃজনশীল শিক্ষা পদ্ধতি"],
      specialization: "ভাষা ও সাহিত্য",
    },
    {
      name: "শামিমা খাতুন",
      position: "সহকারী শিক্ষক",
      qualification: "ডিপিএড, এমএসএস(অর্থনীতি)",
      experience: "৮ বছর",
      subject: "গণিত, ইংরেজি, বাংলাদেশ ও বিশ্বপরিচয়, ধর্ম",
      image: "/teacher/shamima.png",
      expertise: ["অর্থনীতি", "গণিত", "সামাজিক বিজ্ঞান"],
      achievements: ["শিক্ষা উন্নয়নে বিশেষ অবদান"],
      specialization: "অর্থনীতি ও গণিত",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "৫০০+",
      label: "সফল শিক্ষার্থী",
      color: "from-school-primary to-school-secondary",
    },
    {
      icon: Award,
      value: "২৫+",
      label: "বছরের ঐতিহ্য",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: GraduationCap,
      value: "১০০%",
      label: "পাসের হার",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Star,
      value: "১৫+",
      label: "পুরস্কার প্রাপ্তি",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen pt-8 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-sm bg-gradient-to-r from-school-primary/20 to-school-secondary/20 text-school-primary border-school-primary/30 backdrop-blur-sm"
            >
              <Star className="w-3 h-3 mr-1" />
              আমাদের গর্ব
            </Badge>
          </div>
          <GradientText
            variant="primary"
            size="4xl"
            weight="bold"
            align="center"
            responsive
            withLine
            className="mb-6"
          >
            আমাদের শিক্ষকবৃন্দ
          </GradientText>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            অভিজ্ঞ, প্রশিক্ষিত ও নিবেদিতপ্রাণ শিক্ষকমণ্ডলী যারা শিক্ষার্থীদের
            ভবিষ্যত গড়তে প্রতিশ্রুতিবদ্ধ
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${stat.color}`}
              />

              <div
                className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center shadow-lg`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Teachers Grid - Use Client Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
        </div>

        {/* Teaching Methods Section */}
        <MethodSection />

        {/* Teaching Philosophy */}
        <Philosophy />
      </div>
    </div>
  );
}