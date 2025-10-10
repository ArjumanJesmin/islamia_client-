import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Facilities = () => {
  return (
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
  );
};

export default Facilities;
