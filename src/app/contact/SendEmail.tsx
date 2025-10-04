"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, Send, User } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SendEmail = () => {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("বার্তা পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
    return (
         <div className="lg:col-span-3">
            <Card className="border-0 shadow-2xl rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden h-full">
              <div className="bg-gradient-to-r from-school-primary to-school-secondary h-2 w-full"></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl text-gray-900 dark:text-white flex items-center gap-3">
                  <div className="p-2 bg-school-primary/10 rounded-2xl">
                    <Send className="w-6 h-6 text-school-primary" />
                  </div>
                  বার্তা পাঠান
                </CardTitle>
                <p className="text-muted-foreground">
                  আমাদের সাথে সরাসরি যোগাযোগ করুন
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="name"
                        className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        আপনার নাম *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="আপনার পূর্ণ নাম"
                          required
                          className="pl-10 py-6 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-school-primary transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        ইমেইল ঠিকানা *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="islamiagps@gmail.com"
                          required
                          className="pl-10 py-6 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-school-primary transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        ফোন নম্বর
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+880 1XXX-XXXXXX"
                          className="pl-10 py-6 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-school-primary transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="subject"
                        className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        বিষয় *
                      </Label>
                      <div className="relative">
                        <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="বার্তার বিষয়"
                          required
                          className="pl-10 py-6 rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-school-primary transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      বার্তা *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="আপনার বার্তা এখানে লিখুন..."
                      rows={8}
                      required
                      className="rounded-xl border-2 border-gray-200 dark:border-gray-600 focus:border-school-primary transition-all duration-300 resize-none py-4"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-school-primary to-school-secondary hover:from-school-primary/90 hover:to-school-secondary/90 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                  >
                    <Send className="w-5 h-5 mr-3" />
                    বার্তা পাঠান
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
    );
};

export default SendEmail;