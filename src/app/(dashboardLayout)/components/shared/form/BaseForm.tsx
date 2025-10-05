import React from 'react';

interface BaseFormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
  className?: string;
}

export const BaseForm: React.FC<BaseFormProps> = ({
  onSubmit,
  children,
  className = '',
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {children}
    </form>
  );
};