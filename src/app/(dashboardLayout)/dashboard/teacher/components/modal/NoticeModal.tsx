import { Modal } from '../../../../components/shared/Modal';
import { BaseForm } from '../../../../components/shared/form/BaseForm';

interface NoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (noticeData: {
    title: string;
    message: string;
    priority: 'low' | 'medium' | 'high';
  }) => void;
  title: string;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
}) => {
  const handleSubmit = (formData: any) => {
    onSubmit({
      title: formData.title,
      message: formData.message,
      priority: formData.priority,
    });
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            নোটিশের শিরোনাম
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="নোটিশের শিরোনাম লিখুন"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            নোটিশের বিবরণ
          </label>
          <textarea
            name="message"
            required
            placeholder="নোটিশের বিস্তারিত বিবরণ লিখুন"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            অগ্রাধিকার
          </label>
          <select 
            name="priority" 
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">সাধারণ</option>
            <option value="medium">মাধ্যমিক</option>
            <option value="high">জরুরী</option>
          </select>
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
            className="px-4 py-2 text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-md transition-colors"
          >
            নোটিশ প্রকাশ করুন
          </button>
        </div>
      </BaseForm>
    </Modal>
  );
};