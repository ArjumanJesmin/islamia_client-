// components/TeacherManagement.tsx
import { useState } from "react";
import { Plus, Edit2, Trash2, Search, Filter, Mail, Phone, BookOpen } from "lucide-react";
import { Teacher, TeacherManagementProps } from "../components/types/admin";



export function TeacherManagement({ teachers, onTeacherCreate, onTeacherUpdate, onTeacherDelete }: TeacherManagementProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const teacherData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      joinDate: formData.get('joinDate') as string,
      status: formData.get('status') as 'active' | 'inactive',
      classes: (formData.get('classes') as string).split(',').map(c => c.trim()).filter(c => c)
    };

    if (editingTeacher) {
      onTeacherUpdate(editingTeacher.id, teacherData);
    } else {
      onTeacherCreate(teacherData);
    }

    setIsModalOpen(false);
    setEditingTeacher(null);
  };

  const openEditModal = (teacher: Teacher) => {
    setEditingTeacher(teacher);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTeacher(null);
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-lg sm:text-xl font-bold text-foreground">শিক্ষক ম্যানেজমেন্ট</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-school-primary hover:bg-school-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          নতুন শিক্ষক
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="শিক্ষকের নাম, বিষয় বা ইমেইল অনুসন্ধান..."
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

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-background border border-border rounded-xl p-4 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-foreground text-lg">{teacher.name}</h3>
                <p className="text-muted-foreground text-sm flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {teacher.subject}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openEditModal(teacher)}
                  className="p-2 text-school-primary hover:bg-school-primary/10 rounded-lg transition-colors duration-200"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onTeacherDelete(teacher.id)}
                  className="p-2 text-school-error hover:bg-school-error/10 rounded-lg transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-foreground">{teacher.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-foreground">{teacher.phone}</span>
              </div>
              <div className="flex justify-between">
                <span>যোগদান:</span>
                <span className="text-foreground font-medium">{teacher.joinDate}</span>
              </div>
              <div className="flex justify-between">
                <span>স্ট্যাটাস:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  teacher.status === 'active' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                }`}>
                  {teacher.status === 'active' ? 'সক্রিয়' : 'নিষ্ক্রিয়'}
                </span>
              </div>
              {teacher.classes.length > 0 && (
                <div>
                  <span className="block mb-1">ক্লাসসমূহ:</span>
                  <div className="flex flex-wrap gap-1">
                    {teacher.classes.map((cls, index) => (
                      <span key={index} className="px-2 py-1 bg-accent text-foreground rounded text-xs">
                        {cls}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Create/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-2xl border border-border p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-foreground mb-4">
              {editingTeacher ? 'শিক্ষক আপডেট করুন' : 'নতুন শিক্ষক যোগ করুন'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">নাম</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingTeacher?.name}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">ইমেইল</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={editingTeacher?.email}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">ফোন নম্বর</label>
                <input
                  type="tel"
                  name="phone"
                  defaultValue={editingTeacher?.phone}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">বিষয়</label>
                <select
                  name="subject"
                  defaultValue={editingTeacher?.subject}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                >
                  <option value="">বিষয় নির্বাচন করুন</option>
                  <option value="গণিত">গণিত</option>
                  <option value="বিজ্ঞান">বিজ্ঞান</option>
                  <option value="বাংলা">বাংলা</option>
                  <option value="ইংরেজি">ইংরেজি</option>
                  <option value="সমাজ বিজ্ঞান">সমাজ বিজ্ঞান</option>
                  <option value="ইতিহাস">ইতিহাস</option>
                  <option value="ভূগোল">ভূগোল</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">যোগদানের তারিখ</label>
                <input
                  type="date"
                  name="joinDate"
                  defaultValue={editingTeacher?.joinDate}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">স্ট্যাটাস</label>
                <select
                  name="status"
                  defaultValue={editingTeacher?.status || 'active'}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                >
                  <option value="active">সক্রিয়</option>
                  <option value="inactive">নিষ্ক্রিয়</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">ক্লাসসমূহ (কমা দ্বারা আলাদা করুন)</label>
                <input
                  type="text"
                  name="classes"
                  defaultValue={editingTeacher?.classes.join(', ')}
                  placeholder="পঞ্চম এ, ষষ্ঠ বি, সপ্তম সি"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-school-primary hover:bg-school-primary/90 text-white py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  {editingTeacher ? 'আপডেট করুন' : 'যোগ করুন'}
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