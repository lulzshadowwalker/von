'use client';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SideMenuItemProps = {
  href: string | null;
  icon: IconProp;
};

export default function SideMenuItem({ href, icon }: SideMenuItemProps) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <div
      className={`w-full ${clsx({
        'cursor-not-allowed': href === null,
      })}`}
    >
      <Link
        href={href ?? 'invalid-route'}
        className={`group flex items-center justify-center h-[3.4rem] w-full ${clsx(
          {
            'pointer-events-none': href === null,
          },
        )}`}
      >
        {isActive && (
          <div className='w-2 h-full bg-black rounded-se-md rounded-ee-md' />
        )}
        <FontAwesomeIcon
          icon={icon}
          size={'lg'}
          className={`m-auto group-hover:text-on-primary transition-all ${
            isActive ? 'text-on-primary' : 'text-muted-700'
          }`}
        />
      </Link>
    </div>
  );
}
