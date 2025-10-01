import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen pt-8">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            আমাদের সম্পর্কে
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ইসলামিয়া সরকারি প্রাথমিক বিদ্যালয় - শিক্ষা, মূল্যবোধ ও উন্নত
            ভবিষ্যতের প্রতিশ্রুতি
          </p>
        </div>

        {/* School History */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-school-primary">
                ইতিহাস ও প্রতিষ্ঠা
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                বাংলাদেশ ১৯৭২ সালে প্রতিষ্ঠিত ইসলামিয়া সরকারি প্রাথমিক
                বিদ্যালয় সাতক্ষীরা জেলার একটি অন্যতম শিক্ষাপ্রতিষ্ঠান। প্রায়
                চার দশক ধরে আমরা মানসম্মত শিক্ষা প্রদান করে আসছি।
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-school-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-school-primary">
                    ২০০+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    বর্তমান শিক্ষার্থী
                  </div>
                </div>
                <div className="text-center p-4 bg-school-secondary/10 rounded-lg">
                  <div className="text-2xl font-bold text-school-secondary">
                    ১৫+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    অভিজ্ঞ শিক্ষক
                  </div>
                </div>
                <div className="text-center p-4 bg-school-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-school-accent">
                    ৩৮+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    বছরের অভিজ্ঞতা
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-school-primary">
                  📜 আমাদের লক্ষ্য
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• মানসম্মত প্রাথমিক শিক্ষা নিশ্চিতকরণ</li>
                  <li>• শিক্ষার্থীদের নৈতিক ও আধ্যাত্মিক মূল্যবোধ উন্নয়ন</li>
                  <li>• ডিজিটাল শিক্ষায় শিক্ষার্থীদের প্রস্তুতকরণ</li>
                  <li>• সামাজিক দায়িত্ববোধ সৃষ্টি</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-school-secondary">
                  👁️ আমাদের ভিশন
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  একটি আধুনিক, প্রগতিশীল ও মানসম্মত শিক্ষা প্রতিষ্ঠান হিসেবে
                  গড়ে উঠা যেখানে প্রতিটি শিশু তার পূর্ণ潜力 বিকাশের সুযোগ পাবে
                  এবং ভবিষ্যতের জন্য প্রস্তুত হবে।
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Facilities */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-school-primary">
                সুবিধাসমূহ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "ডিজিটাল ক্লাসরুম", icon: "💻" },
                  { name: "লাইব্রেরি", icon: "📚" },
                  { name: "খেলার মাঠ", icon: "⚽" },
                  { name: "বিজ্ঞান গবেষণাগার", icon: "🔬" },
                  { name: "কম্পিউটার ল্যাব", icon: "🖥️" },
                  { name: "স্বাস্থ্যকেন্দ্র", icon: "🏥" },
                ].map((facility, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 border border-border rounded-lg"
                  >
                    <span className="text-2xl">{facility.icon}</span>
                    <span className="font-medium text-foreground">
                      {facility.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-school-primary to-school-secondary rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              আপনার সন্তানকে ভর্তি করান
            </h2>
            <p className="mb-6 opacity-90">
              আমাদের প্রতিষ্ঠানে ভর্তি সম্পর্কিত তথ্যের জন্য যোগাযোগ করুন
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">যোগাযোগ করুন</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/20 text-white border-white"
              >
                <Link href="/academics">একাডেমিক তথ্য</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
