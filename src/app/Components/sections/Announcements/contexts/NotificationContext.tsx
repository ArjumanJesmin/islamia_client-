// contexts/NotificationContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface NotificationItem {
  id: number;
  title: string;
  status: 'active' | 'upcoming' | 'ended';
  date: string;
  type: 'announcement' | 'event';
  read: boolean;
}

interface NotificationContextType {
  notifications: NotificationItem[];
  unreadCount: number;
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
  addNotification: (notification: Omit<NotificationItem, 'id' | 'read'>) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 1,
      title: "Exam Schedule Released",
      status: "active",
      date: "2025-10-05",
      type: "announcement",
      read: false
    },
    {
      id: 2,
      title: "Science Fair",
      status: "active",
      date: "2025-10-12",
      type: "event",
      read: false
    },
    {
      id: 3,
      title: "School Picnic",
      status: "upcoming",
      date: "2025-11-15",
      type: "announcement",
      read: true
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const addNotification = (notification: Omit<NotificationItem, 'id' | 'read'>) => {
    const newId = Math.max(0, ...notifications.map(n => n.id)) + 1;
    setNotifications(prev => [
      { ...notification, id: newId, read: false },
      ...prev
    ]);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        addNotification
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};