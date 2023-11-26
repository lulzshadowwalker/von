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
      className={`bg-secondary text-primary py-[0.8rem] px-[2.4rem] flex items-center justify-center cursor-pointer transition-all hover:bg-secondary-focus ${clsx(
{
'bg-muted-600 pointer-events-none': disabled,
},
)} ${className}`}
      disabled
      {...rest}
    >
      {children}
    </button>
  );
}
