import PrimaryButton from "@/components/primary-button";

export default function CreateBus() {
  return (
    <>
      <header className='w-full ps-page h-[8.5rem] bg-muted-400 flex justify-between items-center'>
        <section className='flex gap-[1.2rem] items-center'>
          <h1 className='text-[22pt] text-muted-700 w-max me-4'>
            Add Bus
          </h1>
        </section>
        <PrimaryButton className='h-full w-[25rem]'>Save</PrimaryButton>
      </header>

      <main className='flex flex-col justify-center xl:flex-row mx-page my-[6.4rem] gap-[5.6rem]'>
        <section className='flex-grow max-w-[65rem]'>
          <h2 className='mb-[3.6rem] text-[18pt] font-medium text-on-primary'>
            Bus Details
          </h2>
          <form className='flex flex-col gap-[3.2rem]'>
            <input
              type='text'
              name='model'
              className='text-on-primary placeholder:text-muted-700 w-full p-4 text-[14pt] bg-muted-400 border-0 border-b border-on-primary border-solid focus:border-secondary focus:border-[2.5px] transition-all'
              placeholder='Model'
            />
            <input
              type='text'
              name='plate_no'
              className='text-on-primary placeholder:text-muted-700 w-full p-4 text-[14pt] bg-muted-400 border-0 border-b border-on-primary border-solid focus:border-secondary focus:border-[2.5px] transition-all'
              placeholder='Plate Number'
            />
            <select
              name='plate_no'
              className='text-on-primary placeholder:text-muted-700 w-full p-4 text-[14pt] bg-muted-400 border-0 border-b border-on-primary border-solid focus:border-secondary focus:border-[2.5px] transition-all'
            >
              <option disabled>Driver</option>
              <option value="driver_x">Driver Name</option>
              <option value="driver_x">Driver Name</option>
              <option value="driver_x">Driver Name</option>
            </select>
            <input
              type='number'
              min={0} 
              name='capacity'
              className='text-on-primary placeholder:text-muted-700 w-full p-4 text-[14pt] bg-muted-400 border-0 border-b border-on-primary border-solid focus:border-secondary focus:border-[2.5px] transition-all'
              placeholder='Capacity'
            />
          </form>
        </section>
      </main>
    </>
  );
}
