import React from 'react';
import { StatCard } from '../../components/StartCard';
import { Users, UserCheck, BookOpen, TrendingUp } from 'lucide-react';
import { Teacher, Student, Class } from '../../components/types/admin';

interface OverviewTabProps {
  teachers: Teacher[];
  students: Student[];
  classes: Class[];
}

export const OverviewTab: React.FC<OverviewTabProps> = ({
  teachers,
  students,
  classes,
}) => {
  const stats = [
    {
      title: "মোট ছাত্র",
      value: students.length.toString(),
      icon: Users,
      color: "blue" as const,
      change: { value: 5, type: "increase" as const },
    },
    {
      title: "মোট শিক্ষক",
      value: teachers.length.toString(),
      icon: UserCheck,
      color: "green" as const,
    },
    {
      title: "সক্রিয় ক্লাস",
      value: classes.length.toString(),
      icon: BookOpen,
      color: "purple" as const,
    },
    {
      title: "উপস্থিতি রেট",
      value: "৯৪%",
      icon: TrendingUp,
      color: "orange" as const,
      change: { value: 2, type: "increase" as const },
    },
  ];

  return (
    <>
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

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-card rounded-2xl border border-border p-4 sm:p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">শিক্ষক ডিস্ট্রিবিউশন</h3>
          <div className="space-y-3">
            {Array.from(new Set(teachers.map(t => t.subject))).map((subject, index) => {
              const count = teachers.filter(t => t.subject === subject).length;
              return (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{subject}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-school-primary"
                        style={{ width: `${(count / teachers.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-foreground w-8">{count}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-4 sm:p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">শ্রেণীভিত্তিক ছাত্র</h3>
          <div className="space-y-3">
            {Array.from(new Set(students.map(s => s.grade))).map((grade, index) => {
              const count = students.filter(s => s.grade === grade).length;
              return (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{grade} শ্রেণী</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-school-secondary"
                        style={{ width: `${(count / students.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-foreground w-8">{count}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-4 sm:p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">সিস্টেম স্ট্যাটাস</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <span className="text-sm font-medium text-green-800 dark:text-green-300">সিস্টেম</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs font-medium">
                সক্রিয়
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">ডাটাবেজ</span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium">
                সংযুক্ত
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <span className="text-sm font-medium text-green-800 dark:text-green-300">ব্যাকআপ</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-xs font-medium">
                আপ টু ডেট
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};