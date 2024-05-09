import Image from 'next/image'
import { cn } from '@/lib/utils'
import { eUK } from '@/app/_font/eUK'
import { ChevronRight } from 'lucide-react'
import { EventCard } from '@/types/event'
import Link from 'next/link'

const DefaultEventCard = ({
  title,
  category,
  contentType,
  price,
  thumbnail,
  imgId,
  linkId,
}: EventCard & { imgId: number; linkId: number }) => {
  return (
    <div className='flex w-[384px] flex-col gap-[20px] rounded-[8px] p-4 shadow-lg'>
      <Image
        src={`/placeholders/placeholder_card_${imgId}.png`}
        alt='card image'
        width={352}
        height={225}
      />
      <div>
        <div className='flex justify-between uppercase'>
          <div className='flex items-center gap-2'>
            <p className='text-sm leading-[14px] opacity-70'>{category} </p>
            <svg xmlns='http://www.w3.org/2000/svg' width='3' height='4' viewBox='0 0 3 4' fill='none'>
              <circle opacity='0.7' cx='1.5' cy='2' r='1.5' fill='#212121' />
            </svg>
            <p className='text-sm leading-[14px] opacity-70'>{contentType} </p>
          </div>
          <p className='text-sm leading-[14px] opacity-70 '>24.02 </p>
        </div>
        <h4
          className={cn(
            'mt-2 h-[67px] text-lg leading-[22px] tracking-[-0.36px] opacity-90',
            eUK.className,
          )}
        >
          {title}
        </h4>
      </div>
      <div className='flex justify-between'>
        <h4 className='text-2xl font-semibold leading-6'>{price} ₴</h4>
        <div className='flex items-center'>
          <Link href={`/event/${linkId}`} className='text-sm font-semibold no-underline'>
            Детальніше
          </Link>
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  )
}

export { DefaultEventCard }
