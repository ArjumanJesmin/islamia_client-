import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Academics() {
  const classes = [
    {
      grade: "প্রথম শ্রেণী",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ"],
      age: "৬-৭ বছর",
      seats: 40
    },
    {
      grade: "দ্বিতীয় শ্রেণী", 
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "৭-৮ বছর",
      seats: 40
    },
    {
      grade: "তৃতীয় শ্রেণী",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "৮-৯ বছর",
      seats: 35
    },
    {
      grade: "চতুর্থ শ্রেণী",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "৯-১০ বছর",
      seats: 35
    },
    {
      grade: "পঞ্চম শ্রেণী",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সমাজ", "ধর্ম"],
      age: "১০-১১ বছর",
      seats: 35
    }
  ]

  return (
    <div className="min-h-screen pt-8">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            একাডেমিক তথ্য
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            আমাদের শিক্ষা কার্যক্রম, শ্রেণীভিত্তিক পাঠ্যসূচি এবং একাডেমিক ক্যালেন্ডার
          </p>
        </div>

        {/* Class Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">শ্রেণীভিত্তিক তথ্য</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((classInfo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-school-primary">{classInfo.grade}</CardTitle>
                  <p className="text-sm text-muted-foreground">বয়স: {classInfo.age}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-foreground">বিষয়সমূহ:</h4>
                    <div className="flex flex-wrap gap-2">
                      {classInfo.subjects.map((subject, idx) => (
                        <span key={idx} className="bg-school-primary/10 text-school-primary px-2 py-1 rounded text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>সিট সংখ্যা: {classInfo.seats}</span>
                    <Button asChild size="sm" variant="outline">
                      <Link href="/contact">ভর্তি তথ্য</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Calendar */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-school-primary">📅 একাডেমিক ক্যালেন্ডার ২০২৪</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-foreground">প্রথম সাময়িক</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• ক্লাস শুরু: ১লা জানুয়ারি</li>
                    <li>• প্রথম মূল্যায়ন: ১৫-২০ মার্চ</li>
                    <li>• ফলাফল: ৩১শে মার্চ</li>
                    <li>• ছুটি: ১লা এপ্রিল - ৭ই এপ্রিল</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-foreground">দ্বিতীয় সাময়িক</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• ক্লাস শুরু: ৮ই এপ্রিল</li>
                    <li>• বার্ষিক পরীক্ষা: ১৫-২০ নভেম্বর</li>
                    <li>• ফলাফল: ৩০শে নভেম্বর</li>
                    <li>• বার্ষিক ছুটি: ১লা ডিসেম্বর</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Curriculum */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-school-primary">📚 পাঠ্যক্রম</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">প্রধান বৈশিষ্ট্য:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
                    <li>• জাতীয় শিক্ষাক্রম অনুসরণ</li>
                    <li>• ডিজিটাল শিক্ষা পদ্ধতি</li>
                    <li>• ব্যবহারিক শিক্ষার উপর গুরুত্ব</li>
                    <li>• ক্রিয়েটিভ এক্টিভিটি</li>
                    <li>• নৈতিক শিক্ষা</li>
                    <li>• খেলাধুলা ও সাংস্কৃতিক活动</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-school-primary to-school-secondary text-white">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">আরও তথ্য প্রয়োজন?</h3>
              <p className="mb-6 opacity-90">
                আমাদের একাডেমিক বিষয়ে আরও বিস্তারিত জানতে সরাসরি যোগাযোগ করুন
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">যোগাযোগ করুন</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}