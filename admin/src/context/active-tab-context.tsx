import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type ActiveTabContextProviderProps = {
  initialTab?: Tab; 
  onTabChanged?: (tab: Tab) => void;
  children: ReactNode;
};

export type Tab = string | null;

type ActiveTabContextType = {
  activeTab: Tab;
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
};

export const ActiveTabContext = createContext<ActiveTabContextType | null>(
  null,
);

export default function ActiveTabContextProvider({
  initialTab, 
  onTabChanged,
  children,
}: ActiveTabContextProviderProps) {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab ?? null);

  useEffect(() => {
    if (onTabChanged) onTabChanged(activeTab);
  }, [activeTab, onTabChanged]);

  return (
    <ActiveTabContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </ActiveTabContext.Provider>
  );
}

export function useActiveTabContext(): ActiveTabContextType {
  const context = useContext(ActiveTabContext);

  if (context === null) {
    throw new Error(
      'ActiveTabContext has to be used within an ActiveTabContextProvider',
    );
  }

  return context;
}
