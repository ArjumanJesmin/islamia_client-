// components/NotificationBell.tsx
"use client";

import { useState } from "react";
import { Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useNotifications } from "../Announcements/contexts/NotificationContext";
import { getStatusColor, getStatusIcon, getStatusText } from "../../helpers";

export function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();

  const unreadNotifications = notifications.filter(n => !n.read);
  const hasUnread = unreadCount > 0;

  return (
    <div className="relative">
      {/* Bell Icon Button */}
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className={`h-5 w-5 transition-colors ${
          hasUnread ? "text-orange-500 fill-orange-500" : "text-gray-600"
        }`} />
        
        {/* Notification Badge */}
        {hasUnread && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1"
          >
            <Badge className="h-5 w-5 flex items-center justify-center p-0 bg-orange-500 text-white text-xs">
              {unreadCount}
            </Badge>
          </motion.div>
        )}
      </Button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute right-0 top-12 z-50 w-80 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50">
                <h3 className="font-semibold text-gray-900">
                  Notifications {hasUnread && `(${unreadCount})`}
                </h3>
                {hasUnread && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={markAllAsRead}
                    className="text-xs text-blue-600 hover:text-blue-700"
                  >
                    <Check className="h-3 w-3 mr-1" />
                    Mark all read
                  </Button>
                )}
              </div>

              {/* Notifications List */}
              <div className="overflow-y-auto max-h-64">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-gray-500 text-sm">
                    No notifications
                  </div>
                ) : (
                  notifications.map((notification) => {
                    const Icon = getStatusIcon(notification.status);
                    return (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`p-3 border-b border-gray-100 cursor-pointer transition-colors ${
                          !notification.read ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-1 rounded-full ${
                            !notification.read ? 'bg-blue-100' : 'bg-gray-100'
                          }`}>
                            <Icon className={`h-4 w-4 ${getStatusColor(notification.status)}`} />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium truncate ${
                              !notification.read ? 'text-gray-900' : 'text-gray-600'
                            }`}>
                              {notification.title}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getStatusColor(notification.status)}`}
                              >
                                {getStatusText(notification.status)}
                              </Badge>
                              <span className="text-xs text-gray-500">
                                {notification.date}
                              </span>
                            </div>
                          </div>

                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                          )}
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-gray-100 bg-gray-50">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-xs text-gray-600 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}