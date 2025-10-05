"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FeatureCardSkeleton } from "./feature-card-skeleton";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isLoading?: boolean;
}

export function FeatureCard({ feature, index, isLoading = false }: FeatureCardProps) {
  if (isLoading) {
    return <FeatureCardSkeleton />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group relative overflow-hidden border-2 border-transparent bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4">
            <div className={`text-4xl ${feature.color}`}>
              {feature.icon}
            </div>
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {feature.title}
          </h3>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}