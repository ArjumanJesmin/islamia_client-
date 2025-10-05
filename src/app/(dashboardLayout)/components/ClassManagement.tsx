import { useState } from "react";
import { Plus, Edit2, Trash2, Search, Filter } from "lucide-react";
import { Class, ClassManagementProps } from "../components/types/admin";



export function ClassManagement({ classes, onClassCreate, onClassUpdate, onClassDelete }: ClassManagementProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClass, setEditingClass] = useState<Class | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClasses = classes.filter(cls =>
    cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cls.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const classData = {
      name: formData.get('name') as string,
      subject: formData.get('subject') as string,
      grade: formData.get('grade') as string,
      schedule: formData.get('schedule') as string,
      students: parseInt(formData.get('students') as string),
      room: formData.get('room') as string,
    };

    if (editingClass) {
      onClassUpdate(editingClass.id, classData);
    } else {
      onClassCreate(classData);
    }

    setIsModalOpen(false);
    setEditingClass(null);
  };

  const openEditModal = (cls: Class) => {
    setEditingClass(cls);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingClass(null);
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h2 className="text-lg sm:text-xl font-bold text-foreground">ক্লাস ম্যানেজমেন্ট</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-school-primary hover:bg-school-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          নতুন ক্লাস
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            placeholder="ক্লাস, বিষয় বা শ্রেণী অনুসন্ধান..."
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

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredClasses.map((cls) => (
          <div
            key={cls.id}
            className="bg-background border border-border rounded-xl p-4 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-foreground text-lg">{cls.name}</h3>
                <p className="text-muted-foreground text-sm">{cls.subject}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openEditModal(cls)}
                  className="p-2 text-school-primary hover:bg-school-primary/10 rounded-lg transition-colors duration-200"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onClassDelete(cls.id)}
                  className="p-2 text-school-error hover:bg-school-error/10 rounded-lg transition-colors duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>শ্রেণী:</span>
                <span className="text-foreground font-medium">{cls.grade}</span>
              </div>
              <div className="flex justify-between">
                <span>সময়:</span>
                <span className="text-foreground font-medium">{cls.schedule}</span>
              </div>
              <div className="flex justify-between">
                <span>ছাত্র:</span>
                <span className="text-foreground font-medium">{cls.students} জন</span>
              </div>
              <div className="flex justify-between">
                <span>রুম:</span>
                <span className="text-foreground font-medium">{cls.room}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-2xl border border-border p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-foreground mb-4">
              {editingClass ? 'ক্লাস আপডেট করুন' : 'নতুন ক্লাস তৈরি করুন'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">ক্লাস নাম</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={editingClass?.name}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">বিষয়</label>
                <select
                  name="subject"
                  defaultValue={editingClass?.subject}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                >
                  <option value="">বিষয় নির্বাচন করুন</option>
                  <option value="গণিত">গণিত</option>
                  <option value="বিজ্ঞান">বিজ্ঞান</option>
                  <option value="বাংলা">বাংলা</option>
                  <option value="ইংরেজি">ইংরেজি</option>
                  <option value="সমাজ বিজ্ঞান">সমাজ বিজ্ঞান</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">শ্রেণী</label>
                <select
                  name="grade"
                  defaultValue={editingClass?.grade}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                >
                  <option value="">শ্রেণী নির্বাচন করুন</option>
                  <option value="প্রথম">প্রথম</option>
                  <option value="দ্বিতীয়">দ্বিতীয়</option>
                  <option value="তৃতীয়">তৃতীয়</option>
                  <option value="চতুর্থ">চতুর্থ</option>
                  <option value="পঞ্চম">পঞ্চম</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">সময়সূচী</label>
                <input
                  type="text"
                  name="schedule"
                  defaultValue={editingClass?.schedule}
                  placeholder="সোমবার ৯:০০ - ৯:৪৫"
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">ছাত্র সংখ্যা</label>
                <input
                  type="number"
                  name="students"
                  defaultValue={editingClass?.students}
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">রুম নম্বর</label>
                <input
                  type="text"
                  name="room"
                  defaultValue={editingClass?.room}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-school-primary"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-school-primary hover:bg-school-primary/90 text-white py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  {editingClass ? 'আপডেট করুন' : 'তৈরি করুন'}
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