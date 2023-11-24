import InfoItem from '@/components/info-item';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import RatingStars from '@/components/rating-stars';

type TripProps = {
  params: {
    id: number;
  };
};

export default function Trip({ params }: TripProps) {
  const mapLegendItems = [
    {
      color: 'bg-von-blue-700',
      name: 'Departure',
    },
    {
      color: 'bg-von-green-500',
      name: 'Pick Up',
    },
    {
      color: 'bg-von-orange-500',
      name: 'Drop Off',
    },
    {
      color: 'bg-von-red-500',
      name: 'Arrival',
    },
  ];

  return (
    <>
      <header className='w-full px-page h-[8.5rem] bg-muted-400 flex justify-between items-center'>
        <section className='flex gap-[1.2rem] items-center'>
          <h1 className='text-[22pt] text-muted-700'>Trip Details</h1>
        </section>
        <div className='rounded-full h-[3.2rem] w-[3.2rem] bg-muted-700/50 flex items-center justify-center cursor-pointer'>
          <FontAwesomeIcon icon={faBell} size={'sm'} />
        </div>
      </header>

      <section className='mt-[6.4rem] flex flex-col md:flex-row gap-[3rem] ps-page'>
        <Image
          alt='driver'
          height={128}
          width={128}
          quality={90}
          src='https://images.unsplash.com/photo-1610645011391-d9bfb02ed57a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG9sZCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D'
          className='rounded-full h-[12.8rem] w-[12.8rem] object-cover'
        />
        <div>
          <h2 className='text-[48pt] text-on-primary font-bold'>
            Jimmy Johnson
          </h2>
          <button className='bg-muted-500 text-[8pt] text-muted-600 px-[1.6rem] py-[0.45rem] rounded cursor-pointer transition-all hover:bg-muted-700'>
            Contact Information
          </button>
        </div>
      </section>

      <section className='border-0 border-b-[0.5px] border-solid border-muted-700 flex items-center justify-center gap-[4.2rem] w-fit mx-auto mt-[6.4rem] px-4 pb-[2.4rem] flex-wrap'>
        <InfoItem title='Date'>
          <time dateTime='2000 12 12'>12 Sep, 2000</time>
        </InfoItem>
        <InfoItem title='Passengers'>42 / 50</InfoItem>
        <InfoItem title='Start Loading'>
          <time dateTime='10:09am'>10:09am</time>
        </InfoItem>
        <InfoItem title='Departure'>
          <time dateTime='10:15am'>10:15am</time>
        </InfoItem>
        <InfoItem title='Arrival'>
          <time dateTime='11:10am'>11:10am</time>
        </InfoItem>
        <InfoItem title='Route'>Amman - JUST</InfoItem>
        <InfoItem title='Rating'>3.5 / 5</InfoItem>
        <InfoItem title='Bus'>
          <button className='bg-muted-500 text-[8pt] text-muted-600 px-[0.8rem] py-[0.25rem] rounded cursor-pointer transition-all hover:bg-muted-700'>
            XYZ8-R804
          </button>
        </InfoItem>
      </section>

      <section className='mt-[12.8rem]'>
        <div className='flex gap-[2.8rem] justify-center'>
          {mapLegendItems.map((item, index) => (
            <div className='flex items-center gap-[0.4rem]' key={index}>
              <div
                className={`rounded-full h-[1.8rem] w-[1.8rem] ${item.color}`}
              />
              <h6 className='text-[10pt] text-on-primary'>{item.name}</h6>
            </div>
          ))}
        </div>

        <div className='w-full rounded-[50px] lg:rounded-[100px]  h-[85vh] bg-muted-500 mt-[1.6rem]' />
      </section>

      <section className='flex flex-col overflow-x-auto my-[6.4rem]'>
        <div className='mx-page'>
          <div className='inline-block min-w-full'>
            <div className='overflow-x-auto'>
              <table className='min-w-full'>
                <thead className='border-0 border-solid border-b mb-[2.6rem]'>
                  <tr>
                    <th
                      scope='col'
                      className='pb-[1.4rem] text-[20pt] text-muted-600 px-5'
                    >
                      Passenger
                    </th>
                    <th
                      scope='col'
                      className='pb-[1.4rem] text-[20pt] text-muted-600 px-5'
                    >
                      Check-in
                    </th>
                    <th
                      scope='col'
                      className='pb-[1.4rem] text-[20pt] text-muted-600 px-5'
                    >
                      Pick up
                    </th>
                    <th
                      scope='col'
                      className='pb-[1.4rem] text-[20pt] text-muted-600 px-5'
                    >
                      Review
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr className="border-0 border-b-[0.5px] border-solid border-on-primary" key={i}>
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
                      <td className='align-middle py-[1.2rem] px-5 whitespace-nowrap'>
                        <time dateTime='10:10am'>10:10am</time>
                      </td>
                      <td className='align-middle py-[1.2rem] px-5 whitespace-nowrap'>
                        <div className='flex items-center gap-[0.8rem]'>
                          <div
                            className={`rounded-full h-[1.8rem] w-[1.8rem] bg-von-blue-700`}
                          />
                          <h6 className='align-middle'>
                            North Amman Bus Station
                          </h6>
                        </div>
                      </td>
                      <td className='align-middle py-[1.2rem] px-5 whitespace-nowrap'>
                        <RatingStars rating={4} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
