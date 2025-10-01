import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Teachers() {
  const teachers = [
    {
      name: "মোঃ আব্দুল করিম",
      position: "প্রধান শিক্ষক",
      qualification: "বিএড, এমএ (বাংলা)",
      experience: "২০ বছর",
      subject: "বাংলা",
      image: "/api/placeholder/200/200?text=AK"
    },
    {
      name: "মোসাঃ ফাতেমা বেগম",
      position: "সহকারী প্রধান শিক্ষক", 
      qualification: "বিএড, এমএ (ইংরেজি)",
      experience: "১৫ বছর",
      subject: "ইংরেজি",
      image: "/api/placeholder/200/200?text=FB"
    },
    {
      name: "মোঃ রফিকুল ইসলাম",
      position: "সিনিয়র শিক্ষক",
      qualification: "বিএসসি, বিএড",
      experience: "১২ বছর",
      subject: "গণিত",
      image: "/api/placeholder/200/200?text=RI"
    },
    {
      name: "মোসাঃ আয়েশা সিদ্দিকা",
      position: "সিনিয়র শিক্ষক",
      qualification: "বিএসসি, বিএড",
      experience: "১০ বছর", 
      subject: "বিজ্ঞান",
      image: "/api/placeholder/200/200?text=AS"
    },
    {
      name: "মোঃ জামাল উদ্দিন",
      position: "শিক্ষক",
      qualification: "বিএ, বিএড",
      experience: "৮ বছর",
      subject: "সমাজ ও ধর্ম",
      image: "/api/placeholder/200/200?text=JU"
    },
    {
      name: "মোসাঃ সেলিনা আক্তার",
      position: "শিক্ষক",
      qualification: "বিএ, বিএড", 
      experience: "৬ বছর",
      subject: "কম্পিউটার",
      image: "/api/placeholder/200/200?text=SA"
    }
  ]

  return (
    <div className="min-h-screen pt-8">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            আমাদের শিক্ষকবৃন্দ
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            অভিজ্ঞ, প্রশিক্ষিত ও নিবেদিতপ্রাণ শিক্ষকমণ্ডলী যারা শিক্ষার্থীদের ভবিষ্যত গড়তে প্রতিশ্রুতিবদ্ধ
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teachers.map((teacher, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-school-primary to-school-secondary rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {teacher.image.split('text=')[1]}
                </div>
                <CardTitle className="text-xl text-foreground">{teacher.name}</CardTitle>
                <p className="text-school-primary font-semibold">{teacher.position}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <span className="font-semibold text-foreground">বিষয়:</span> {teacher.subject}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-foreground">শিক্ষাগত যোগ্যতা:</span> {teacher.qualification}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-foreground">অভিজ্ঞতা:</span> {teacher.experience}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Teaching Philosophy */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-school-primary">📚 আমাদের শিক্ষাদর্শন</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-foreground">শিক্ষার উদ্দেশ্য</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• শিক্ষার্থীদের সৃজনশীল চিন্তা শক্তি বিকাশ</li>
                    <li>• নৈতিক ও আধ্যাত্মিক মূল্যবোধ সৃষ্টি</li>
                    <li>• ডিজিটাল যুগের জন্য প্রস্তুতকরণ</li>
                    <li>• সামাজিক দায়িত্ববোধ জাগরণ</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-foreground">শিক্ষা পদ্ধতি</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• ইন্টারেক্টিভ ক্লাসরুম</li>
                    <li>• ব্যবহারিক শিক্ষা</li>
                    <li>• ব্যক্তিগত মনোযোগ</li>
                    <li>• নিয়মিত মূল্যায়ন</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}