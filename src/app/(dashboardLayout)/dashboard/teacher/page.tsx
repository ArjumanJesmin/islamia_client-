"use client";

// import { useSession } from "next-auth/react";
// import DashboardLayout from "../../components/DashboardLayout";
import { StatCard } from "../../components/StartCard";
import { RecentActivity } from "../../components/RecentActivity";
import {
  Users,
  BookOpen,
  Calendar,
  TrendingUp,
  CheckCircle,
  FileText,
  Bell,
  Clock,
  Award,
} from "lucide-react";

export default function TeacherDashboard() {
  // const { data: session } = useSession();

  const stats = [
    {
      title: "মোট ছাত্র",
      value: "৪৫",
      icon: Users,
      color: "blue" as const,
      change: { value: 3, type: "increase" as const },
    },
    {
      title: "মোট ক্লাস",
      value: "৩টি",
      icon: BookOpen,
      color: "green" as const,
    },
    {
      title: "আজকের উপস্থিতি",
      value: "৯৫%",
      icon: CheckCircle,
      color: "purple" as const,
    },
    {
      title: "অ্যাসাইনমেন্ট",
      value: "১২টি",
      icon: FileText,
      color: "orange" as const,
      change: { value: 2, type: "increase" as const },
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: "উপস্থিতি মার্ক করা হয়েছে",
      description: "পঞ্চম শ্রেণীর উপস্থিতি মার্ক করা হয়েছে",
      time: "১ ঘন্টা আগে",
      type: "attendance" as const,
      icon: "✅",
    },
    {
      id: 2,
      title: "নতুন অ্যাসাইনমেন্ট",
      description: "গণিতের নতুন অ্যাসাইনমেন্ট দেওয়া হয়েছে",
      time: "৩ ঘন্টা আগে",
      type: "assignment" as const,
      icon: "📝",
    },
    {
      id: 3,
      title: "প্যারেন্ট মিটিং",
      description: "অভিভাবক সমাবেশের নোটিশ পাঠানো হয়েছে",
      time: "১ দিন আগে",
      type: "announcement" as const,
      icon: "📢",
    },
    {
      id: 4,
      title: "মিডটার্ম রেজাল্ট",
      description: "মিডটার্ম পরীক্ষার ফলাফল আপলোড করা হয়েছে",
      time: "২ দিন আগে",
      type: "result" as const,
      icon: "🏆",
    },
  ];

  const quickActions = [
    {
      title: "উপস্থিতি মার্ক করুন",
      description: "ছাত্রদের উপস্থিতি মার্ক করুন",
      icon: CheckCircle,
      href: "/teacher/attendance",
      color: "green" as const,
    },
    {
      title: "ফলাফল ইনপুট",
      description: "পরীক্ষার ফলাফল ইনপুট দিন",
      icon: Award,
      href: "/teacher/results",
      color: "blue" as const,
    },
    {
      title: "নোটিশ দিন",
      description: "নতুন নোটিশ প্রকাশ করুন",
      icon: Bell,
      href: "/teacher/notices",
      color: "orange" as const,
    },
    {
      title: "ক্লাস সূচী",
      description: "ক্লাস রুটিন ম্যানেজ করুন",
      icon: Clock,
      href: "/teacher/schedule",
      color: "purple" as const,
    },
  ];

  return (
    <>
    {/* <DashboardLayout> */}
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                স্বাগতম,
                 {/* {session?.user?.name}  */}
                 স্যার! 👨‍🏫
              </h1>
              <p className="text-green-100 mt-2 text-lg">
                আজ আপনার ৩টি ক্লাস আছে। ৪৫ জন ছাত্রের উপস্থিতি মার্ক করুন।
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm">মোট বিষয়</p>
                <p className="text-xl font-bold">গণিত, বিজ্ঞান</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                দ্রুত একশন
              </h2>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => (window.location.href = action.href)}
                    className={`w-full flex items-center space-x-4 p-4 rounded-xl border transition-all hover:scale-105 ${
                      action.color === "green"
                        ? "bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                        : action.color === "blue"
                        ? "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
                        : action.color === "orange"
                        ? "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100"
                        : "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        action.color === "green"
                          ? "bg-green-100"
                          : action.color === "blue"
                          ? "bg-blue-100"
                          : action.color === "orange"
                          ? "bg-orange-100"
                          : "bg-purple-100"
                      }`}
                    >
                      <action.icon className="h-5 w-5" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-semibold">{action.title}</p>
                      <p className="text-sm opacity-80 mt-1">
                        {action.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <RecentActivity activities={recentActivities} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Classes */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              আজকের ক্লাস
            </h2>
            <div className="space-y-4">
              {[
                {
                  class: "পঞ্চম শ্রেণী",
                  subject: "গণিত",
                  time: "৯:০০ - ৯:৪৫",
                  students: 30,
                  room: "রুম ২০১",
                  status: "upcoming",
                },
                {
                  class: "চতুর্থ শ্রেণী",
                  subject: "বিজ্ঞান",
                  time: "১০:৩০ - ১১:১৫",
                  students: 28,
                  room: "ল্যাব ১০১",
                  status: "upcoming",
                },
                {
                  class: "পঞ্চম শ্রেণী",
                  subject: "গণিত",
                  time: "১২:০০ - ১২:৪৫",
                  students: 30,
                  room: "রুম ২০১",
                  status: "upcoming",
                },
              ].map((classItem, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-green-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {classItem.class}
                      </h3>
                      <p className="text-gray-600">{classItem.subject}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {classItem.time}
                      </p>
                      <p className="text-sm text-gray-600">{classItem.room}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {classItem.students} জন ছাত্র
                    </span>
                    <div className="flex space-x-2">
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        উপস্থিতি মার্ক করুন
                      </button>
                      <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        বিস্তারিত
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Class Performance */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              ক্লাস পারফরম্যান্স
            </h2>
            <div className="space-y-6">
              {[
                {
                  class: "পঞ্চম শ্রেণী - গণিত",
                  attendance: 95,
                  performance: 88,
                },
                {
                  class: "চতুর্থ শ্রেণী - বিজ্ঞান",
                  attendance: 92,
                  performance: 85,
                },
                {
                  class: "পঞ্চম শ্রেণী - বাংলা",
                  attendance: 89,
                  performance: 82,
                },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {item.class}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">উপস্থিতি</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-green-500"
                            style={{ width: `${item.attendance}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-8">
                          {item.attendance}%
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">গড় ফলাফল</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-blue-500"
                            style={{ width: `${item.performance}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-8">
                          {item.performance}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    বিস্তারিত রিপোর্ট
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">মুলতুবি কাজ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                task: "অ্যাসাইনমেন্ট চেক",
                count: 12,
                color: "bg-orange-500",
                icon: "📝",
              },
              {
                task: "উপস্থিতি আপডেট",
                count: 3,
                color: "bg-blue-500",
                icon: "✅",
              },
              {
                task: "ফলাফল আপলোড",
                count: 2,
                color: "bg-green-500",
                icon: "🏆",
              },
              {
                task: "নোটিশ তৈরি",
                count: 1,
                color: "bg-purple-500",
                icon: "📢",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.task}</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {item.count}
                    </p>
                  </div>
                </div>
                <button className="w-full mt-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-lg text-sm font-medium transition-colors">
                  সম্পন্ন করুন
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    {/* </DashboardLayout> */}
    </>
  );
}
