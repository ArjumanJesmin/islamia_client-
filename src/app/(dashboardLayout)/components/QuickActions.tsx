import { LucideIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface QuickAction {
  title: string
  description: string
  icon: LucideIcon
  href: string
  color: 'blue' | 'green' | 'orange' | 'purple'
}

interface QuickActionsProps {
  actions: QuickAction[]
}

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100',
  green: 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100',
  orange: 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100',
  purple: 'bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100'
}

export function QuickActions({ actions }: QuickActionsProps) {
  const router = useRouter()

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        দ্রুত একশন
      </h2>
      <div className="space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon
          
          return (
            <button
              key={index}
              onClick={() => router.push(action.href)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg border transition-colors ${colorClasses[action.color]}`}
            >
              <Icon className="h-5 w-5" />
              <div className="text-left">
                <p className="font-medium">{action.title}</p>
                <p className="text-sm opacity-80">{action.description}</p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}