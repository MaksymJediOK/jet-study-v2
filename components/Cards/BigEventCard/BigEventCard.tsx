import Image from 'next/image'
import Placeholder from '../../.././public/placeholders/placeholder_1.png'
import { cn } from '@/lib/utils'
import { eUK } from '@/app/_font/eUK'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

const BigEventCard = () => {
  return (
    <section className='relative w-[1200px] text-main'>
      <Image src={Placeholder} className='object-cover' alt='card image' />
      <div className='absolute left-[37px] top-[59px]'>
        <div className='flex gap-[147px]'>
          <div className='flex items-center gap-2'>
            <p className='text-sm font-semibold uppercase leading-[14px]'>Дизайн</p>
            <svg xmlns='http://www.w3.org/2000/svg' width='3' height='4' viewBox='0 0 3 4' fill='none'>
              <circle cx='1.5' cy='2' r='1.5' fill='#212121' />
            </svg>
            <p className='text-sm font-semibold uppercase leading-[14px]'>Вебінар</p>
          </div>
          <p className='text-sm font-semibold uppercase leading-[14px]'>Четвер 24.02</p>
          <p className='text-sm font-semibold uppercase leading-[14px]'>1200 ₴</p>
        </div>
        <h3
          className={cn('mt-4 w-[625px] text-[44px] font-bold leading-[44px] opacity-90', eUK.className)}
        >
          Психологія емоційного інтелекту: розуміння, розвиток та застосування в практиці
        </h3>
        <Button
          size='lg'
          className='mt-8 rounded-3xl bg-[#9E53EA] px-8 py-4 text-white hover:bg-[#9E53EA]'
        >
          <div className='flex items-center gap-1'>
            <span className='text-sm font-semibold leading-[14px]'>Дізнатись більше</span>
            <ChevronRight width={20} height={20} />
          </div>
        </Button>
      </div>
    </section>
  )
}

export { BigEventCard }
