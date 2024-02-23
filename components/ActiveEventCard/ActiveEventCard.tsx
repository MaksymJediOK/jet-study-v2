const ActiveEventCard = () => {
  return (
    <div className='flex w-full items-center justify-between border-b border-black pb-4 pr-8'>
      <div className='flex gap-4'>
        <div className='flex flex-col gap-1'>
          <h2 className='scroll-m-20 text-xl font-bold leading-7 tracking-tight opacity-80 lg:text-2xl'>
            24.10
          </h2>
          <p className='text-base leading-[19px]'>19:30</p>
        </div>
        <div className='mb-2 w-[320px]'>
          <h3 className='text-base font-medium leading-[19px]'>
            10 евристик Якоба Нільсона та як їх застосовувати
          </h3>
          <div className='mt-2 leading-4'>Воркшоп</div>
        </div>
        <div>
          <h3 className='text-base font-medium leading-[19px]'>Оплачено</h3>
          {/*conditional*/}
          <div className='mt-2 leading-4'>20.10, сума 350.00 ₴ </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='leading-4 underline'>Місце проведення</p>
        <p className='leading-4 underline'>Запис події</p>
      </div>
    </div>
  )
}

export { ActiveEventCard }
