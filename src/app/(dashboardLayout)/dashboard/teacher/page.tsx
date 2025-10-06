"use client";

import { useState } from "react";
import { StatCard } from "../../components/StartCard";
import { RecentActivity } from "../../components/RecentActivity";
import { QuickActions } from "../../components/QuickActions";
import { ClassManagement } from "../../components/ClassManagement";
import { ClassModal } from "../../components/modals/ClassModal";
import { NoticeModal } from "../teacher/components/modal/NoticeModal";
import { useModal } from "../teacher/components/modal/useModal";
import {
  Users,
  BookOpen,
  CheckCircle,
  FileText,
  Bell,
  Plus,
} from "lucide-react";
import { Class, Teacher } from "../../components/types/admin"; // Import Teacher from admin types

interface Student {
  id: string;
  name: string;
  present: boolean;
}

// Remove the local Teacher interface and use the one from admin types

export default function TeacherDashboard() {
  // Modal hooks
  const classModal = useModal();
  const attendanceModal = useModal();
  const noticeModal = useModal();

  const [editingClass, setEditingClass] = useState<Class | null>(null);

  const [classes, setClasses] = useState<Class[]>([
    {
      id: "1",
      name: "পঞ্চম গণিত",
      subject: "গণিত",
      grade: "পঞ্চম",
      teacherId: "1",
      schedule: "সোমবার ৯:০০ - ৯:৪৫",
      students: 30,
      room: "২০১",
      status: "active",
    },
    {
      id: "2",
      name: "চতুর্থ বিজ্ঞান",
      subject: "বিজ্ঞান",
      grade: "চতুর্থ",
      teacherId: "1",
      schedule: "মঙ্গলবার ১০:৩০ - ১১:১৫",
      students: 28,
      room: "ল্যাব ১০১",
      status: "active",
    },
  ]);

  // Update teachers data to match the Teacher interface from admin types
  const [teachers] = useState<Teacher[]>([
    {
      id: "1",
      name: "জনাব আহমেদ",
      email: "ahmed@school.edu",
      phone: "01712345678",
      joinDate: "2023-01-15",
      status: "active",
      classes: ["1", "2"]
    },
    {
      id: "2",
      name: "জনাবা ফাতেমa", 
      email: "fatema@school.edu",
      phone: "01787654321",
      joinDate: "2023-02-20",
      status: "active",
      classes: ["3", "4"]
    },
  ]);

  const [students] = useState<Student[]>([
    { id: "1", name: "রহিম ইসলাম", present: true },
    { id: "2", name: "সুমাইয়া আক্তার", present: true },
    { id: "3", name: "করিম উদ্দিন", present: false },
    { id: "4", name: "আয়েশা বেগম", present: true },
  ]);

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
      value: `${classes.length}টি`,
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
      onClick: () => attendanceModal.open(),
      color: "green" as const,
    },
    {
      title: "নতুন ক্লাস তৈরি",
      description: "নতুন ক্লাস তৈরি করুন",
      icon: Plus,
      onClick: () => {
        setEditingClass(null);
        classModal.open();
      },
      color: "blue" as const,
    },
    {
      title: "অ্যাসাইনমেন্ট তৈরি",
      description: "নতুন অ্যাসাইনমেন্ট তৈরি করুন",
      icon: FileText,
      onClick: () => alert("অ্যাসাইনমেন্ট ফিচারটি শীঘ্রই আসছে!"),
      color: "orange" as const,
    },
    {
      title: "নোটিশ দিন",
      description: "নতুন নোটিশ প্রকাশ করুন",
      icon: Bell,
      onClick: () => noticeModal.open(),
      color: "purple" as const,
    },
  ];

  // Class CRUD operations
  const handleClassCreate = (classData: Omit<Class, "id">) => {
    const newClass = {
      ...classData,
      id: Date.now().toString(),
    };
    setClasses((prev) => [...prev, newClass]);
  };

  const handleClassUpdate = (id: string, classData: Omit<Class, "id">) => {
    setClasses((prev) =>
      prev.map((cls) => (cls.id === id ? { ...classData, id } : cls))
    );
  };

  const handleClassDelete = (id: string) => {
    if (confirm("আপনি কি এই ক্লাসটি ডিলিট করতে চান?")) {
      setClasses((prev) => prev.filter((cls) => cls.id !== id));
    }
  };

  const handleClassEdit = (classItem: Class) => {
    setEditingClass(classItem);
    classModal.open();
  };

  const handleClassSubmit = (classData: Omit<Class, "id">) => {
    if (editingClass) {
      handleClassUpdate(editingClass.id, classData);
    } else {
      handleClassCreate(classData);
    }
  };

  // Notice handler
  const handleNoticeSubmit = (noticeData: {
    title: string;
    message: string;
    priority: "low" | "medium" | "high";
  }) => {
    console.log("Notice published:", noticeData);
    alert("নোটিশ সফলভাবে প্রকাশিত হয়েছে!");
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-school-primary to-school-secondary rounded-2xl p-4 sm:p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              স্বাগতম, স্যার! 👨‍🏫
            </h1>
            <p className="text-blue-100 mt-2 text-sm sm:text-base">
              আজ আপনার {classes.length}টি ক্লাস আছে। {stats[0].value} জন ছাত্রের
              উপস্থিতি মার্ক করুন।
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[140px]">
            <p className="text-sm">মোট বিষয়</p>
            <p className="text-lg sm:text-xl font-bold">গণিত, বিজ্ঞান</p>
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

      {/* Class Management */}
      <ClassManagement
        classes={classes}
        onClassCreate={handleClassCreate}
        onClassUpdate={handleClassUpdate}
        onClassDelete={handleClassDelete}
        onClassEdit={handleClassEdit}
      />

      {/* Reusable Modals */}
      <ClassModal
        isOpen={classModal.isOpen}
        onClose={classModal.close}
        onSubmit={handleClassSubmit}
        classItem={editingClass}
        teachers={teachers}
        title={editingClass ? "ক্লাস এডিট করুন" : "নতুন ক্লাস তৈরি করুন"}
      />

      <NoticeModal
        isOpen={noticeModal.isOpen}
        onClose={noticeModal.close}
        onSubmit={handleNoticeSubmit}
        title="নতুন নোটিশ প্রকাশ করুন"
      />
    </div>
  );
}