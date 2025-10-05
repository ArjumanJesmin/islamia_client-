import React from 'react';
import { Modal } from '../../components/shared/Modal';
import { BaseForm } from '../../components/shared/form/BaseForm';
import { FormInput } from '../../components/shared/form/FormInput';
import { Teacher } from '../../components/types/admin'
interface TeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (teacherData: Omit<Teacher, 'id'>) => void;
  teacher?: Teacher | null;
  title: string;
}

export const TeacherModal: React.FC<TeacherModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  teacher,
  title,
}) => {
  const handleSubmit = (data: any) => {
    onSubmit({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      joinDate: data.joinDate || new Date().toISOString().split('T')[0],
      status: data.status || 'active',
      classes: teacher?.classes || []
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="lg"
    >
      <BaseForm onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="নাম"
            name="name"
            required
            placeholder="শিক্ষকের নাম লিখুন"
            defaultValue={teacher?.name}
          />
          
          <FormInput
            label="ইমেইল"
            name="email"
            type="email"
            required
            placeholder="ইমেইল ঠিকানা লিখুন"
            defaultValue={teacher?.email}
          />
          
          <FormInput
            label="ফোন নম্বর"
            name="phone"
            required
            placeholder="ফোন নম্বর লিখুন"
            defaultValue={teacher?.phone}
          />
          
          <FormInput
            label="বিষয়"
            name="subject"
            required
            placeholder="শিক্ষকের বিষয় লিখুন"
            defaultValue={teacher?.subject}
          />
          
          <FormInput
            label="যুক্ত হওয়ার তারিখ"
            name="joinDate"
            type="date"
            required
            defaultValue={teacher?.joinDate}
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              স্ট্যাটাস
            </label>
            <select 
              name="status" 
              defaultValue={teacher?.status || 'active'}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">সক্রিয়</option>
              <option value="inactive">নিষ্ক্রিয়</option>
            </select>
          </div>
        </div>

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
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors"
          >
            {teacher ? 'আপডেট' : 'তৈরি করুন'}
          </button>
        </div>
      </BaseForm>
    </Modal>
  );
};