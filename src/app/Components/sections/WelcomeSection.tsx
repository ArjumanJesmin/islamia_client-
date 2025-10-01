"use client"

import { useGetSchoolStatsQuery } from '@/redux/api/schoolApi';
import { useAppSelector } from '@/redux/hooks';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, Clock } from 'lucide-react';

const WelcomeSection = () => {
  const { data: statsData, isLoading, error } = useGetSchoolStatsQuery();
  const { activeSection } = useAppSelector((state) => state.school);

  // Fallback data if API fails
  const stats = statsData?.data || {
    students: 235,
    teachers: 18,
    experience: 38,
    successRate: 98
  };

  const statItems = [
    { 
      value: stats.students, 
      label: 'বর্তমান শিক্ষার্থী', 
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      value: stats.teachers, 
      label: 'অভিজ্ঞ শিক্ষক', 
      icon: GraduationCap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    { 
      value: stats.experience, 
      label: 'বছরের অভিজ্ঞতা', 
      icon: Clock,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      value: `${stats.successRate}%`, 
      label: 'সাফল্যের হার', 
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-12 w-3/4 mb-6" />
              <Skeleton className="h-4 w-full mb-4" />
              <Skeleton className="h-4 w-5/6 mb-4" />
              <Skeleton className="h-4 w-4/6 mb-8" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-32" />
                <Skeleton className="h-12 w-32" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(i => (
                <Skeleton key={i} className="h-32 rounded-2xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container text-center">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-red-800 text-xl font-semibold mb-4">
              ডেটা লোড করতে সমস্যা হয়েছে
            </h3>
            <p className="text-red-600 mb-4">
              স্থানীয় ডেটা দেখানো হচ্ছে। সার্ভার সংযোগ পরে চেক করুন।
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              স্বাগতম{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ইসরামিয়া সরকারি প্রাথমিক বিদ্যালয়
              </span>
              -এ
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              ১৯৮৫ সাল থেকে আমরা মানসম্মত শিক্ষা প্রদান করে আসছি। আমাদের প্রতিষ্ঠান শুধু পাঠদানের মধ্যে সীমাবদ্ধ নয়, 
              বরং শিক্ষার্থীদের সার্বিক উন্নয়নের জন্য কাজ করে যাচ্ছে।
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              আধুনিক শিক্ষা পদ্ধতি, অভিজ্ঞ শিক্ষকমণ্ডলী এবং উন্নত অবকাঠামো নিয়ে আমরা প্রস্তুত আপনার সন্তানের উজ্জ্বল ভবিষ্যত গড়ে তুলতে।
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                <Link href="/about">
                  আমাদের ইতিহাস
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-500">
                <Link href="/contact">
                  ক্যাম্পাস ভিজিট
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {statItems.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/70">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 ${stat.bgColor} rounded-2xl flex items-center justify-center`}>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;