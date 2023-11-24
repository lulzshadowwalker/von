import type { Metadata } from 'next';
import { Istok_Web } from 'next/font/google';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Sidemenu from '@/components/side-menu';

config.autoAddCss = false;

const istok = Istok_Web({ 
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: 'Von',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={istok.className}>
        <Sidemenu />
        <div className='ms-[8rem]'>{children}</div>
      </body>
    </html>
  );
}
