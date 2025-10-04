import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import React from 'react';

const CurriculumSection = () => {
    return (
        <section className="mb-20">
      <Card className="border-0 rounded-3xl bg-gradient-to-br from-white to-emerald-50 dark:from-gray-800 dark:to-emerald-900/20 shadow-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 dark:from-emerald-500/20 dark:to-green-500/20 py-12">
          <CardTitle className="text-3xl text-emerald-600 dark:text-emerald-400 flex items-center gap-4 justify-center">
            <div className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <BookOpen className="h-8 w-8" />
            </div>
            পাঠ্যক্রম ও শিক্ষা পদ্ধতি
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-8 pb-12 px-8">
          <div className="text-center mb-12">
            <h4 className="font-semibold text-2xl mb-4 text-foreground dark:text-gray-200">প্রধান বৈশিষ্ট্য:</h4>
            <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
              আধুনিক ও প্রগতিশীল শিক্ষা পদ্ধতির মাধ্যমে শিক্ষার্থীদের সর্বোত্তম বিকাশ নিশ্চিতকরণ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "জাতীয় শিক্ষাক্রম", 
                desc: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড কর্তৃক প্রণীত সিলেবাস অনুসরণ",
                icon: "📘",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                title: "ডিজিটাল শিক্ষা", 
                desc: "আধুনিক প্রযুক্তি ও ডিজিটাল উপকরণের মাধ্যমে ইন্টারেক্টিভ শিক্ষা",
                icon: "💻",
                color: "from-purple-500 to-pink-500"
              },
              { 
                title: "ব্যবহারিক শিক্ষা", 
                desc: "তত্ত্বীয় জ্ঞানের পাশাপাশি ব্যবহারিক ও প্রায়োগিক শিক্ষার উপর গুরুত্ব",
                icon: "🔬",
                color: "from-green-500 to-emerald-500"
              },
              { 
                title: "সৃজনশীল活动", 
                desc: "নিয়মিত সৃজনশীল活动 ও প্রকল্প ভিত্তিক শিক্ষার ব্যবস্থা",
                icon: "🎨",
                color: "from-orange-500 to-amber-500"
              },
              { 
                title: "নৈতিক শিক্ষা", 
                desc: "মানবিক মূল্যবোধ ও নৈতিক শিক্ষার মাধ্যমে চরিত্র গঠন",
                icon: "⭐",
                color: "from-red-500 to-rose-500"
              },
              { 
                title: "সাংস্কৃতিক活动", 
                desc: "খেলাধুলা, সাংস্কৃতিক活动 ও সহশিক্ষা কার্যক্রম",
                icon: "⚽",
                color: "from-indigo-500 to-blue-500"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 dark:border-gray-700"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                  {feature.icon}
                </div>
                <h5 className="font-bold text-gray-900 dark:text-white mb-3 text-lg group-hover:text-school-primary transition-colors">
                  {feature.title}
                </h5>
                <p className="text-sm text-muted-foreground dark:text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
    );
};

export default CurriculumSection;