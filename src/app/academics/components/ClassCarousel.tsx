import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Target,
} from "lucide-react";
import Link from "next/link";

// Interfaces
interface ClassInfo {
  grade: string;
  subjects: string[];
  age: string;
  seats: number;
  color: string;
}

interface AcademicEvent {
  text: string;
  date: string;
}

interface TermData {
  title: string;
  gradient: string;
  textColor: string;
  dotColor: string;
  events: AcademicEvent[];
}

// Class Carousel Component
export function ClassCarousel({
  classes,
  activeIndex,
}: {
  classes: ClassInfo[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
}) {
  return (
    <section className="mb-20 p-2">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
          <Users className="h-8 w-8 text-school-primary" />
          শ্রেণীভিত্তিক তথ্য
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          প্রতিটি শ্রেণীর জন্য বিশেষায়িত শিক্ষা ব্যবস্থা এবং বিষয়ভিত্তিক
          শিক্ষাক্রম
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden px-4">
          <div
            className="flex transition-transform duration-700 ease-out gap-6"
            style={{ transform: `translateX(-${activeIndex * (100 / 5)}%)` }}
          >
            {classes.map((classInfo, index) => (
              <div key={index} className="flex-shrink-0 w-1/5">
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden min-h-[180px]"> {/* Reduced height */}
                  <div
                    className={`bg-gradient-to-r ${classInfo.color} h-2 w-full`} 
                  ></div>

                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"> {/* Adjusted top position */}
                    <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 text-gray-900 dark:text-white rounded-full p-2 shadow-2xl border-4 border-white dark:border-gray-900"> {/* Reduced padding */}
                      <div className="flex flex-col items-center justify-center w-12 h-12"> {/* Reduced circle size */}
                        <span className="text-sm font-bold text-school-primary dark:text-school-secondary"> {/* Reduced text size */}
                          {classInfo.grade}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pt-6 mt-2"> {/* Reduced padding and margin */}
                    <p className="text-xs text-muted-foreground dark:text-gray-400 text-center flex items-center justify-center gap-1"> {/* Reduced text size */}
                      <Target className="h-3 w-3" />
                      বয়স: {classInfo.age}
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col p-4"> {/* Reduced padding */}
                    <div className="mb-2 flex-1"> {/* Reduced margin */}
                      <h4 className="font-semibold mb-2 text-foreground dark:text-gray-200 text-xs flex items-center gap-1 justify-center"> {/* Reduced text size and margin */}
                        <BookOpen className="h-3 w-3 text-school-primary" /> {/* Reduced icon size */}
                        বিষয়সমূহ:
                      </h4>
                      <div className="space-y-1"> {/* Reduced spacing */}
                        {classInfo.subjects.slice(0, 3).map((subject, idx) => (
                          <span
                            key={idx}
                            className="block bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-white px-2 py-1 rounded-lg text-xs text-center font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105" 
                          >
                            {subject}
                          </span>
                        ))}
                        {classInfo.subjects.length > 3 && (
                          <span className="block bg-school-primary/10 text-school-primary dark:text-school-secondary px-2 py-1 rounded-lg text-xs text-center font-semibold"> 
                            + {classInfo.subjects.length - 3} আরও
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Added admission button */}
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700"> 
                      <Button asChild size="sm" className="w-full bg-gradient-to-r from-school-primary to-school-secondary hover:from-school-primary/90 hover:to-school-secondary/90 text-white font-semibold py-1 h-7 text-xs rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        <Link href="/contact">
                          ভর্তি তথ্য
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}