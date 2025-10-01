"use client"


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetSchoolFeaturesQuery } from '@/redux/api/schoolApi';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const { data: featuresData, isLoading, error } = useGetSchoolFeaturesQuery();

  // Fallback data if API fails
  const features = featuresData?.data || [
    {
      id: '1',
      title: 'আধুনিক শিক্ষা পদ্ধতি',
      description: 'ডিজিটাল ক্লাসরুম ও ইন্টারেক্টিভ শিক্ষা পদ্ধতি',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '2', 
      title: 'অভিজ্ঞ শিক্ষক',
      description: 'যোগ্য ও অভিজ্ঞ শিক্ষক দ্বারা পাঠদান',
      icon: '👨‍🏫',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: '3',
      title: 'সুবিধাজনক পরিবেশ',
      description: 'আধুনিক অবকাঠামো ও নিরাপদ পরিবেশ',
      icon: '🏫',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: '4',
      title: 'সৃজনশীল কার্যক্রম',
      description: 'খেলাধুলা, সাংস্কৃতিক ও সহশিক্ষা কার্যক্রম',
      icon: '🎨',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-1/3 mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <Skeleton key={i} className="h-64 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            আমাদের <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">বিশেষত্ব</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            আধুনিক শিক্ষা পদ্ধতি, অভিজ্ঞ শিক্ষকমণ্ডলী এবং সুযোগ-সুবিধা নিয়ে আমরা প্রস্তুত
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature: any, index: number) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <Card className="group border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white text-3xl transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 text-center">
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;