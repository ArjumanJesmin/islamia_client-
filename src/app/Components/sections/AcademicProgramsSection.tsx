"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Users, Target, Globe } from "lucide-react";
import { GradientText } from "../ui/gradient-text";

export function AcademicProgramsSection() {
  const programs = [
    {
      icon: BookOpen,
      title: "প্রাথমিক শিক্ষা",
      description: "ক্লাস ১-৫ পর্যন্ত মানসম্মত প্রাথমিক শিক্ষা",
      features: ["বাংলা মাধ্যমে শিক্ষা", "ইংরেজি ভাষা প্রশিক্ষণ", "গণিত ও বিজ্ঞান", "নৈতিক শিক্ষা"],
      color: "from-blue-500 to-cyan-500",
      darkColor: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      title: "সহশিক্ষা কার্যক্রম",
      description: "শিক্ষার্থীদের সার্বিক উন্নয়নের জন্য বিভিন্ন কার্যক্রম",
      features: ["খেলাধুলা", "সাংস্কৃতিক অনুষ্ঠান", "স্কাউটিং", "বিতর্ক প্রতিযোগিতা"],
      color: "from-purple-500 to-pink-500",
      darkColor: "from-purple-600 to-pink-600"
    },
    {
      icon: Target,
      title: "বিশেষ প্রশিক্ষণ",
      description: "প্রতিভা উন্নয়ন ও বিশেষ দক্ষতা প্রশিক্ষণ",
      features: ["কম্পিউটার শিক্ষা", "আর্ট ও ক্রাফট", "সঙ্গীত ও নৃত্য", "ক্যারাটে প্রশিক্ষণ"],
      color: "from-green-500 to-emerald-500",
      darkColor: "from-green-600 to-emerald-600"
    },
    {
      icon: Globe,
      title: "আন্তর্জাতিক মান",
      description: "আন্তর্জাতিক মানের শিক্ষা কারিকুলাম",
      features: ["ইংলিশ মিডিয়াম", "ডিজিটাল লার্নিং", "প্রজেক্ট ভিত্তিক শিক্ষা", "সৃজনশীলতা উন্নয়ন"],
      color: "from-orange-500 to-red-500",
      darkColor: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            আমাদের{" "}
            <GradientText variant="primary">
              একাডেমিক প্রোগ্রাম
            </GradientText>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            শিক্ষার্থীদের সার্বিক উন্নয়নের জন্য বিভিন্ন একাডেমিক ও সহশিক্ষা কার্যক্রম
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-xl hover:shadow-2xl dark:hover:shadow-gray-800/50 transition-all duration-500 h-full border border-gray-200 dark:border-gray-700">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${program.color} dark:${program.darkColor} rounded-2xl flex items-center justify-center text-white`}>
                    <program.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {program.title}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                    {program.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}