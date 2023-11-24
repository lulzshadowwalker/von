import { HTMLAttributes, ReactElement } from 'react';
import TabBarItem from './components/tab-bar-item';
import ActiveTabContextProvider, { Tab } from '@/context/active-tab-context';

interface TabBarProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  initialTab?: Tab;
  children?: ReactElement<typeof TabBarItem>[];
  onTabChanged?: (tab: Tab) => void;
}

export default function TabBar({ initialTab, onTabChanged, children, className, ...rest }: TabBarProps) {

  return (
    <ActiveTabContextProvider initialTab={initialTab} onTabChanged={onTabChanged}>
      <nav
        className={`flex gap-[2.4rem] border-0 border-b border-solid border-muted-600 ${className}`}
        {...rest}
      >
        {children}
      </nav>
    </ActiveTabContextProvider>
  );
}
