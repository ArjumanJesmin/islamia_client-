import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MissionVission = () => {
  return (
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
              একটি আধুনিক, প্রগতিশীল ও মানসম্মত শিক্ষা প্রতিষ্ঠান হিসেবে গড়ে
              উঠা যেখানে প্রতিটি শিশু তার পূর্ণ বিকাশের সুযোগ পাবে এবং ভবিষ্যতের
              জন্য প্রস্তুত হবে।
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MissionVission;
