import { GradientText } from "@/app/Components/ui/gradient-text";
import { Card, CardContent, CardHeader} from "@/components/ui/card";

import {
  BookOpen,
  GraduationCap,
  Users,
} from "lucide-react";
const Philosophy = () => {
  return (
    <section className="mb-16">
      <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-50/50 to-green-50/50 dark:from-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-school-primary/10 to-school-secondary/10 pb-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-school-primary to-school-secondary rounded-full flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <GradientText
                variant="primary"
                size="2xl"
                weight="bold"
                align="left"
                responsive={false}
              >
                📚 আমাদের শিক্ষাদর্শন
              </GradientText>
              <p className="text-muted-foreground text-lg mt-1">
                আধুনিক শিক্ষা পদ্ধতি ও ঐতিহ্যবাহী মূল্যবোধের সমন্বয়ে গড়ে উঠেছে
                আমাদের শিক্ষা ব্যবস্থা
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-school-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-school-primary" />
                </div>
                <div>
                  <GradientText
                    variant="primary"
                    size="lg"
                    weight="semibold"
                    align="left"
                    responsive={false}
                    className="mb-3"
                  >
                    শিক্ষার উদ্দেশ্য
                  </GradientText>
                  <ul className="space-y-3 text-muted-foreground">
                    {[
                      "শিক্ষার্থীদের সৃজনশীল চিন্তা শক্তি বিকাশ",
                      "নৈতিক ও আধ্যাত্মিক মূল্যবোধ সৃষ্টি",
                      "ডিজিটাল যুগের জন্য প্রস্তুতকরণ",
                      "সামাজিক দায়িত্ববোধ জাগরণ",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-school-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-school-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-school-secondary" />
                </div>
                <div>
                  <GradientText
                    variant="secondary"
                    size="lg"
                    weight="semibold"
                    align="left"
                    responsive={false}
                    className="mb-3"
                  >
                    শিক্ষা পদ্ধতি
                  </GradientText>
                  <ul className="space-y-3 text-muted-foreground">
                    {[
                      "ইন্টারেক্টিভ ক্লাসরুম",
                      "ব্যবহারিক শিক্ষা",
                      "ব্যক্তিগত মনোযোগ",
                      "নিয়মিত মূল্যায়ন",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-school-secondary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Philosophy;
