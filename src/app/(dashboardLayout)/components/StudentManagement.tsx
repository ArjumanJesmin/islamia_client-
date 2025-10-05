// components/StudentManagement.tsx
import { useState } from "react";
import { Plus, Edit2, Trash2, Search, Filter, Mail, Phone, User, MapPin } from "lucide-react";
import { Student } from "../components/types/admin";

interface StudentManagementProps {
  students: Student[];
  onStudentCreate: (studentData: Omit<Student, 'id'>) => void;
  onStudentUpdate: (id: string, studentData: Omit<Student, 'id'>) => void;
  onStudentDelete: (id: string) => void;
}

export function StudentManagement({ students, onStudentCreate, onStudentUpdate, onStudentDelete }: StudentManagementProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const studentData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      grade: formData.get('grade') as string,
      rollNumber: formData.get('rollNumber') as string,
      parentName: formData.get('parentName') as string,
      parentPhone: formData.get('parentPhone') as string,
      address: formData.get('address') as string,
      status: formData.get('status') as 'active' | 'inactive',
    };

    if (editingStudent) {
      onStudentUpdate(editingStudent.id, studentData);
    } else {
      onStudentCreate(studentData);
    }

    setIsModalOpen(false);
    setEditingStudent(null);
  };

  const openEditModal = (student: Student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingStudent(null);
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-lg sm:text-xl font-bold text-foreground">ছাত্র ম্যানেজমেন্ট</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-school-primary hover:bg-school-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          নতুন ছাত্র
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="ছাত্রের নাম, শ্রেণী বা রোল নম্বর অনুসন্ধান..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary focus:border-transparent"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors duration-200">
          <Filter className="w-4 h-4" />
          ফিল্টার
        </button>
      </div>

      {/* Students Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-foreground">ছাত্র</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-foreground">শ্রেণী</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-foreground">যোগাযোগ</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-foreground">অভিভাবক</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-foreground">স্ট্যাটাস</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-foreground">একশন</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-b border-border hover:bg-accent/50 transition-colors duration-200">
                <td className="py-3 px-4">
                  <div>
                    <p className="font-medium text-foreground">{student.name}</p>
                    <p className="text-sm text-muted-foreground">রোল: {student.rollNumber}</p>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="bg-school-primary/10 text-school-primary px-2 py-1 rounded text-sm font-medium">
                    {student.grade}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="space-y-1">
                    <p className="text-sm flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {student.email}
                    </p>
                    <p className="text-sm flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {student.phone}
                    </p>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="space-y-1">
                    <p className="text-sm">{student.parentName}</p>
                    <p className="text-sm text-muted-foreground">{student.parentPhone}</p>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    student.status === 'active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                  }`}>
                    {student.status === 'active' ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditModal(student)}
                      className="p-2 text-school-primary hover:bg-school-primary/10 rounded-lg transition-colors duration-200"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onStudentDelete(student.id)}
                      className="p-2 text-school-error hover:bg-school-error/10 rounded-lg transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-2xl border border-border p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-foreground mb-4">
              {editingStudent ? 'ছাত্র আপডেট করুন' : 'নতুন ছাত্র যোগ করুন'}
            </h3>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">নাম</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingStudent?.name}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">রোল নম্বর</label>
                <input
                  type="text"
                  name="rollNumber"
                  defaultValue={editingStudent?.rollNumber}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">ইমেইল</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={editingStudent?.email}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">ফোন নম্বর</label>
                <input
                  type="tel"
                  name="phone"
                  defaultValue={editingStudent?.phone}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">শ্রেণী</label>
                <select
                  name="grade"
                  defaultValue={editingStudent?.grade}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                >
                  <option value="">শ্রেণী নির্বাচন করুন</option>
                  <option value="প্রথম">প্রথম</option>
                  <option value="দ্বিতীয়">দ্বিতীয়</option>
                  <option value="তৃতীয়">তৃতীয়</option>
                  <option value="চতুর্থ">চতুর্থ</option>
                  <option value="পঞ্চম">পঞ্চম</option>
                  <option value="ষষ্ঠ">ষষ্ঠ</option>
                  <option value="সপ্তম">সপ্তম</option>
                  <option value="অষ্টম">অষ্টম</option>
                  <option value="নবম">নবম</option>
                  <option value="দশম">দশম</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">স্ট্যাটাস</label>
                <select
                  name="status"
                  defaultValue={editingStudent?.status || 'active'}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                >
                  <option value="active">সক্রিয়</option>
                  <option value="inactive">নিষ্ক্রিয়</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">অভিভাবকের নাম</label>
                <input
                  type="text"
                  name="parentName"
                  defaultValue={editingStudent?.parentName}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">অভিভাবকের ফোন</label>
                <input
                  type="tel"
                  name="parentPhone"
                  defaultValue={editingStudent?.parentPhone}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">ঠিকানা</label>
                <textarea
                  name="address"
                  defaultValue={editingStudent?.address}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary resize-none"
                />
              </div>

              <div className="md:col-span-2 flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-school-primary hover:bg-school-primary/90 text-white py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  {editingStudent ? 'আপডেট করুন' : 'যোগ করুন'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-muted hover:bg-muted/80 text-foreground py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  বাতিল
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}