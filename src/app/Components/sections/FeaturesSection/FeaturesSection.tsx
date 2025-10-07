"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FeatureCard } from "./feature-card";
import { FeatureCardSkeleton } from "./feature-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { GradientText } from "../../ui/gradient-text";

// Import test.json data directly
import testData from '../../../../../test.json';

interface FeaturesSectionProps {
  isLoading?: boolean;
}

export function FeaturesSection({ isLoading = false }: FeaturesSectionProps) {
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
          {isLoading ? (
            <>
              <Skeleton className="h-12 w-96 mx-auto mb-6" />
              <Skeleton className="h-6 w-2/3 mx-auto" />
            </>
          ) : (
            <>
              <GradientText
                variant="primary"
                size="4xl"
                weight="bold"
                align="center"
                responsive
                className="mb-6"
              >
                আমাদের বিশেষত্ব
              </GradientText>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {schoolInfo.motto}
              </p>
            </>
          )}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {isLoading ? (
            // Show skeleton loaders when loading
            Array.from({ length: 4 }).map((_, index) => (
              <FeatureCardSkeleton key={index} />
            ))
          ) : (
            // Show actual features when not loading
            features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={{ ...feature, id: Number(feature.id) }}
                index={index}
                isLoading={false}
              />
            ))
          )}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {isLoading ? (
            // Stats skeleton
            Array.from({ length: 4 }).map((_, index) => (
              <Card
                key={index}
                className="border-blue-200 dark:border-blue-800 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <Skeleton className="h-8 w-20 mx-auto mb-2" />
                  <Skeleton className="h-4 w-24 mx-auto" />
                </CardContent>
              </Card>
            ))
          ) : (
            // Actual stats
            stats.map((stat, index) => (
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
            ))
          )}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {isLoading ? (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <Skeleton className="h-8 w-48 mx-auto mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-4/5 mx-auto mb-4" />
              <Skeleton className="h-4 w-32 mx-auto" />
            </div>
          ) : (
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <GradientText
                variant="secondary"
                size="2xl"
                weight="bold"
                align="center"
                withLine
                className="mb-4"
              >
                আমাদের প্রতিশ্রুতি
              </GradientText>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                আমরা প্রতিটি শিক্ষার্থীর সাফল্যের জন্য প্রতিশ্রুতিবদ্ধ। আধুনিক শিক্ষা পদ্ধতি, 
                অভিজ্ঞ শিক্ষক এবং উন্নত সুযোগ-সুবিধার মাধ্যমে আমরা শিক্ষার্থীদের সর্বোচ্চ সম্ভাবনা 
                বিকাশে সাহায্য করি।
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                প্রতিষ্ঠাকাল: {schoolInfo.established}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}