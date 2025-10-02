import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  icon: LucideIcon
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red'
  change?: {
    value: number
    type: 'increase' | 'decrease'
  }
}

const colorClasses = {
  blue: {
    bg: 'from-blue-500 to-blue-600',
    light: 'bg-blue-50',
    text: 'text-blue-600'
  },
  green: {
    bg: 'from-green-500 to-green-600',
    light: 'bg-green-50', 
    text: 'text-green-600'
  },
  purple: {
    bg: 'from-purple-500 to-purple-600',
    light: 'bg-purple-50',
    text: 'text-purple-600'
  },
  orange: {
    bg: 'from-orange-500 to-orange-600',
    light: 'bg-orange-50',
    text: 'text-orange-600'
  },
  red: {
    bg: 'from-red-500 to-red-600',
    light: 'bg-red-50',
    text: 'text-red-600'
  }
}

export function StatCard({ title, value, icon: Icon, color, change }: StatCardProps) {
  const colors = colorClasses[color]

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          
          {change && (
            <div className={`flex items-center mt-3 text-sm ${
              change.type === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className={`inline-flex items-center ${
                change.type === 'increase' ? 'bg-green-100' : 'bg-red-100'
              } px-2 py-1 rounded-full`}>
                {change.type === 'increase' ? '↑' : '↓'} {Math.abs(change.value)}%
              </span>
              <span className="text-gray-500 ml-2 text-xs">গত মাস থেকে</span>
            </div>
          )}
        </div>
        
        <div className={`p-4 rounded-2xl bg-gradient-to-r ${colors.bg} text-white shadow-lg`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}