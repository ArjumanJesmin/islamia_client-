  export interface Class {
  id: string;
  name: string;
  subject: string;
  grade: string;
  teacherId: string;
  schedule: string;
  students: number;
  room: string;
  status: 'active' | 'inactive';
}

  export interface ClassManagementProps {
  classes: Class[];
  onClassCreate: (classData: Omit<Class, "id">) => void;
  onClassUpdate: (id: string, classData: Omit<Class, "id">) => void;
  onClassDelete: (id: string) => void;
  onClassEdit: (classItem: Class) => void; // Add this line
}
  export interface ClassFormData {
  name: string;
  subject: string;
  grade: string;
  teacherId: string;
  schedule: string;
  students: string; 
  room: string;
  status: string;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;        
  phone: string;        
  joinDate: string;     
  status: "active" | "inactive"; 
  classes?: string[];   
}

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  grade: string;
  rollNumber: string;
  parentName: string;
  parentPhone: string;
  address: string;
  status: 'active' | 'inactive';
}
export interface Class {
  id: string;
  name: string;
  subject: string;
  grade: string;
  schedule: string;
  students: number;
  room: string;
}

export interface ClassManagementProps {
  classes: Class[];
  onClassCreate: (classData: Omit<Class, 'id'>) => void;
  onClassUpdate: (id: string, classData: Omit<Class, 'id'>) => void;
  onClassDelete: (id: string) => void;
}
export interface StudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (studentData: Omit<Student, 'id'>) => void;
  student?: Student | null;
  title: string;
}

export interface TeacherManagementProps {
  teachers: Teacher[];
  onTeacherCreate: (teacherData: Omit<Teacher, 'id'>) => void;
  onTeacherUpdate: (id: string, teacherData: Omit<Teacher, 'id'>) => void;
  onTeacherDelete: (id: string) => void;
}

