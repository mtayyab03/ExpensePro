import React, { createContext, useState, useContext } from "react";

interface NotificationContextType {
  notificationCount: number;
  setNotificationCount: (count: number) => void;
}

// Create a context with a default value
const NotificationContext = createContext<NotificationContextType>({
  notificationCount: 0,
  setNotificationCount: () => {}, // Default no-op function
});

export const NotificationProvider = ({ children }: any) => {
  const [notificationCount, setNotificationCount] = useState(5); // initial notification count

  return (
    <NotificationContext.Provider
      value={{ notificationCount, setNotificationCount }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

// Hook to use the notification context
export const useNotification = () => useContext(NotificationContext);
