"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FeatureCard } from "./feature-card";

// Import test.json data directly
import testData from '../../../../test.json';

export function FeaturesSection() {
  const { features, stats, schoolInfo } = testData;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            আমাদের{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              বিশেষত্ব
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {schoolInfo.motto}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              isLoading={false}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-blue-200 dark:border-blue-800 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              আমাদের প্রতিশ্রুতি
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              আমরা প্রতিটি শিক্ষার্থীর সাফল্যের জন্য প্রতিশ্রুতিবদ্ধ। আধুনিক শিক্ষা পদ্ধতি, 
              অভিজ্ঞ শিক্ষক এবং উন্নত সুযোগ-সুবিধার মাধ্যমে আমরা শিক্ষার্থীদের সর্বোচ্চ সম্ভাবনা 
              বিকাশে সাহায্য করি।
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              প্রতিষ্ঠাকাল: {schoolInfo.established}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}