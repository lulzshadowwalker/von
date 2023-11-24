'use client';

import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TabBar from '@/components/tab-bar';
import TabBarItem from '@/components/tab-bar/components/tab-bar-item';

export default function Trips() {
  const router = useRouter();

  return (
    <>
      <header className='w-full px-page h-[8.5rem] bg-muted-400 flex justify-between items-center mb-[6.4rem]'>
        <section className='flex gap-[1.2rem] items-center'>
          <h1 className='text-[22pt] text-muted-700'>Trips</h1>
        </section>
        <div className='rounded-full h-[3.2rem] w-[3.2rem] bg-muted-700/50 flex items-center justify-center cursor-pointer'>
          <FontAwesomeIcon icon={faBell} size={'sm'} />
        </div>
      </header>

      <TabBar className='mx-page mb-[4.8rem]' initialTab={'Ongoing'}>
        <TabBarItem title='Ongoing' />
        <TabBarItem title='Completed' />
      </TabBar>

      <div className='flex flex-col overflow-x-auto'>
        <div className='mx-page'>
          <div className='inline-block min-w-full'>
            <div className='overflow-x-auto'>
              <table className='min-w-full table-fixed'>
                <thead className='border-0 border-solid border-b mb-[2.6rem]'>
                  <tr className=' text-[16pt] text-muted-600 px-5'>
                    <th scope='col' className='pb-[1.4rem]'>
                      Driver
                    </th>
                    <th scope='col' className='pb-[1.4rem]'>
                      Date
                    </th>
                    <th scope='col' className='pb-[1.4rem]'>
                      Route
                    </th>
                    <th scope='col' className='pb-[1.4rem]'>
                      Passengers
                    </th>
                    <th scope='col' className='pb-[1.4rem]'>
                      Rating
                    </th>
                    <th scope='col' className='pb-[1.4rem]'>
                      Bus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => {
                    return (
                      <tr
                        className='hover:bg-muted-400 transition-all cursor-pointer border-0 border-b-[0.5px] border-solid border-on-primary'
                        onClick={() => {
                          router.push('trips/aboba');
                        }}
                        onMouseEnter={() => {
                          router.prefetch('trips/aboba');
                        }}
                        key={i}
                      >
                        <td className='flex gap-[1.6rem] items-center py-[1.2rem] px-5 whitespace-nowrap'>
                          <Image
                            alt='passenger Alan Hummmmmming'
                            height={36}
                            width={36}
                            quality={90}
                            src='https://images.unsplash.com/photo-1610645011391-d9bfb02ed57a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG9sZCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D'
                            className='rounded-full h-[3.6rem] w-[3.6rem] object-cover'
                          />
                          <div>
                            <h2>Alan Humming</h2>
                            <button className='bg-muted-500 text-[8pt] text-muted-600 px-[0.8rem] py-[0.4rem] rounded cursor-pointer transition-all hover:bg-muted-700 w-fit'>
                              Contact Information
                            </button>
                          </div>
                        </td>
                        <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle'>
                          <time dateTime='21, January, 2021'>
                            21 January, 2021
                          </time>
                        </td>
                        <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle'>
                          Amman - JUST
                        </td>
                        <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle'>
                          42 / 50
                        </td>
                        <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle'>
                          3.4 / 5 <small className='text-muted-600'>(34)</small>
                        </td>
                        <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle'>
                          <button className='bg-muted-500 text-[8pt] text-muted-600 px-[0.8rem] py-[0.25rem] rounded cursor-pointer transition-all hover:bg-muted-700'>
                            XYZ8-R804
                          </button>
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
    </>
  );
}
