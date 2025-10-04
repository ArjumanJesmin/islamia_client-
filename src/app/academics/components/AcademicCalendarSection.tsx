import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

// Academic Calendar Component

type EventData = {
  text: string;
  date: string;
};

type TermData = {
  title: string;
  gradient: string;
  textColor: string;
  dotColor: string;
  events: EventData[];
};

export function AcademicCalendarSection() {
  const academicTerms: TermData[] = [
    {
      title: "প্রথম প্রান্তিক মূল্যায়ণ",
      gradient: "from-school-primary to-school-secondary",
      textColor: "text-school-primary dark:text-school-secondary",
      dotColor: "bg-school-primary",
      events: [
        { text: "ক্লাস শুরু", date: "১লা জানুয়ারি" },
        { text: "প্রথম প্রান্তিক পরীক্ষা", date: "১৫-২০ মার্চ" },
        { text: "ফলাফল প্রকাশ", date: "৩১শে মার্চ" },
        { text: "প্রথম প্রান্তিক ছুটি", date: "১লা এপ্রিল - ৭ই এপ্রিল" },
        { text: "মিড টার্ম প্রজেক্ট জমা", date: "১০ই মার্চ" },
      ],
    },
    {
      title: "দ্বিতীয় প্রান্তিক মূল্যায়ণ",
      gradient: "from-school-secondary to-school-primary",
      textColor: "text-school-secondary dark:text-school-primary",
      dotColor: "bg-school-secondary",
      events: [
        { text: "ক্লাস পুনরারম্ভ", date: "৮ই এপ্রিল" },
        { text: "দ্বিতীয় প্রান্তিক পরীক্ষা", date: "১৫-২০ সেপ্টেম্বর" },
        { text: "ফলাফল প্রকাশ", date: "৩০শে সেপ্টেম্বর" },
        { text: " ছুটি", date: "১লা অক্টোবর - ৭ই অক্টোবর" },
        { text: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান", date: "২৫শে সেপ্টেম্বর" },
      ],
    },
    {
      title: "তৃতীয় প্রান্তিক মূল্যায়ণ",
      gradient: "from-purple-500 to-pink-500",
      textColor: "text-purple-600 dark:text-purple-400",
      dotColor: "bg-purple-500",
      events: [
        { text: "ক্লাস পুনরারম্ভ", date: "৮ই অক্টোবর" },
        { text: "বার্ষিক পরীক্ষা", date: "১৫-২০ নভেম্বর" },
        { text: "ফলাফল প্রকাশ", date: "৩০শে নভেম্বর" },
        { text: "বার্ষিক পুরস্কার বিতরণী", date: "৫ই ডিসেম্বর" },
        { text: "বার্ষিক ছুটি শুরু", date: "১৫ই ডিসেম্বর" },
      ],
    },
  ];

  return (
    <section className="mb-20">
      <Card className="border-0 rounded-3xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 shadow-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-school-primary/10 to-school-secondary/10 dark:from-school-primary/20 dark:to-school-secondary/20 py-12">
          <CardTitle className="text-3xl text-school-primary dark:text-school-secondary flex items-center gap-4 justify-center">
            <div className="p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <Calendar className="h-8 w-8" />
            </div>
            একাডেমিক ক্যালেন্ডার ২০২৫
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-8 pb-12 px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {academicTerms.map((term, index) => (
              <div key={index} className="group">
                <div
                  className={`bg-gradient-to-r ${term.gradient} text-white p-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-1">
                    <h4
                      className={`font-bold text-xl ${term.textColor} px-4 py-4 rounded-lg text-center border-2 border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-600 transition-all duration-300`}
                    >
                      {term.title}
                    </h4>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {term.events.map((event, eventIndex) => (
                    <li
                      key={eventIndex}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/item"
                    >
                      <div
                        className={`flex-shrink-0 w-3 h-3 ${term.dotColor} rounded-full group-hover/item:scale-150 transition-transform duration-300`}
                      ></div>
                      <span className="text-gray-700 dark:text-gray-300 flex-1 text-sm font-medium group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                        {event.text}
                      </span>
                      <strong
                        className={`text-lg font-bold ${term.textColor} group-hover/item:scale-110 transition-transform duration-300`}
                      >
                        {event.date}
                      </strong>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${term.gradient} transition-all duration-1000 ease-out`}
                    style={{ width: `${(index + 1) * 33.33}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
              📊 বার্ষিক শিক্ষাক্রম সারাংশ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-school-primary dark:text-school-secondary">
                  ৩
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  প্রান্তিক মূল্যায়ণ
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-school-primary dark:text-school-secondary">
                  ১৮০+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  শিক্ষাদান দিন
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-school-primary dark:text-school-secondary">
                  ৬
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  সাংস্কৃতি
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-school-primary dark:text-school-secondary">
                  ৪
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  ছুটির মেয়াদ
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
