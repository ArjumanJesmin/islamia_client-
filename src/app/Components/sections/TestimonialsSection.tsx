"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { GradientText } from "../ui/gradient-text";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "আহমেদ হাসান",
      role: "শিক্ষার্থীর পিতা",
      image: "👨",
      content: "আমার সন্তান এই স্কুলে পড়ে অনেক উন্নতি করেছে। শিক্ষকদের আন্তরিকতা এবং আধুনিক শিক্ষা পদ্ধতি সত্যিই প্রশংসনীয়।",
      rating: 5
    },
    {
      name: "ফাতেমা বেগম",
      role: "শিক্ষার্থীর মাতা",
      image: "👩",
      content: "স্কুলের পরিবেশ খুবই সুন্দর এবং শিশুবান্ধব। আমার মেয়ে প্রতিদিন আনন্দ নিয়ে স্কুলে যায়।",
      rating: 5
    },
    {
      name: "ড. রহিমুল ইসলাম",
      role: "শিক্ষাবিদ",
      image: "👨‍🏫",
      content: "ইসলামিয়া স্কুলের শিক্ষা পদ্ধতি এবং মানসম্মত শিক্ষা প্রদান বাংলাদেশের শিক্ষা ব্যবস্থার জন্য একটি আদর্শ।",
      rating: 5
    },
    {
      name: "সাদিয়া ইসলাম",
      role: "প্রাক্তন শিক্ষার্থী",
      image: "👧",
      content: "এই স্কুলে পড়ার সময়টা আমার জীবনের সেরা সময়। শিক্ষকরা শুধু পড়াতেন না, জীবন গড়তে শিখিয়েছেন।",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            আমাদের সম্পর্কে{" "}
            <GradientText variant="primary">
              অভিভাবকদের মতামত
            </GradientText>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            আমাদের শিক্ষা ব্যবস্থা সম্পর্কে অভিভাবক ও শিক্ষার্থীদের মূল্যবান মতামত
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl dark:hover:shadow-purple-900/20 transition-all duration-300 group border border-gray-100 dark:border-gray-700">
                <CardContent className="p-8">
                  <Quote className="w-12 h-12 text-purple-200 dark:text-purple-400 mb-4 transform group-hover:scale-110 transition-transform" />
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-full flex items-center justify-center text-white text-xl mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}