"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GradientText } from "../ui/gradient-text";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "সকল ছবি" },
    { id: "campus", name: "ক্যাম্পাস" },
    { id: "events", name: "অনুষ্ঠান" },
    { id: "sports", name: "খেলাধুলা" },
    { id: "classroom", name: "ক্লাসরুম" },
  ];

  const galleryItems = [
    { id: 1, category: "campus", image: "🏫", title: "মূল ভবন" },
    { id: 2, category: "campus", image: "🌳", title: "খেলার মাঠ" },
    { id: 3, category: "events", image: "🎭", title: "সাংস্কৃতিক অনুষ্ঠান" },
    {
      id: 4,
      category: "events",
      image: "🎓",
      title: "প্রাক্তন শিক্ষার্থী মিলনমেলা",
    },
    {
      id: 5,
      category: "sports",
      image: "⚽",
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    },
    { id: 6, category: "sports", image: "🏆", title: "পুরস্কার বিতরণী" },
    { id: 7, category: "classroom", image: "💻", title: "ডিজিটাল ক্লাসরুম" },
    { id: 8, category: "classroom", image: "📚", title: "লাইব্রেরি" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            আমাদের <GradientText variant="primary">গ্যালারি</GradientText>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            স্কুল জীবনের স্মরণীয় মুহূর্ত এবং আমাদের ক্যাম্পাসের সৌন্দর্য
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg dark:from-green-600 dark:to-blue-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 dark:border-gray-700">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
