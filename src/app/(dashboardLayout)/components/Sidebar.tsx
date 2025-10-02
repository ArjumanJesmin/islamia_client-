"use client"

import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { 
  Home, 
  Users, 
  BookOpen, 
  Calendar, 
  BarChart3, 
  Settings,
  GraduationCap,
  Bell,
  FileText
} from 'lucide-react'


const navigation = {
  student: [
    { name: 'ড্যাশবোর্ড', href: '/student', icon: Home },
    { name: 'আমার প্রোফাইল', href: '/student/profile', icon: Users },
    { name: 'ক্লাস রুটিন', href: '/student/schedule', icon: Calendar },
    { name: 'উপস্থিতি', href: '/student/attendance', icon: BarChart3 },
    { name: 'ফলাফল', href: '/student/results', icon: FileText },
    { name: 'নোটিশ', href: '/student/notices', icon: Bell },
  ],
  teacher: [
    { name: 'ড্যাশবোর্ড', href: '/teacher', icon: Home },
    { name: 'আমার ক্লাস', href: '/teacher/classes', icon: BookOpen },
    { name: 'উপস্থিতি', href: '/teacher/attendance', icon: BarChart3 },
    { name: 'ফলাফল ইনপুট', href: '/teacher/results', icon: FileText },
    { name: 'ছাত্র তালিকা', href: '/teacher/students', icon: Users },
    { name: 'নোটিশ', href: '/teacher/notices', icon: Bell },
  ],
  admin: [
    { name: 'ড্যাশবোর্ড', href: '/admin', icon: Home },
    { name: 'ব্যবহারকারী', href: '/admin/users', icon: Users },
    { name: 'ছাত্র ব্যবস্থাপনা', href: '/admin/students', icon: GraduationCap },
    { name: 'শিক্ষক ব্যবস্থাপনা', href: '/admin/teachers', icon: Users },
    { name: 'রিপোর্ট', href: '/admin/reports', icon: BarChart3 },
    { name: 'সেটিংস', href: '/admin/settings', icon: Settings },
  ]
}

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()

  const userRole = session?.user?.role?.toLowerCase() as keyof typeof navigation
  const menuItems = navigation[userRole] || navigation.student

  return (
    <div className="flex flex-col w-64 bg-white border-r border-gray-200">
      {/* School Logo */}
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">ই</span>
          </div>
          <span className="text-lg font-bold text-gray-900">
            ইসরামিয়া প্রাথমিক
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <button
              key={item.name}
              onClick={() => router.push(item.href)}
              className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </button>
          )
        })}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">
              {session?.user?.name?.charAt(0) || 'U'}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {session?.user?.name}
            </p>
            <p className="text-xs text-gray-500 capitalize">
              {session?.user?.role?.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}