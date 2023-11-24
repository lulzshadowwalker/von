import { Metadata } from 'next';
import PrimaryButton from '@/components/primary-button';
import OptionBox from '@/components/notifications/option-box';

export const metadata: Metadata = {
  title: 'Von | Create Notification',
  description: 'create a new notificaiton',
};

export default function CreateNotification() {
  return (
    <>
      <header className='w-full ps-page h-[8.5rem] bg-muted-400 flex justify-between items-center'>
        <section className='flex gap-[1.2rem] items-center'>
          <h1 className='text-[22pt] text-muted-700 w-max me-4'>
            Create Notification
          </h1>
        </section>
        <PrimaryButton className='h-full w-[25rem]'>Send</PrimaryButton>
      </header>

      <main className='flex flex-col xl:flex-row mx-page my-[6.4rem] gap-[5.6rem]'>
        <section className='flex-grow'>
          <h2 className='mb-[3.6rem] text-[18pt] font-medium text-on-primary'>
            Message
          </h2>
          <form className='flex flex-col gap-[3.2rem]'>
            <input
              type='text'
              name='title'
              className='text-on-primary placeholder:text-muted-700 w-full p-4 text-[14pt] bg-muted-400 border-0 border-b border-on-primary border-solid focus:border-secondary focus:border-[2.5px] transition-all'
              placeholder='Title'
            />
            <textarea
              name='body'
              className='text-on-primary placeholder:text-muted-700 w-full p-4 text-[14pt] bg-muted-400 border-0 border-b border-on-primary border-solid focus:border-secondary focus:border-[2.5px] resize-none transition-all'
              placeholder='Body'
              maxLength={128}
            />
          </form>
        </section>

        <section className='flex flex-col gap-[5.6rem]'>
          <div>
            <h2 className='mb-[3.6rem] text-[18pt] font-medium text-on-primary'>
              Target Audience
            </h2>
            <div className='flex gap-[4.8rem]'>
              <OptionBox>Passengers</OptionBox>
              <OptionBox>Drivers</OptionBox>
            </div>
          </div>

          <div>
            <h2 className='mb-[3.6rem] text-[18pt] font-medium text-on-primary'>
              Target Audience
            </h2>
            <div className='flex gap-[4.8rem]'>
              <OptionBox>
                Mobile
                <br />
                Notification
              </OptionBox>
              <OptionBox>Email</OptionBox>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
