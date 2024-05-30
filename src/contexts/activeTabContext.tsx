// ActiveTabContext.tsx or ActiveTabContext.jsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ActiveTabContextProps {
  activeTab: string;
  setActiveTab: (tab: string, friendName?: string) => void;
}

const ActiveTabContext = createContext<ActiveTabContextProps | undefined>(undefined);

export const ActiveTabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTabState] = useState<string>("home");

  const setActiveTab = (tab: string, friendName?: string) => {
    setActiveTabState(tab);
    if (friendName) {
     
    }
  };

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export const useActiveTab = (): ActiveTabContextProps => {
  const context = useContext(ActiveTabContext);
  if (!context) {
    throw new Error("useActiveTab must be used within an ActiveTabProvider");
  }
  return context;
};
