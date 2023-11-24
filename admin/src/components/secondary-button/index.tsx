import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
  disabled,
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`border-2 border-solid border-secondary text-secondary font-medium py-[0.8rem] px-[2.4rem] flex items-center justify-center cursor-pointer transition-all hover:bg-secondary-focus/20 ${clsx(
        {
          'pointer-events-none border-gray-400 text-gray-400 bg-gray-400/20':
            disabled,
        },
      )} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
