// components/feature-card.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  feature: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
  };
  index: number;
  isLoading?: boolean;
}

export function FeatureCard({ feature, index, isLoading = false }: FeatureCardProps) {
  if (isLoading) {
    return (
      <Card className="border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden animate-pulse">
        <CardHeader className="text-center pb-4">
          <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-2xl" />
          <div className="h-7 bg-muted rounded-lg w-32 mx-auto" />
        </CardHeader>
        <CardContent className="text-center space-y-2">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-4/5 mx-auto" />
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-card to-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardHeader className="relative z-10 text-center pb-4">
          <div className={cn(
            "w-20 h-20 mx-auto mb-4 bg-gradient-to-r rounded-2xl flex items-center justify-center text-white text-3xl transform group-hover:scale-110 transition-transform duration-300 shadow-lg",
            feature.color
          )}>
            {feature.icon}
          </div>
          <CardTitle className="text-xl font-bold text-card-foreground group-hover:text-school-primary transition-colors">
            {feature.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="relative z-10 text-center">
          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
            {feature.description}
          </p>
        </CardContent>
        
        {/* Hover effect border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-school-primary to-school-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      </Card>
    </motion.div>
  );
}