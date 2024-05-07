import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { eUK } from '@/app/_font/eUK'

const ContactUsButton = () => {
  return (
    <div className='mt-[86px] rounded-[12px] bg-[#DCEAFF] p-8'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className={cn('mb-2 text-2xl leading-6', eUK.className)}>Все ще маєте запитання?</h3>
          <h4 className='text-base leading-[22px]'>
            Хочете дізнатися більше про подію?
            <br /> Будемо раді відповісти вам!
          </h4>
        </div>
        <Button
          size='lg'
          variant='ghost'
          className='h-[56px] w-[211px] rounded-[8px] bg-[#263FC3] py-2 text-[18px] font-medium leading-7 text-[#FFFFFF]
            transition delay-150 ease-in-out hover:bg-[#263FC3] hover:text-[#FFFFFF]'
        >
          Зв’язатися з нами
        </Button>
      </div>
    </div>
  )
}

export { ContactUsButton }
