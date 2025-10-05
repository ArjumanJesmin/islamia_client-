"use client";

import { useState } from "react";
import { OverviewTab } from "../../components/tabs/OverviewTab";
import { TeacherManagement } from "../../components/TeacherManagement";
import { StudentManagement } from "../../components/StudentManagement";
import { ClassManagement } from "../../components/ClassManagement";
import { Teacher, Student, Class } from "../../components/types/admin";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'teachers' | 'students' | 'classes'>('overview');
  
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      id: "1",
      name: "জনাব আহমেদ",
      email: "ahmed@school.com",
      phone: "০১৭১২৩৪৫৬৭৮",
      subject: "গণিত",
      joinDate: "২০২৩-০১-১৫",
      status: "active",
      classes: ["পঞ্চম এ", "ষষ্ঠ বি"]
    },
    {
      id: "2",
      name: "জনাবা ফাতেমা",
      email: "fatema@school.com", 
      phone: "০১৮৯৮৭৬৫৪৩২",
      subject: "বিজ্ঞান",
      joinDate: "২০২৩-০২-২০",
      status: "active",
      classes: ["চতুর্থ সি", "পঞ্চম বি"]
    }
  ]);

  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "রহিম ইসলাম",
      email: "rahim@student.com",
      phone: "০১৭১১১১১১১১",
      grade: "পঞ্চম",
      rollNumber: "৫০১",
      parentName: "করিম ইসলাম",
      parentPhone: "০১৭২২২২২২২২",
      address: "১২৩/ক, গ্রীন রোড, ঢাকা",
      status: "active"
    },
    {
      id: "2",
      name: "সুমাইয়া আক্তার",
      email: "sumaiya@student.com",
      phone: "০১৮৩৩৩৩৩৩৩৩",
      grade: "চতুর্থ",
      rollNumber: "৪০২",
      parentName: "আব্দুল আক্তার",
      parentPhone: "০১৯৪৪৪৪৪৪৪৪",
      address: "৪৫৬/খ, মিরপুর, ঢাকা",
      status: "active"
    }
  ]);

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
      status: "active"
    },
    {
      id: "2",
      name: "চতুর্থ বিজ্ঞান", 
      subject: "বিজ্ঞান",
      grade: "চতুর্থ",
      teacherId: "2",
      schedule: "মঙ্গলবার ১০:৩০ - ১১:১৫",
      students: 28,
      room: "ল্যাব ১০১",
      status: "active"
    }
  ]);

  // Teacher CRUD operations
  const handleTeacherCreate = (teacherData: Omit<Teacher, 'id'>) => {
    const newTeacher = {
      ...teacherData,
      id: Date.now().toString(),
    };
    setTeachers(prev => [...prev, newTeacher]);
  };

  const handleTeacherUpdate = (id: string, teacherData: Omit<Teacher, 'id'>) => {
    setTeachers(prev => prev.map(teacher => 
      teacher.id === id ? { ...teacherData, id } : teacher
    ));
  };

  const handleTeacherDelete = (id: string) => {
    if (confirm("আপনি কি এই শিক্ষককে ডিলিট করতে চান?")) {
      setTeachers(prev => prev.filter(teacher => teacher.id !== id));
    }
  };

  // Student CRUD operations
  const handleStudentCreate = (studentData: Omit<Student, 'id'>) => {
    const newStudent = {
      ...studentData,
      id: Date.now().toString(),
    };
    setStudents(prev => [...prev, newStudent]);
  };

  const handleStudentUpdate = (id: string, studentData: Omit<Student, 'id'>) => {
    setStudents(prev => prev.map(student => 
      student.id === id ? { ...studentData, id } : student
    ));
  };

  const handleStudentDelete = (id: string) => {
    if (confirm("আপনি কি এই ছাত্রকে ডিলিট করতে চান?")) {
      setStudents(prev => prev.filter(student => student.id !== id));
    }
  };

  // Class CRUD operations
  const handleClassCreate = (classData: Omit<Class, 'id'>) => {
    const newClass = {
      ...classData,
      id: Date.now().toString(),
    };
    setClasses(prev => [...prev, newClass]);
  };

  const handleClassUpdate = (id: string, classData: Omit<Class, 'id'>) => {
    setClasses(prev => prev.map(cls => 
      cls.id === id ? { ...classData, id } : cls
    ));
  };

  const handleClassDelete = (id: string) => {
    if (confirm("আপনি কি এই ক্লাসটি ডিলিট করতে চান?")) {
      setClasses(prev => prev.filter(cls => cls.id !== id));
    }
  };

  return (
      <div className="space-y-4 sm:space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-school-primary to-school-secondary rounded-2xl p-4 sm:p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                অ্যাডমিন ড্যাশবোর্ড 👨‍💼
              </h1>
              <p className="text-blue-100 mt-2 text-sm sm:text-base">
                স্কুল ম্যানেজমেন্ট সিস্টেমে স্বাগতম। শিক্ষক, ছাত্র এবং ক্লাস ম্যানেজ করুন।
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 min-w-[140px]">
              <p className="text-sm">সক্রিয় ব্যবহারকারী</p>
              <p className="text-lg sm:text-xl font-bold">
                {teachers.length + students.length}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-card rounded-2xl border border-border p-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === 'overview'
                  ? 'bg-school-primary text-white'
                  : 'bg-accent text-foreground hover:bg-accent/80'
              }`}
            >
              ওভারভিউ
            </button>
            <button
              onClick={() => setActiveTab('teachers')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === 'teachers'
                  ? 'bg-school-primary text-white'
                  : 'bg-accent text-foreground hover:bg-accent/80'
              }`}
            >
              শিক্ষক ({teachers.length})
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === 'students'
                  ? 'bg-school-primary text-white'
                  : 'bg-accent text-foreground hover:bg-accent/80'
              }`}
            >
              ছাত্র ({students.length})
            </button>
            <button
              onClick={() => setActiveTab('classes')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === 'classes'
                  ? 'bg-school-primary text-white'
                  : 'bg-accent text-foreground hover:bg-accent/80'
              }`}
            >
              ক্লাস ({classes.length})
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <OverviewTab 
            teachers={teachers}
            students={students}
            classes={classes}
          />
        )}

        {/* Teachers Tab */}
        {activeTab === 'teachers' && (
          <TeacherManagement
            teachers={teachers}
            onTeacherCreate={handleTeacherCreate}
            onTeacherUpdate={handleTeacherUpdate}
            onTeacherDelete={handleTeacherDelete}
          />
        )}

        {/* Students Tab */}
        {activeTab === 'students' && (
          <StudentManagement
            students={students}
            onStudentCreate={handleStudentCreate}
            onStudentUpdate={handleStudentUpdate}
            onStudentDelete={handleStudentDelete}
          />
        )}

        {/* Classes Tab */}
        {activeTab === 'classes' && (
          <ClassManagement
            classes={classes}
            teachers={teachers}
            onClassCreate={handleClassCreate}
            onClassUpdate={handleClassUpdate}
            onClassDelete={handleClassDelete}
          />
        )}
      </div>
  );
}