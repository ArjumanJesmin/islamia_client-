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

export default function Teachers() {
  const teachers = [
    {
      name: "মোঃ মনিরুল ইসলাম",
      position: "প্রধান শিক্ষক",
      qualification: "বিএড, এমএ",
      experience: "২৯ বছর",
      subject: "ইংরেজি, গণিত",
      image: "/api/placeholder/200/200?text=MI",
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
      image: "/api/placeholder/200/200?text=TK",
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
      image: "/api/placeholder/200/200?text=AJ",
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
      image: "/api/placeholder/200/200?text=SD",
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
      image: "/api/placeholder/200/200?text=SK",
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

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teachers.map((teacher, index) => (
            <Card
              key={index}
              className="group relative hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-gray-700/50 overflow-hidden backdrop-blur-sm"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-school-primary to-school-secondary" />

              {/* Teacher Image & Basic Info */}
              <CardHeader className="pb-4 relative z-10">
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className={`${
                      teacher.position === "প্রধান শিক্ষক"
                        ? "bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 border-amber-200 shadow"
                        : "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 border-blue-200 shadow"
                    } backdrop-blur-sm`}
                  >
                    {teacher.position}
                  </Badge>
                </div>

                {/* Teacher Avatar */}
                <div className="relative">
                  <div className="w-28 h-28 mx-auto mb-4 bg-gradient-to-br from-school-primary to-school-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/80 dark:border-gray-800/80">
                    {teacher.image.split("text=")[1]}
                  </div>
                  {/* Experience Badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg px-3 py-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {teacher.experience}
                    </Badge>
                  </div>
                </div>

                <CardTitle className="text-xl text-foreground text-center mb-2 font-bold">
                  {teacher.name}
                </CardTitle>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="w-4 h-4 text-school-primary" />
                  <span>{teacher.qualification}</span>
                </div>

                {/* Specialization */}
                {teacher.specialization && (
                  <div className="mt-2 text-center">
                    <Badge
                      variant="outline"
                      className="bg-school-primary/5 text-school-primary border-school-primary/20 text-xs"
                    >
                      {teacher.specialization}
                    </Badge>
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-4 pt-6 relative z-10">
                {/* Subjects */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-school-secondary" />
                    <span className="font-semibold text-foreground">
                      শিক্ষাদান বিষয়
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {teacher.subject.split(",").map((subj, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-blue-50/80 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 text-xs backdrop-blur-sm"
                      >
                        {subj.trim()}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Expertise Areas */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-semibold text-foreground">
                      বিশেষজ্ঞতা
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {teacher.expertise.map((exp, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-green-50/80 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 text-xs"
                      >
                        {exp}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="pt-3 border-t border-gray-200/50 dark:border-gray-600/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-semibold text-foreground">
                      অর্জন ও স্বীকৃতি
                    </span>
                  </div>
                  <div className="space-y-2">
                    {teacher.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-muted-foreground flex items-start gap-2 bg-amber-50/50 dark:bg-amber-900/10 rounded-lg p-2"
                      >
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1 flex-shrink-0" />
                        <span className="flex-1">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
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
