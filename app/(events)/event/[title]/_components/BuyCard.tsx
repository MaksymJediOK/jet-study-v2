import React from 'react'
import { Button } from '@/components/ui/button'

const BuyCard = () => {
  return (
    <div>
      <div className='max-w-[450px] rounded-[12px] border-[1px] border-[#00000033] p-8 leading-7 text-[#0F172A]'>
        <h2 className='text-[23px] font-semibold tracking-[-0.115px] '>
          10 евристик Якоба Нільсона та їх застосування в веб-інтерфейсах
        </h2>
        <div className='mt-4 flex items-center justify-between pb-4'>
          <h4 className='text-[20px] tracking-[-0.1px]'>25 липня, 19:30</h4>
          <h4 className='text-[20px] font-semibold tracking-[-0.1px]'>350.00 грн</h4>
        </div>
        <div className='my-4'>
          <Button
            size='lg'
            variant='ghost'
            className='h-[56px] w-full rounded-[8px] bg-[#263FC3] py-2 text-[18px] font-medium leading-7 text-[#FFFFFF]
            transition delay-150 ease-in-out hover:bg-[#263FC3] hover:text-[#FFFFFF]'
          >
            Купити квиток
          </Button>
        </div>
        <h5 className='text-sm'>
          Подія проходить онлайн у Zoom конференції. <br />
          Тривалість 1 год 20 хв.
        </h5>
      </div>
    </div>
  )
}

export { BuyCard }
