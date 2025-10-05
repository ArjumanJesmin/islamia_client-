// components/QuickActions.tsx
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface Action {
  title: string
  description: string
  icon: LucideIcon
  href: string
  color: 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'yellow'
}

interface QuickActionsProps {
  actions: Action[]
}

const actionColors = {
  blue: 'bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400 border-blue-200 dark:border-blue-800',
  green: 'bg-green-50 text-green-600 dark:bg-green-950/20 dark:text-green-400 border-green-200 dark:border-green-800',
  orange: 'bg-orange-50 text-orange-600 dark:bg-orange-950/20 dark:text-orange-400 border-orange-200 dark:border-orange-800',
  purple: 'bg-purple-50 text-purple-600 dark:bg-purple-950/20 dark:text-purple-400 border-purple-200 dark:border-purple-800',
  red: 'bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400 border-red-200 dark:border-red-800',
  yellow: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-950/20 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800'
}

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold text-foreground mb-6">দ্রুত একশন</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {actions.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl border hover:border-school-primary/30 hover:shadow-md transition-all duration-200 group"
          >
            <div className={`p-2 sm:p-3 rounded-lg ${actionColors[action.color]} group-hover:scale-110 transition-transform duration-200`}>
              <action.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-medium text-foreground group-hover:text-school-primary transition-colors">
                {action.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 truncate">
                {action.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}