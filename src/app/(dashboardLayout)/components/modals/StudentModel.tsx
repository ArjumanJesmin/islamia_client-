import React from 'react';
import { Modal } from '../../components/shared/Modal';
import { BaseForm } from '../..//components/shared/form/BaseForm';
import { FormInput } from '../../components/shared/form/FormInput';
import { Student, StudentModalProps } from '../../components/types/admin';



export const StudentModal: React.FC<StudentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  student,
  title,
}) => {
  const handleSubmit = (data: any) => {
    onSubmit({
      name: data.name,
      email: data.email,
      phone: data.phone,
      grade: data.grade,
      rollNumber: data.rollNumber,
      parentName: data.parentName,
      parentPhone: data.parentPhone,
      address: data.address,
      status: data.status || 'active'
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
            label="ছাত্রের নাম"
            name="name"
            required
            placeholder="ছাত্রের নাম লিখুন"
            defaultValue={student?.name}
          />
          
          <FormInput
            label="ইমেইল"
            name="email"
            type="email"
            placeholder="ইমেইল ঠিকানা লিখুন"
            defaultValue={student?.email}
          />
          
          <FormInput
            label="ফোন নম্বর"
            name="phone"
            placeholder="ফোন নম্বর লিখুন"
            defaultValue={student?.phone}
          />
          
          <FormInput
            label="শ্রেণী"
            name="grade"
            required
            placeholder="শ্রেণী লিখুন"
            defaultValue={student?.grade}
          />
          
          <FormInput
            label="রোল নম্বর"
            name="rollNumber"
            required
            placeholder="রোল নম্বর লিখুন"
            defaultValue={student?.rollNumber}
          />
          
          <FormInput
            label="অভিভাবকের নাম"
            name="parentName"
            required
            placeholder="অভিভাবকের নাম লিখুন"
            defaultValue={student?.parentName}
          />
          
          <FormInput
            label="অভিভাবকের ফোন"
            name="parentPhone"
            required
            placeholder="অভিভাবকের ফোন নম্বর লিখুন"
            defaultValue={student?.parentPhone}
          />
        </div>
        
        <FormInput
          label="ঠিকানা"
          name="address"
          placeholder="বিস্তারিত ঠিকানা লিখুন"
          defaultValue={student?.address}
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
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            {student ? 'আপডেট' : 'তৈরি করুন'}
          </button>
        </div>
      </BaseForm>
    </Modal>
  );
};