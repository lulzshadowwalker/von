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
    <Link
      href={href ?? 'invalid-route'}
      className={clsx({
        'pointer-events-none': href === null,
      })}
    >
      <FontAwesomeIcon
        icon={icon}
        size={'lg'}
        className={`${isActive ? 'text-on-primary' : 'text-muted-700'}`}
      />
    </Link>
  );
}
