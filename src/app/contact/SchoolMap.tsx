import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientText } from "../Components/ui/gradient-text";
import { MapPin } from "lucide-react";
import React from "react";

const SchoolMap = () => {
  return (
    <section className="mb-16">
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-school-primary to-school-secondary h-2 w-full"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-school-primary/10 rounded-2xl">
                  <MapPin className="w-6 h-6 text-school-primary" />
                </div>
                <GradientText
                  variant="primary"
                  size="3xl"
                  weight="bold"
                  align="left"
                  responsive={false}
                >
                  আমাদের অবস্থান
                </GradientText>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
                {/* Map Placeholder with Beautiful Design */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-green-400/20"></div>
                <div className="relative z-10 text-center text-gray-700 dark:text-gray-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl mb-4">
                    <MapPin className="w-8 h-8 text-school-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    ইসয়ামিয়া সরকারি প্রাথমিক বিদ্যালয়
                  </h3>
                  <p className="text-lg mb-4">কলেজ রোড, সাতক্ষীরা সদর, সাতক্ষীরা</p>
                  <Button 
                    asChild 
                    className="bg-gradient-to-r from-school-primary to-school-secondary hover:from-school-primary/90 hover:to-school-secondary/90 text-white font-semibold rounded-xl px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href="https://maps.google.com/?q=ইসয়ামিয়া+সরকারি+প্রাথমিক+বিদ্যালয়,সাতক্ষীরা+সদর,সাতক্ষীরা"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      গুগল ম্যাপে দেখুন
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
  );
};

export default SchoolMap;