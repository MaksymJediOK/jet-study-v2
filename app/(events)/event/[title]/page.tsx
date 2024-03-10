import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AccordionList } from '@/components/AccordionList'
import Link from 'next/link'
import Image from 'next/image'
import { fetchData } from '@/lib/fetchData'
import { ExtendedEvent } from '@/types/event'

export default async function DynamicEvent({ params }: { params: { title: string } }) {
  // remake page considering fetched data
  const detailedEvent = await fetchData<ExtendedEvent>({ url: `/event/${params.title}` })

  return (
    <>
      <div className='flex gap-2 px-4 py-2'>
        <ChevronLeft />
        <h5 className='text-lg font-medium leading-6'>
          <Link href='/events' className='no-underline'>
            Усі події
          </Link>
        </h5>
      </div>
      <div className='flex gap-6 md:mt-5 lg:mt-10'>
        <div className='h-[778px] w-[580px] bg-neutral-600'>
          <img
            src='https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg'
            className='h-full w-full'
            alt='card image'
            width={580}
            height={778}
          />
        </div>
        <section className='lg:w-[590px]'>
          <h4 className='mb-2 scroll-m-20 text-base font-semibold uppercase leading-7 tracking-tight'>
            {detailedEvent.title}
          </h4>
          <p className='leading-[26px]'>
            {detailedEvent.longDescription}
          </p>
          <div className='mt-8 flex flex-col gap-1'>
            <p className='text-base leading-7'>
              Коли: <span className='font-semibold text-[#0F172A]'>25.01</span>
            </p>
            <p className='text-base leading-7'>
              Формат: <span className='font-semibold text-[#0F172A]'>Zoom</span>
            </p>
            <p className='text-base leading-7'>
              Тривалість: <span className='font-semibold text-[#0F172A]'>1 год 20 хв</span>
            </p>
            <p className='text-base leading-7'>
              Вартість: <span className='font-semibold text-[#0F172A]'>$17.10</span>
            </p>
          </div>
          <div className='flex flex-col gap-4 md:mb-14 md:mt-8 lg:mb-[115px] lg:mt-16'>
            <Button variant='outline' size='lg' className=' h-[56px] py-4 text-base font-medium'>
              Додати в кошик
            </Button>
            <Button size='lg' className=' h-[56px] py-4 text-base font-medium'>
              Купити
            </Button>
          </div>
          <AccordionList />
        </section>
      </div>
    </>
  )
}
