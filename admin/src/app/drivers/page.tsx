import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Drivers() {
  return (
    <>
      <header className='w-full px-page h-[8.5rem] bg-muted-400 flex justify-between items-center'>
        <section className='flex gap-[1.2rem] items-center'>
          <h1 className='text-[22pt] text-muted-700'>Drivers</h1>
        </section>
        <div className='rounded-full h-[3.2rem] w-[3.2rem] bg-muted-700/50 flex items-center justify-center cursor-pointer'>
          <FontAwesomeIcon icon={faBell} size={'sm'} />
        </div>
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
                        Name
                      </th>
                      <th scope='col' className='pb-[1.4rem] px-5'>
                        Mobile
                      </th>
                      <th scope='col' className='pb-[1.4rem] px-5'>
                        Bus
                      </th>
                      <th scope='col' className='pb-[1.4rem] px-5'>
                        License Number
                      </th>
                      <th scope='col' className='pb-[1.4rem] px-5'>
                        Trips
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
                            <Image
                              alt='driver John Johnson'
                              height={36}
                              width={36}
                              quality={90}
                              src='https://images.unsplash.com/photo-1610645011391-d9bfb02ed57a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG9sZCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D'
                              className='rounded-full h-[3.6rem] w-[3.6rem] object-cover'
                            />
                            <h2>Alan Humming</h2>
                          </td>
                          <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle'>
                            <a href='tel:1234567890'>123 456 7890</a>
                          </td>
                          <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle'>
                            <Link href="/busses" className='bg-muted-500 text-[8pt] text-muted-600 px-[0.8rem] py-[0.25rem] rounded cursor-pointer transition-all hover:bg-muted-700'>
                              XYZ8-R804
                            </Link>
                          </td>
                          <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle'>
                            15-2345678
                          </td>
                          <td className='whitespace-nowrap py-[1.2rem] px-5 align-middle italic transition-all hover:font-medium underline underline-offset-2'>
                            <Link href='trips?driver=47'>67</Link>
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
