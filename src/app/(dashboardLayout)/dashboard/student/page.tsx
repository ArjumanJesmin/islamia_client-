"use client"

// import { useSession } from "next-auth/react"
// import DashboardLayout from "../../components/DashboardLayout"
import { StatCard } from "../../components/StartCard"
import { RecentActivity } from "../../components/RecentActivity"
import { QuickActions } from "../../components/QuickActions"
import { ClassSchedule } from "../../components/ClassSchedule"
import { 
  Users, 
  BookOpen, 
  Calendar, 
  TrendingUp,
  Clock,
  Award,
  FileText,
  Bell
} from 'lucide-react'

export default function StudentDashboard() {
  // const { data: session } = useSession()

  const stats = [
    {
      title: 'মোট উপস্থিতি',
      value: '৯২%',
      icon: Users,
      color: 'green' as const,
      change: { value: 5, type: 'increase' as const }
    },
    {
      title: 'বর্তমান শ্রেণী',
      value: 'পঞ্চম',
      icon: BookOpen,
      color: 'blue' as const
    },
    {
      title: 'আজকের ক্লাস',
      value: '৪টি',
      icon: Calendar,
      color: 'purple' as const
    },
    {
      title: 'গড় ফলাফল',
      value: '৮৫%',
      icon: TrendingUp,
      color: 'orange' as const,
      change: { value: 2, type: 'increase' as const }
    }
  ]

  const recentActivities = [
    {
      id: 1,
      title: 'গণিত ক্লাস',
      description: 'আপনি গণিত ক্লাসে উপস্থিত ছিলেন',
      time: '২ ঘন্টা আগে',
      type: 'attendance' as const,
      icon: '✅'
    },
    {
      id: 2,
      title: 'বাংলা অ্যাসাইনমেন্ট',
      description: 'আপনার বাংলা অ্যাসাইনমেন্ট জমা দেওয়া হয়েছে',
      time: '১ দিন আগে',
      type: 'assignment' as const,
      icon: '📝'
    },
    {
      id: 3,
      title: 'বার্ষিক পরীক্ষা',
      description: 'বার্ষিক পরীক্ষার সময়সূচী প্রকাশিত হয়েছে',
      time: '২ দিন আগে',
      type: 'announcement' as const,
      icon: '📢'
    },
    {
      id: 4,
      title: 'বিজ্ঞান কুইজ',
      description: 'বিজ্ঞান কুইজে আপনি ১৮/২০ পেয়েছেন',
      time: '৩ দিন আগে',
      type: 'result' as const,
      icon: '🏆'
    }
  ]

  const quickActions = [
    {
      title: 'ক্লাস রুটিন',
      description: 'সাপ্তাহিক ক্লাস সূচী দেখুন',
      icon: Clock,
      href: '/student/schedule',
      color: 'blue' as const
    },
    {
      title: 'উপস্থিতি রিপোর্ট',
      description: 'আপনার উপস্থিতি রেকর্ড দেখুন',
      icon: Users,
      href: '/student/attendance',
      color: 'green' as const
    },
    {
      title: 'ফলাফল দেখুন',
      description: 'পরীক্ষার ফলাফল দেখুন',
      icon: Award,
      href: '/student/results',
      color: 'orange' as const
    },
    {
      title: 'অ্যাসাইনমেন্ট',
      description: 'অ্যাসাইনমেন্ট জমা দিন',
      icon: FileText,
      href: '/student/assignments',
      color: 'purple' as const
    }
  ]

  return (
    <>
    {/* <DashboardLayout> */}
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                {/* স্বাগতম, {session?.user?.name}! 👋 */}স্বাগতম,
              </h1>
              <p className="text-blue-100 mt-2 text-lg">
                আজ আপনার ৪টি ক্লাস আছে। সাম্প্রতিক আপডেট এবং নোটিশ দেখুন।
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm">বর্তমান শ্রেণী</p>
                <p className="text-xl font-bold">পঞ্চম শ্রেণী</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
              change={stat.change}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <QuickActions actions={quickActions} />
          </div>

          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <RecentActivity activities={recentActivities} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <ClassSchedule />

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">আসন্ন ইভেন্ট</h2>
              <Bell className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {[
                {
                  title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা',
                  date: '১৫ ডিসেম্বর',
                  type: 'sports',
                  color: 'bg-green-100 text-green-800'
                },
                {
                  title: 'বিজ্ঞান মেলা',
                  date: '২০ ডিসেম্বর', 
                  type: 'science',
                  color: 'bg-blue-100 text-blue-800'
                },
                {
                  title: 'সাংস্কৃতিক অনুষ্ঠান',
                  date: '২৫ ডিসেম্বর',
                  type: 'cultural',
                  color: 'bg-purple-100 text-purple-800'
                },
                {
                  title: 'অভিভাবক সমাবেশ',
                  date: '৩০ ডিসেম্বর',
                  type: 'meeting',
                  color: 'bg-orange-100 text-orange-800'
                }
              ].map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${event.color}`}>
                      {event.type === 'sports' && '⚽'}
                      {event.type === 'science' && '🔬'}
                      {event.type === 'cultural' && '🎭'}
                      {event.type === 'meeting' && '👥'}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{event.title}</p>
                      <p className="text-sm text-gray-600">{event.date}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    দেখুন
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Chart Section */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">মাসিক পারফরম্যান্স</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">উপস্থিতি রেট</h3>
              <div className="space-y-3">
                {[
                  { month: 'সেপ্টেম্বর', percentage: 88, color: 'bg-green-500' },
                  { month: 'অক্টোবর', percentage: 92, color: 'bg-green-500' },
                  { month: 'নভেম্বর', percentage: 85, color: 'bg-yellow-500' },
                  { month: 'ডিসেম্বর', percentage: 95, color: 'bg-green-500' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 w-20">{item.month}</span>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.color}`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-8">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">বিষয়ভিত্তিক ফলাফল</h3>
              <div className="space-y-3">
                {[
                  { subject: 'বাংলা', marks: 85, total: 100 },
                  { subject: 'ইংরেজি', marks: 78, total: 100 },
                  { subject: 'গণিত', marks: 92, total: 100 },
                  { subject: 'বিজ্ঞান', marks: 88, total: 100 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span className="text-sm font-medium text-gray-900">{item.subject}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{item.marks}/{item.total}</span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-blue-500"
                          style={{ width: `${(item.marks/item.total)*100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* </DashboardLayout> */}
    </>
  )
}