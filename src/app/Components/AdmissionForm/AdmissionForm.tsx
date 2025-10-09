// components/AdmissionForm.tsx
"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  CalendarIcon,
  Upload,
  User,
  Phone,
  MapPin,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import { GradientText } from "../ui/gradient-text";
import { cn } from "@/lib/utils";

// Import the form components
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./form";



// Validation Schema
const admissionFormSchema = z.object({
  studentName: z.string().min(2, "ছাত্র/ছাত্রীর নাম কমপক্ষে ২ অক্ষর হতে হবে"),
  fatherName: z.string().min(2, "পিতার নাম কমপক্ষে ২ অক্ষর হতে হবে"),
  motherName: z.string().min(2, "মাতার নাম কমপক্ষে ২ অক্ষর হতে হবে"),
  dateOfBirth: z.date(),
  gender: z.string().min(1, "লিঙ্গ নির্বাচন করুন"),
  className: z.string().min(1, "ক্লাস নির্বাচন করুন"),
  address: z.string().min(10, "ঠিকানা কমপক্ষে ১০ অক্ষর হতে হবে"),
  phone: z.string()
    .min(11, "ফোন নম্বর কমপক্ষে ১১ ডিজিট হতে হবে")
    .max(11, "ফোন নম্বর সর্বোচ্চ ১১ ডিজিট হতে হবে")
    .regex(/^01[3-9]\d{8}$/, "সঠিক মোবাইল নম্বর দিন"),
  email: z.string().email("সঠিক ইমেইল দিন").optional().or(z.literal("")),
  birthCertificate: z.instanceof(File).optional(),
  photo: z.instanceof(File).optional(),
}).refine((data) => data.dateOfBirth instanceof Date && !isNaN(data.dateOfBirth.getTime()), {
  message: "জন্ম তারিখ নির্বাচন করুন",
  path: ["dateOfBirth"],
});

type AdmissionFormValues = z.infer<typeof admissionFormSchema>;

// Simple date formatter without date-fns
const formatDate = (date: Date): string => {
  return date.toLocaleDateString('bn-BD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function AdmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [birthCertificateFile, setBirthCertificateFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  const form = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
      studentName: "",
      fatherName: "",
      motherName: "",
      phone: "",
      email: "",
      address: "",
      gender: "",
      className: "",
    },
  });

  const onSubmit = async (data: AdmissionFormValues) => {
    setIsSubmitting(true);
    try {
      console.log("Admission Form Data:", data);
      // API call will go here
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert("আপনার ভর্তি ফর্ম সফলভাবে জমা হয়েছে!");
      form.reset();
      setBirthCertificateFile(null);
      setPhotoFile(null);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("দুঃখিত, ফর্ম জমা দেওয়া যায়নি। আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBirthCertificateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setBirthCertificateFile(file);
      form.setValue("birthCertificate", file);
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      form.setValue("photo", file);
    }
  };

  const classOptions = [
    { value: "FIRST", label: "প্রথম শ্রেণী", description: "৬-৭ বছর" },
    { value: "SECOND", label: "দ্বিতীয় শ্রেণী", description: "৭-৮ বছর" },
    { value: "THIRD", label: "তৃতীয় শ্রেণী", description: "৮-৯ বছর" },
    { value: "FOURTH", label: "চতুর্থ শ্রেণী", description: "৯-১০ বছর" },
    { value: "FIFTH", label: "পঞ্চম শ্রেণী", description: "১০-১১ বছর" },
  ];

  const genderOptions = [
    { value: "MALE", label: "ছেলে" },
    { value: "FEMALE", label: "মেয়ে" },
    { value: "OTHER", label: "অন্যান্য" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-green-900/20 py-8 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <GradientText
            variant="primary"
            size="4xl"
            weight="bold"
            align="center"
            responsive
            withLine
            className="mb-6"
          >
            ভর্তি ফর্ম
          </GradientText>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ইসলামিয়া সরকারি প্রাথমিক বিদ্যালয়ে ভর্তির জন্য অনলাইন আবেদন ফর্ম
          </p>
          <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
              📅 ভর্তি কার্যক্রম: ১লা জানুয়ারি - ২৮শে ফেব্রুয়ারি
            </p>
          </div>
        </div>

        <Card className="border-0 shadow-2xl rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-school-primary/10 to-school-secondary/10 text-center py-8">
            <CardTitle className="text-2xl">
              <GradientText variant="secondary" size="2xl" weight="bold" align="center">
                অনলাইন ভর্তি আবেদন
              </GradientText>
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              সকল তথ্য সঠিকভাবে প্রদান করুন। * চিহ্নিত ফিল্ডগুলি আবশ্যক।
            </p>
          </CardHeader>

          <CardContent className="p-6 md:p-8">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Student Information Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-5 w-5 text-school-primary" />
                  <GradientText variant="primary" size="xl" weight="semibold">
                    ছাত্র/ছাত্রীর তথ্য
                  </GradientText>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Student Name */}
                  <Controller
                    name="studentName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          <span>ছাত্র/ছাত্রীর নাম *</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="ছাত্র/ছাত্রীর পূর্ণ নাম লিখুন" 
                            {...field} 
                            className="h-12"
                          />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Date of Birth */}
                  <Controller
                    name="dateOfBirth"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>জন্ম তারিখ *</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "h-12 pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  formatDate(field.value)
                                ) : (
                                  <span>জন্ম তারিখ নির্বাচন করুন</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                              className="rounded-md border"
                            />
                          </PopoverContent>
                        </Popover>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Father's Name */}
                  <Controller
                    name="fatherName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>পিতার নাম *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="পিতার পূর্ণ নাম লিখুন" 
                            {...field} 
                            className="h-12"
                          />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Mother's Name */}
                  <Controller
                    name="motherName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>মাতার নাম *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="মাতার পূর্ণ নাম লিখুন" 
                            {...field} 
                            className="h-12"
                          />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Gender */}
                  <Controller
                    name="gender"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>লিঙ্গ *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="লিঙ্গ নির্বাচন করুন" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {genderOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* Class */}
                  <Controller
                    name="className"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>ভর্তি ক্লাস *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="ক্লাস নির্বাচন করুন" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {classOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                <div className="flex flex-col">
                                  <span>{option.label}</span>
                                  <span className="text-xs text-muted-foreground">
                                    {option.description}
                                  </span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="space-y-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="h-5 w-5 text-school-primary" />
                  <GradientText variant="secondary" size="xl" weight="semibold">
                    যোগাযোগের তথ্য
                  </GradientText>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Controller
                    name="phone"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>মোবাইল নম্বর *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="01XXXXXXXXX" 
                            {...field} 
                            className="h-12"
                          />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />

                  <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormLabel>ইমেইল (ঐচ্ছিক)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="email@example.com" 
                            {...field} 
                            className="h-12"
                            type="email"
                          />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />

                  <Controller
                    name="address"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>ঠিকানা *</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="পূর্ণ ঠিকানা লিখুন (গ্রাম, ডাকঘর, থানা, জেলা)" 
                            {...field} 
                            className="min-h-[100px] resize-none"
                          />
                        </FormControl>
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Documents Section */}
              <div className="space-y-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-school-primary" />
                  <GradientText variant="primary" size="xl" weight="semibold">
                    প্রয়োজনীয় ডকুমেন্ট
                  </GradientText>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <FormLabel>জন্ম নিবন্ধন সনদ *</FormLabel>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-school-primary transition-colors">
                      <Input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleBirthCertificateChange}
                        className="hidden"
                        id="birthCertificate"
                      />
                      <label
                        htmlFor="birthCertificate"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {birthCertificateFile ? birthCertificateFile.name : "ফাইল আপলোড করুন"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          PDF, JPG, PNG (সর্বোচ্চ ২MB)
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <FormLabel>ছাত্র/ছাত্রীর ছবি *</FormLabel>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-school-primary transition-colors">
                      <Input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={handlePhotoChange}
                        className="hidden"
                        id="photo"
                      />
                      <label
                        htmlFor="photo"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {photoFile ? photoFile.name : "ছবি আপলোড করুন"}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          JPG, PNG (সর্বোচ্চ ১MB)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center sm:text-left">
                  ফর্ম জমা দেওয়ার মাধ্যমে আপনি আমাদের{" "}
                  <a href="/terms" className="text-school-primary hover:underline">
                    শর্তাবলী
                  </a>{" "}
                  মেনে নিচ্ছেন
                </p>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-school-primary to-school-secondary hover:from-school-primary/90 hover:to-school-secondary/90 text-white font-semibold px-8 py-3 text-lg min-w-[200px]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      জমা হচ্ছে...
                    </>
                  ) : (
                    "ফর্ম জমা দিন"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Card className="border-0 bg-blue-50 dark:bg-blue-900/20">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600 mb-2">📞</div>
              <h3 className="font-semibold mb-2">সাহায্য প্রয়োজন?</h3>
              <p className="text-sm text-muted-foreground">+৮৮০ ১২৩৪-৫৬৭৮৯</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-green-50 dark:bg-green-900/20">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600 mb-2">🕒</div>
              <h3 className="font-semibold mb-2">ভর্তির সময়</h3>
              <p className="text-sm text-muted-foreground">১লা জানুয়ারি - ২৮শে ফেব্রুয়ারি</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-amber-50 dark:bg-amber-900/20">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-amber-600 mb-2">📝</div>
              <h3 className="font-semibold mb-2">প্রয়োজনীয় কাগজ</h3>
              <p className="text-sm text-muted-foreground">জন্ম সনদ ও ২ কপি ছবি</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
