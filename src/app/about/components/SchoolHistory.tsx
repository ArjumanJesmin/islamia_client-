import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const SchoolHistory = () => {
  return (
    <section className="mb-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-school-primary">
            ইতিহাস ও প্রতিষ্ঠা
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            বাংলাদেশ ১৯৭২ সালে প্রতিষ্ঠিত ইসলামিয়া সরকারি প্রাথমিক বিদ্যালয়
            সাতক্ষীরা জেলার একটি অন্যতম শিক্ষাপ্রতিষ্ঠান। প্রায় চার দশক ধরে
            আমরা মানসম্মত শিক্ষা প্রদান করে আসছি।
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-school-primary/10 rounded-lg">
              <div className="text-2xl font-bold text-school-primary">২০০+</div>
              <div className="text-sm text-muted-foreground">
                বর্তমান শিক্ষার্থী
              </div>
            </div>
            <div className="text-center p-4 bg-school-secondary/10 rounded-lg">
              <div className="text-2xl font-bold text-school-secondary">
                ১৫+
              </div>
              <div className="text-sm text-muted-foreground">অভিজ্ঞ শিক্ষক</div>
            </div>
            <div className="text-center p-4 bg-school-accent/10 rounded-lg">
              <div className="text-2xl font-bold text-school-accent">৩৮+</div>
              <div className="text-sm text-muted-foreground">
                বছরের অভিজ্ঞতা
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SchoolHistory;
