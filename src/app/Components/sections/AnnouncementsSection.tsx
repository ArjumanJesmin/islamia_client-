"use client"

import { useState } from 'react'
import { useGetAnnouncementsQuery, useGetEventsQuery } from '@/redux/api/schoolApi'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setActiveSection } from '@/redux/api/schoolSlice'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Bell, TrendingUp, AlertCircle, Info } from 'lucide-react'

const AnnouncementsSection = () => {
  const dispatch = useAppDispatch()
  const { activeSection } = useAppSelector((state) => state.school)
  const [activeTab, setActiveTab] = useState<'announcements' | 'events'>('announcements')

  // RTK Query hooks
  const { 
    data: announcementsData, 
    isLoading: announcementsLoading, 
    error: announcementsError,
    refetch: refetchAnnouncements 
  } = useGetAnnouncementsQuery()

  const { 
    data: eventsData, 
    isLoading: eventsLoading, 
    error: eventsError,
    refetch: refetchEvents 
  } = useGetEventsQuery()

  // Fallback data if API fails
  const announcements = announcementsData?.data || [
    { id: '1', date: '১৫ ডিসেম্বর ২০২৪', title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা', status: 'new' as const },
    { id: '2', date: '১০ ডিসেম্বর ২০২৪', title: 'শীতকালীন ছুটির নির্দেশিকা', status: 'important' as const },
    { id: '3', date: '৫ ডিসেম্বর ২০২৪', title: 'অভিভাবক সমাবেশের তারিখ', status: 'normal' as const },
    { id: '4', date: '১ ডিসেম্বর ২০২৪', title: 'নতুন শিক্ষাবর্ষের ভর্তি প্রক্রিয়া', status: 'normal' as const }
  ]

  const events = eventsData?.data || [
    { id: '1', date: '২০ ডিসেম্বর ২০২৪', event: 'সাংস্কৃতিক অনুষ্ঠান', time: 'সকাল ১০:০০' },
    { id: '2', date: '২৫ ডিসেম্বর ২০২৪', event: 'বিজ্ঞান মেলা', time: 'সকাল ৯:০০' },
    { id: '3', date: '৩১ ডিসেম্বর ২০২৪', event: 'বার্ষিক পুরস্কার বিতরণী', time: 'সকাল ১১:০০' },
    { id: '4', date: '৫ জানুয়ারি ২০২৫', event: 'নতুন শিক্ষাবর্ষ শুরু', time: 'সকাল ৯:০০' }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <Bell className="w-4 h-4 text-green-600" />
      case 'important': return <AlertCircle className="w-4 h-4 text-orange-600" />
      case 'normal': return <Info className="w-4 h-4 text-blue-600" />
      default: return <Bell className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200'
      case 'important': return 'bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200'
      case 'normal': return 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return 'নতুন'
      case 'important': return 'গুরুত্বপূর্ণ'
      case 'normal': return 'সাধারণ'
      default: return status
    }
  }

  const handleRetry = () => {
    if (activeTab === 'announcements') {
      refetchAnnouncements()
    } else {
      refetchEvents()
    }
  }

  const isLoading = activeTab === 'announcements' ? announcementsLoading : eventsLoading
  const hasError = activeTab === 'announcements' ? announcementsError : eventsError

  if (isLoading) {
    return (
      <section id="announcements" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-1/3 mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>
          
          {/* Tab Skeleton */}
          <div className="flex justify-center mb-8">
            <Skeleton className="h-12 w-64 rounded-2xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Skeleton className="h-96 rounded-2xl" />
            <Skeleton className="h-96 rounded-2xl" />
          </div>
        </div>
      </section>
    )
  }

  if (hasError) {
    return (
      <section id="announcements" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              বিজ্ঞপ্তি ও <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">নোটিশ</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              সর্বশেষ আপডেট ও গুরুত্বপূর্ণ ঘোষণা
            </p>
          </div>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ডেটা লোড করতে সমস্যা হয়েছে
              </h3>
              <p className="text-gray-600 mb-6">
                {activeTab === 'announcements' 
                  ? 'ঘোষণাগুলো লোড করতে সমস্যা হচ্ছে।' 
                  : 'ইভেন্টগুলো লোড করতে সমস্যা হচ্ছে।'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleRetry}
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  আবার চেষ্টা করুন
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setActiveTab(activeTab === 'announcements' ? 'events' : 'announcements')}
                >
                  অন্য ট্যাবে যান
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="announcements" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onViewportEnter={() => dispatch(setActiveSection('announcements'))}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            বিজ্ঞপ্তি ও <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">নোটিশ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            সর্বশেষ আপডেট ও গুরুত্বপূর্ণ ঘোষণা
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-orange-200">
            <Button
              variant={activeTab === 'announcements' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('announcements')}
              className={`rounded-xl transition-all duration-300 ${
                activeTab === 'announcements' 
                  ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Bell className="w-4 h-4 mr-2" />
              ঘোষণা
              <Badge variant="secondary" className="ml-2 bg-white/20 text-white">
                {announcements.length}
              </Badge>
            </Button>
            <Button
              variant={activeTab === 'events' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('events')}
              className={`rounded-xl transition-all duration-300 ${
                activeTab === 'events' 
                  ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md' 
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              ইভেন্ট
              <Badge variant="secondary" className="ml-2 bg-white/20 text-white">
                {events.length}
              </Badge>
            </Button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'announcements' ? (
            <motion.div
              key="announcements"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Recent Announcements */}
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-orange-600 flex items-center">
                    <Bell className="w-6 h-6 mr-3" />
                    সাম্প্রতিক ঘোষণা
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {announcements.map((announcement, index) => (
                      <motion.div
                        key={announcement.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4 p-4 rounded-xl border border-orange-100 bg-white hover:shadow-md transition-all duration-300 group cursor-pointer hover:border-orange-300"
                      >
                        <div className="flex-shrink-0 mt-1">
                          {getStatusIcon(announcement.status)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2 gap-2">
                            <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                              {announcement.title}
                            </h4>
                            <Badge 
                              variant="outline" 
                              className={`flex-shrink-0 text-xs ${getStatusColor(announcement.status)}`}
                            >
                              {getStatusText(announcement.status)}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 flex items-center">
                            <Clock className="w-3 h-3 mr-2 flex-shrink-0" />
                            {announcement.date}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Important Notices */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3" />
                    গুরুত্বপূর্ণ নোটিশ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {announcements
                      .filter(a => a.status === 'important')
                      .map((announcement, index) => (
                        <motion.div
                          key={announcement.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-white line-clamp-2">
                              {announcement.title}
                            </h4>
                            <AlertCircle className="w-4 h-4 text-white/80 flex-shrink-0 ml-2" />
                          </div>
                          <p className="text-sm opacity-90 flex items-center">
                            <Clock className="w-3 h-3 mr-2 flex-shrink-0" />
                            {announcement.date}
                          </p>
                        </motion.div>
                      ))}
                    
                    {announcements.filter(a => a.status === 'important').length === 0 && (
                      <div className="text-center py-8">
                        <Info className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p className="opacity-80">কোন গুরুত্বপূর্ণ নোটিশ নেই</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="events"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-amber-600 flex items-center">
                    <Calendar className="w-6 h-6 mr-3" />
                    আগামী ইভেন্ট
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {events.map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-6 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-lg transition-all duration-300 group cursor-pointer hover:border-amber-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors text-lg line-clamp-2">
                            {event.event}
                          </h4>
                          <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium flex-shrink-0 ml-2">
                            {event.date}
                          </div>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Clock className="w-4 h-4 mr-2 text-amber-600 flex-shrink-0" />
                          <span>সময়: {event.time}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Refresh Button */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            onClick={handleRetry}
            className="border-orange-300 text-orange-600 hover:bg-orange-50 hover:text-orange-700"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            রিফ্রেশ করুন
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default AnnouncementsSection