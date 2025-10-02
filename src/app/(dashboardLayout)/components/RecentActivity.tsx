import { CheckCircle, FileText, Bell, Award, Clock } from 'lucide-react'

interface Activity {
  id: number
  title: string
  description: string
  time: string
  type: 'attendance' | 'assignment' | 'announcement' | 'result'
  icon: string
}

interface RecentActivityProps {
  activities: Activity[]
}

const activityIcons = {
  attendance: CheckCircle,
  assignment: FileText,
  announcement: Bell,
  result: Award
}

const activityColors = {
  attendance: 'text-green-600 bg-green-100 border-green-200',
  assignment: 'text-blue-600 bg-blue-100 border-blue-200', 
  announcement: 'text-orange-600 bg-orange-100 border-orange-200',
  result: 'text-purple-600 bg-purple-100 border-purple-200'
}

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">সাম্প্রতিক কার্যক্রম</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          সব দেখুন
        </button>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activityIcons[activity.type]
          
          return (
            <div key={activity.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-colors group">
              <div className={`p-3 rounded-xl border ${activityColors[activity.type]} group-hover:scale-110 transition-transform`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {activity.title}
                  </h3>
                  <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{activity.time}</span>
                </div>
                <p className="text-gray-600 mt-1 text-sm">{activity.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}