"use client";

import DashboardLayout from "../../components/DashboardLayout";
import { StatCard } from "../../components/StartCard";
import { RecentActivity } from "../../components/RecentActivity";
import { QuickActions } from "../../components/QuickActions";
import { ClassSchedule } from "../../components/ClassSchedule";
import {
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  Clock,
  Award,
  FileText,
  Bell,
} from "lucide-react";

export default function StudentDashboard() {
  const stats = [
    {
      title: "মোট উপস্থিতি",
      value: "৯২%",
      icon: Users,
      color: "green" as const,
      change: { value: 5, type: "increase" as const },
    },
    {
      title: "বর্তমান শ্রেণী",
      value: "পঞ্চম",
      icon: BookOpen,
      color: "blue" as const,
    },
    {
      title: "আজকের ক্লাস",
      value: "৪টি",
      icon: Calendar,
      color: "purple" as const,
    },
    {
      title: "গড় ফলাফল",
      value: "৮৫%",
      icon: TrendingUp,
      color: "orange" as const,
      change: { value: 2, type: "increase" as const },
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: "গণিত ক্লাস",
      description: "আপনি গণিত ক্লাসে উপস্থিত ছিলেন",
      time: "২ ঘন্টা আগে",
      type: "attendance" as const,
      icon: "✅",
    },
    {
      id: 2,
      title: "বাংলা অ্যাসাইনমেন্ট",
      description: "আপনার বাংলা অ্যাসাইনমেন্ট জমা দেওয়া হয়েছে",
      time: "১ দিন আগে",
      type: "assignment" as const,
      icon: "📝",
    },
    {
      id: 3,
      title: "বার্ষিক পরীক্ষা",
      description: "বার্ষিক পরীক্ষার সময়সূচী প্রকাশিত হয়েছে",
      time: "২ দিন আগে",
      type: "announcement" as const,
      icon: "📢",
    },
    {
      id: 4,
      title: "বিজ্ঞান কুইজ",
      description: "বিজ্ঞান কুইজে আপনি ১৮/২০ পেয়েছেন",
      time: "৩ দিন আগে",
      type: "result" as const,
      icon: "🏆",
    },
  ];

  const quickActions = [
    {
      title: "ক্লাস রুটিন",
      description: "সাপ্তাহিক ক্লাস সূচী দেখুন",
      icon: Clock,
      href: "/student/schedule",
      color: "blue" as const,
    },
    {
      title: "উপস্থিতি রিপোর্ট",
      description: "আপনার উপস্থিতি রেকর্ড দেখুন",
      icon: Users,
      href: "/student/attendance",
      color: "green" as const,
    },
    {
      title: "ফলাফল দেখুন",
      description: "পরীক্ষার ফলাফল দেখুন",
      icon: Award,
      href: "/student/results",
      color: "orange" as const,
    },
    {
      title: "অ্যাসাইনমেন্ট",
      description: "অ্যাসাইনমেন্ট জমা দিন",
      icon: FileText,
      href: "/student/assignments",
      color: "purple" as const,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-school-primary to-school-secondary rounded-2xl p-4 sm:p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                স্বাগতম, শিক্ষার্থী! 👋
              </h1>
              <p className="text-blue-100 mt-2 text-sm sm:text-base">
                আজ আপনার ৪টি ক্লাস আছে। সাম্প্রতিক আপডেট এবং নোটিশ দেখুন।
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[140px]">
              <p className="text-sm">বর্তমান শ্রেণী</p>
              <p className="text-lg sm:text-xl font-bold">পঞ্চম শ্রেণী</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
              change={stat.change}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <QuickActions actions={quickActions} />
          </div>

          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <RecentActivity activities={recentActivities} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
