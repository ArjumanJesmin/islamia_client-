import { LucideIcon } from 'lucide-react';

interface Action {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void; // Make this optional
  href?: string; // Keep this optional
  color: 'blue' | 'green' | 'orange' | 'purple' | 'red';
}

interface QuickActionsProps {
  actions: Action[];
}

export const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100',
    green: 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100',
    orange: 'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100',
    purple: 'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100',
    red: 'bg-red-50 border-red-200 text-red-700 hover:bg-red-100',
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h2 className="text-xl font-bold text-foreground mb-4">দ্রুত কাজসমূহ</h2>
      <div className="space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          const Component = action.href ? 'a' : 'button';
          
          return (
            <Component
              key={index}
              {...(action.href ? { href: action.href } : { onClick: action.onClick, type: 'button' })}
              className={`w-full flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 ${colorClasses[action.color]}`}
            >
              <Icon className="w-6 h-6" />
              <div className="text-left">
                <h3 className="font-semibold">{action.title}</h3>
                <p className="text-sm opacity-80">{action.description}</p>
              </div>
            </Component>
          );
        })}
      </div>
    </div>
  );
};