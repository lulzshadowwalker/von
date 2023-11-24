import SecondaryButton from '@/components/secondary-button';
import Link from 'next/link';

export default function Notifications() {
  return (
    <>
      <header className='w-full ps-page h-[8.5rem] bg-muted-400 flex justify-between items-center'>
        <section className='flex gap-[1.2rem] items-center'>
          <h1 className='text-[22pt] text-muted-700 w-max me-4'>
            Notifications
          </h1>
        </section>
        <Link href='notifications/create' className='h-full'>
            <SecondaryButton className='h-full w-[25rem]'>New</SecondaryButton>
        </Link>
      </header>
    </>
  );
}
