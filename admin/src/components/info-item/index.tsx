import { ReactNode } from 'react';

type InfoItemProps = {
  title: string;
  children: ReactNode;
};

export default function InfoItem({ title, children }: InfoItemProps) {
  return (
    <div>
      <h6 className='text-[10pt] text-muted-700'>{title}</h6>
      <div className='text-[10pt] text-on-primary font-bold'>{children}</div>
    </div>
  );
}
