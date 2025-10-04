"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Award,
  Clock,
  BookOpen,
  Activity,
} from "lucide-react";
import { useState, useEffect } from "react";

// Import test.json data
import testData from "../../../../test.json";

interface SchoolData {
  school: {
    name: string;
    established: number;
    motto: string;
    description: string;
  };
  statsData: {
    students: number;
    teachers: number;
    successRate: number;
    classes: number;
    activities: number;
  };
  featuresData: string[];
}

const WelcomeSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<SchoolData | null>(null);

  // Simulate API call to fetch data from test.json
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Use the imported test.json data
        setData(testData);
        setError(null);
      } catch (err) {
        setError("ডেটা লোড করতে সমস্যা হয়েছে");
        console.error("Error loading data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Calculate experience years dynamically
  const experienceYears = data
    ? new Date().getFullYear() - data.school.established
    : 0;

  const statItems = [
    {
      value: data?.statsData.students.toLocaleString() || "১২৫০",
      label: "বর্তমান শিক্ষার্থী",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      value: data?.statsData.teachers || "৩২",
      label: "অভিজ্ঞ শিক্ষক",
      icon: GraduationCap,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      value: `${experienceYears}+`,
      label: "বছরের অভিজ্ঞতা",
      icon: Clock,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      value: `${data?.statsData.successRate || "৯৬"}%`,
      label: "সাফল্যের হার",
      icon: Award,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      value: data?.statsData.classes || "২৪",
      label: "আধুনিক ক্লাসরুম",
      icon: BookOpen,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      value: data?.statsData.activities || "১৫+",
      label: "সহশিক্ষা কার্যক্রম",
      icon: Activity,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-12 w-3/4 mb-6 bg-gray-300 dark:bg-gray-700" />
              <Skeleton className="h-4 w-full mb-4 bg-gray-300 dark:bg-gray-700" />
              <Skeleton className="h-4 w-5/6 mb-4 bg-gray-300 dark:bg-gray-700" />
              <Skeleton className="h-4 w-4/6 mb-8 bg-gray-300 dark:bg-gray-700" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-32 bg-gray-300 dark:bg-gray-700" />
                <Skeleton className="h-12 w-32 bg-gray-300 dark:bg-gray-700" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton
                  key={i}
                  className="h-32 rounded-2xl bg-gray-300 dark:bg-gray-700"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container text-center">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-red-800 dark:text-red-300 text-xl font-semibold mb-4">
              ডেটা লোড করতে সমস্যা হয়েছে
            </h3>
            <p className="text-red-600 dark:text-red-400 mb-4">
              স্থানীয় ডেটা দেখানো হচ্ছে। সার্ভার সংযোগ পরে চেক করুন।
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              আবার চেষ্টা করুন
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-4 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                {data.school.motto}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              স্বাগতম <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {data.school.name}
              </span>
            </h1>

            <p className="text-2xl md:text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {data.school.description}
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              আধুনিক শিক্ষা পদ্ধতি, অভিজ্ঞ শিক্ষকমণ্ডলী এবং উন্নত অবকাঠামো নিয়ে
              আমরা প্রস্তুত আপনার সন্তানের উজ্জ্বল ভবিষ্যত গড়ে তুলতে।
            </p>

            {/* Features List */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                আমাদের বিশেষত্ব:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.featuresData.slice(0, 4).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
              >
                <Link href="/about">আমাদের ইতিহাস</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300"
              >
                <Link href="/contact">ক্যাম্পাস ভিজিট</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            {statItems.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/70 dark:bg-gray-800/70">
                  <CardContent className="p-4 text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 ${stat.bgColor} rounded-2xl flex items-center justify-center`}
                    >
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-300 leading-tight">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              <strong className="text-blue-600 dark:text-blue-400">
                {data.school.established}
              </strong>{" "}
              সাল থেকে নিরলসভাবে শিক্ষা সেবা প্রদান করে চলেছি
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
