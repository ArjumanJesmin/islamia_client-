"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("বার্তা পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen pt-8">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            যোগাযোগ করুন
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            আপনার যেকোনো প্রশ্ন বা মতামত আমাদের জানান। আমরা আপনার সাথে যোগাযোগ করতে পেরে আনন্দিত হব।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-school-primary">বার্তা পাঠান</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">আপনার নাম *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="আপনার পূর্ণ নাম"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ইমেইল ঠিকানা *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="islamiagps@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">ফোন নম্বর</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">বিষয় *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="বার্তার বিষয়"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">বার্তা *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="আপনার বার্তা এখানে লিখুন..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-school-primary hover:bg-school-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    বার্তা পাঠান
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-school-primary">যোগাযোগ তথ্য</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-school-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">ঠিকানা</h4>
                    <p className="text-muted-foreground text-sm">
                      কলেজ  রোড, সাতক্ষীরা সদর ,<br />
                      সাতক্ষীরা , বাংলাদেশ
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-school-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">ফোন</h4>
                    <a href="tel:+8801234567890" className="text-muted-foreground text-sm hover:text-school-primary">
                      +৮৮০ ১২৩৪-৫৬৭৮৯
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-school-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">ইমেইল</h4>
                    <a href="mailto:info@islamiaprimaryschool.edu.bd" className="text-muted-foreground text-sm hover:text-school-primary">
                      info@islamiaprimaryschool.edu.bd
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-school-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">কার্যকাল</h4>
                    <p className="text-muted-foreground text-sm">
                      রবি - বৃহস্পতি: সকাল ৯:০০ - বিকাল ৪:০০<br />
                      শুক্রবার: সকাল ৯:০০ - দুপুর ১২:৩০<br />
                      শনিবার: বন্ধ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-school-primary/10 border-school-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-school-primary">জরুরি যোগাযোগ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  জরুরি প্রয়োজনে সরাসরি প্রধান শিক্ষকের সাথে যোগাযোগ করুন
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">প্রধান শিক্ষক:</span>
                    <a href="tel:+8801712345678" className="text-school-primary hover:underline">
                      +৮৮০ ১৭১২-৩৪৫৬৭৮
                    </a>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">সহকারী প্রধান:</span>
                    <a href="tel:+8801812345678" className="text-school-primary hover:underline">
                      +৮৮০ ১৮১২-৩৪৫৬৭৮
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-school-primary">আমাদের অবস্থান</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-school-primary" />
                  <p className="text-lg">ইসরামিয়া সরকারি প্রাথমিক বিদ্যালয়</p>
                  <p className="text-sm">স্কুল রোড, ইসলামপুর, জামালপুর</p>
                  <Button asChild variant="outline" className="mt-4">
                    <a 
                      href="https://maps.google.com/?q=ইসরামিয়া+সরকারি+প্রাথমিক+বিদ্যালয়,জামালপুর" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      গুগল ম্যাপে দেখুন
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}