import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className='w-full px-page h-[8.5rem] bg-muted-400 flex justify-between items-center'>
        <section className='flex gap-[1.2rem] items-center'>
          <Image
            width={34}
            height={34}
            src='https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=2844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='admin'
            className='h-[3.4rem] w-[3.4rem] rounded-full object-cover'
          />
          <h1 className='text-[20pt] text-on-primary'>
            Welcome Back, Valeria!
          </h1>
        </section>
        <div className='rounded-full h-[3.2rem] w-[3.2rem] bg-muted-700/50 flex items-center justify-center cursor-pointer'>
          <FontAwesomeIcon icon={faBell} size={'sm'} />
        </div>
      </header>
    </>
  );
}
