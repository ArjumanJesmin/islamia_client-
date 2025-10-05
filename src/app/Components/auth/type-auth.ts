// types/auth.ts
export interface AuthFormData {
  name?: string;
  email: string;
  password: string;
}



export type FormField = {
  name: keyof AuthFormData;
  label: string;
  type?: string;
  validation?: {
    required?: string;
    pattern?: { value: RegExp; message: string };
    minLength?: { value: number; message: string };
    validate?: (value: string | undefined) => string | boolean;
  };
};

export interface AuthFormProps {
  mode: 'signin' | 'signup';
  title: string;
  onSubmit: (data: AuthFormData) => void;
  onGoogleClick: () => void;
  fields: FormField[];
  isLoading?: boolean;
  googleLoading?: boolean;
}