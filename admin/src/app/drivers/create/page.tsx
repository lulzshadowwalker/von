import PrimaryButton from '@/components/primary-button';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Von | Add Driver',
  description: 'add a new driver',
};

export default function CreateDriver() {
  return (
    <>
      <header className='w-full ps-page h-[8.5rem] bg-muted-400 flex justify-between items-center'>
        <section className='flex gap-[1.2rem] items-center'>
          <h1 className='text-[22pt] text-muted-700 w-max me-4'>Add Driver</h1>
        </section>
        <PrimaryButton className='h-full w-[25rem]'>Save</PrimaryButton>
      </header>

      <main className='flex flex-col justify-center xl:flex-row mx-page my-[6.4rem] gap-[5.6rem]'>
        <section className='flex-grow max-w-[65rem]'>
          <h2 className='mb-[3.6rem] text-[18pt] font-medium text-on-primary'>
            Driver Details
          </h2>
          <form className='flex flex-col gap-[3.2rem]'>
            <div className='flex gap-[2.4rem] items-end'>
              <div className='rounded-sm h-[12rem] w-[14rem] bg-muted-600' />
              <input
                type='text'
                name='name'
                className='text-on-primary placeholder:text-muted-700 w-full p-4 text-[14pt] bg-muted-400 border-0 border-b border-on-primary border-solid focus:border-secondary focus:border-[2.5px] transition-all h-min'
                placeholder='John Doe'
              />
            </div>
            <input
              type='text'
              name='phone_no'
              className='text-on-primary placeholder:text-muted-700 w-full p-4 text-[14pt] bg-muted-400 border-0 border-b border-on-primary border-solid focus:border-secondary focus:border-[2.5px] transition-all'
              placeholder='Phone Number'
            />
            <input
              type='text'
              min={0}
              name='license_no'
              className='text-on-primary placeholder:text-muted-700 w-full p-4 text-[14pt] bg-muted-400 border-0 border-b border-on-primary border-solid focus:border-secondary focus:border-[2.5px] transition-all'
              placeholder='License Number'
            />
            <select
              name='bus'
              className='text-on-primary placeholder:text-muted-700 w-full p-4 text-[14pt] bg-muted-400 border-0 border-b border-on-primary border-solid focus:border-secondary focus:border-[2.5px] transition-all'
            >
              <option disabled>Bus</option>
              <option value='driver_x'>Bus Number</option>
              <option value='driver_x'>Bus Number</option>
              <option value='driver_x'>Bus Number</option>
            </select>
          </form>
        </section>
      </main>
    </>
  );
}
