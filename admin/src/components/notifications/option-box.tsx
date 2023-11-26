'use client';

import { HTMLAttributes, useState } from 'react';
import clsx from 'clsx';

export default function OptionBox({
  children,
  onClick,
  ...rest
}: HTMLAttributes<HTMLElement>) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`flex items-center justify-center w-[30rem] aspect-[2/1] border-[0.5px] border-muted-600 border-solid rounded-lg text-[20pt] font-light text-on-primary cursor-pointer transition-all text-center ${clsx(
        {
          'font-normal text-[22pt] text-secondary border-secondary border bg-secondary/20':
            isSelected,
          'hover:bg-muted-400': !isSelected,
        },
      )}`}
      onClick={(e) => {
        setIsSelected(!isSelected);

        if (onClick) {
          onClick(e);
        }
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
