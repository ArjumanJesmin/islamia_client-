import { Modal } from '../../components/shared/Modal';
import { BaseForm } from '../../components/shared/form/BaseForm';
import { FormInput } from '../../components/shared/form/FormInput';
import { Class, Teacher } from '../../components/types/admin';
import { ClassFormData } from '../types/admin';



interface ClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (classData: Omit<Class, 'id'>) => void;
  classItem?: Class | null;
  teachers: Teacher[];
  title: string;
}

export const ClassModal: React.FC<ClassModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  classItem,
  teachers,
  title,
}) => {
  const handleSubmit = (formData: ClassFormData) => {

    const classData: Omit<Class, 'id'> = {
      name: formData.name,
      subject: formData.subject,
      grade: formData.grade,
      schedule: formData.schedule,
      students: parseInt(formData.students) || 0,
      room: formData.room,
    };
    
    onSubmit(classData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="md"
    >
      <BaseForm onSubmit={handleSubmit}>
        <FormInput
          label="ক্লাসের নাম"
          name="name"
          required
          placeholder="ক্লাসের নাম লিখুন"
          defaultValue={classItem?.name}
        />
        
        <FormInput
          label="বিষয়"
          name="subject"
          required
          placeholder="বিষয় লিখুন"
          defaultValue={classItem?.subject}
        />
        
        <FormInput
          label="শ্রেণী"
          name="grade"
          required
          placeholder="শ্রেণী লিখুন"
          defaultValue={classItem?.grade}
        />

        {/* Keep teacher selection for future use, but data won't be saved to Class */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            শিক্ষক (পরবর্তীতে সংযুক্ত হবে)
          </label>
          <select 
            name="teacherId" 
            defaultValue=""
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">শিক্ষক নির্বাচন করুন</option>
            {teachers.map(teacher => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name} - {teacher.subject}
              </option>
            ))}
          </select>
        </div>

        <FormInput
          label="শিডিউল"
          name="schedule"
          required
          placeholder="ক্লাসের সময়সূচী লিখুন"
          defaultValue={classItem?.schedule}
        />
        
        <FormInput
          label="ছাত্র সংখ্যা"
          name="students"
          type="number"
          required
          placeholder="ছাত্র সংখ্যা লিখুন"
          defaultValue={classItem?.students?.toString()}
        />
        
        <FormInput
          label="রুম নম্বর"
          name="room"
          required
          placeholder="রুম নম্বর লিখুন"
          defaultValue={classItem?.room}
        />

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            বাতিল
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
          >
            {classItem ? 'আপডেট' : 'তৈরি করুন'}
          </button>
        </div>
      </BaseForm>
    </Modal>
  );
};