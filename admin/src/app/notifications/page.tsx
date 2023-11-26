import SecondaryButton from '@/components/secondary-button';
import Link from 'next/link';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Von | Notifications',
  description: 'previously sent notificaitons',
};

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

      <main>
        <div className='flex flex-col overflow-x-auto my-[6.4rem]'>
          <div className='mx-page'>
            <div className='inline-block min-w-full'>
              <div className='overflow-x-auto'>
                <table className='min-w-full'>
                  <thead className='border-0 border-solid border-b mb-[2.6rem]'>
                    <tr className=' text-[16pt] text-muted-600 px-5'>
                      <th scope='col' className='pb-[1.4rem] px-5'>
                        Title
                      </th>
                      <th scope='col' className='pb-[1.4rem] px-5'>
                        Body
                      </th>
                      <th scope='col' className='pb-[1.4rem] px-5'>
                        Date Sent
                      </th>
                      <th scope='col' className='pb-[1.4rem] px-5'>
                        Sent By
                      </th>
                      <th scope='col' className='pb-[1.4rem] px-5'>
                        Target Audience
                      </th>
                      <th scope='col' className='pb-[1.4rem] px-5'>
                        Delivered Through
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {[...Array(10)].map((_, i) => {
                      return (
                        <tr
                          className='border-0 border-b-[0.5px] border-solid border-on-primary'
                          key={i}
                        >
                          <td className='flex gap-[1.6rem] items-center py-[1.2rem] px-5 whitespace-nowrap'>
                            <div className="line-clamp-3">
                              Notificaiton Title
                            </div>
                          </td>

                          <td className='py-[1.2rem] px-5 align-middle max-w-[30ch]'>
                            <div className=' line-clamp-3'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vivamus gravida lacinia libero, faucibus
                              pellentesque tortor ultricies id. Nulla
                              consectetur elit eget purus auctor, in efficitur
                              mi aliquet. Praesent ultrices eget turpis sed
                              commodo. Praesent eu lacus velit. Nullam rutrum
                              dui nec eleifend mattis. Integer pellentesque
                              dolor quam, vitae ullamcorper orci semper in.
                              Etiam nunc felis, vulputate a sodales id, placerat
                              vel felis. Ut neque dolor, efficitur non nunc ac,
                              ultrices cursus metus. Mauris pellentesque quam ac
                              velit dictum rutrum.
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle'>
                            <time dateTime='17 July 2022'>17 July 2022</time>
                          </td>
                          <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle'>
                            Snoopy snoop
                          </td>
                          <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle'>
                            Passengers / Drivers
                          </td>
                          <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle'>
                            Email / Mobile Notification
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
