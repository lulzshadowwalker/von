import { useActiveTabContext } from '@/context/active-tab-context';
import clsx from 'clsx';

type TabBarItemProps = {
  title: string;
};

export default function TabBarItem({ title }: TabBarItemProps) {
  const { activeTab, setActiveTab } = useActiveTabContext();
  const isActive = title === activeTab;

  return (
    <div
      className='w-fit flex flex-col justify-center items-center'
      onClick={() => {
        setActiveTab(title);
      }}
    >
      <h2
        className={`text-[16pt] pb-[1.2rem] cursor-pointer hover:font-medium transition-all ${clsx(
          {
            'font-bold pointer-events-none': isActive,
          },
        )}`}
      >
        {title}
      </h2>
      <div
        className={`w-[75%] h-[4px] bg-black rounded-ss-md rounded-se-md ${clsx(
          {
            invisible: !isActive,
          },
        )}`}
      />
    </div>
  );
}
