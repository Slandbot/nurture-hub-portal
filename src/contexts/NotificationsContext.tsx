import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { toast } from "sonner";

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: number;
  read: boolean;
  link?: string;
}

interface NotificationsContextType {
  notifications: Notification[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotification: (id: string) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

// Mock notifications data
const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Appointment Reminder',
    message: 'Your consultation with Dr. Smith is tomorrow at 2 PM',
    type: 'info',
    timestamp: Date.now() - 3600000,
    read: false,
    link: '/appointments'
  },
  {
    id: '2',
    title: 'New Article',
    message: 'Check out our latest article on baby nutrition',
    type: 'success',
    timestamp: Date.now() - 86400000,
    read: false,
    link: '/resources'
  },
  {
    id: '3',
    title: 'Milestone Alert',
    message: 'Time to track your baby\'s 6-month development milestones',
    type: 'warning',
    timestamp: Date.now() - 172800000,
    read: true,
    link: '/dashboard'
  }
];

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    if (user) {
      // Load mock notifications when user is authenticated
      setNotifications(mockNotifications);

      // Simulate receiving new notifications periodically
      const interval = setInterval(() => {
        const randomNotification = {
          id: Math.random().toString(36).substr(2, 9),
          title: 'New Update',
          message: 'You have a new activity to check',
          type: Math.random() > 0.5 ? 'info' : 'success',
          timestamp: Date.now(),
          read: false,
          link: '/dashboard'
        } as Notification;

        if (Math.random() > 0.7) { // 30% chance to receive a notification
          addNotification({
            title: randomNotification.title,
            message: randomNotification.message,
            type: randomNotification.type as 'info' | 'success',
            link: randomNotification.link
          });
        }
      }, 60000); // Check every minute

      return () => clearInterval(interval);
    } else {
      setNotifications([]);
    }
  }, [user]);

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const clearNotification = (id: string) => {
    setNotifications(prev =>
      prev.filter(notif => notif.id !== id)
    );
  };

  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      read: false,
    };

    setNotifications(prev => [newNotification, ...prev]);

    // Show toast for new notifications
    toast(notification.title, {
      description: notification.message,
      action: notification.link ? {
        label: "View",
        onClick: () => window.location.href = notification.link!
      } : undefined
    });
  };

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        clearNotification,
        addNotification,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationsProvider');
  }
  return context;
}