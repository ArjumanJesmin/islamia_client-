'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Clock, GraduationCap, Target } from "lucide-react";

interface Teacher {
  name: string;
  position: string;
  qualification: string;
  experience: string;
  subject: string;
  image: string;
  expertise: string[];
  achievements: string[];
  specialization: string;
}

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    
    const fallbackElement = target.nextElementSibling as HTMLElement;
    if (fallbackElement) {
      fallbackElement.style.display = 'flex';
    }
  };

  return (
    <Card className="group relative hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-gray-700/50 overflow-hidden backdrop-blur-sm">
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
          <div className="w-28 h-28 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/80 dark:border-gray-800/80 overflow-hidden bg-gray-200">
            <img 
              src={teacher.image} 
              alt={teacher.name}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
            <div 
              className="w-full h-full bg-gradient-to-br from-school-primary to-school-secondary hidden items-center justify-center"
            >
              {teacher.name.split(' ').map(n => n[0]).join('')}
            </div>
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
  );
}