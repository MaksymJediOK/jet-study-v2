import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AccordionList } from '@/components/AccordionList'
import Link from 'next/link'

export default function DynamicEvent({ params }: { params: { title: string } }) {
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
        <div className='h-[778px] w-[580px] bg-neutral-600'>123</div>
        <section className='lg:w-[590px]'>
          <h4 className='mb-2 scroll-m-20 text-base font-semibold leading-7 tracking-tight'>
            People stopped telling jokes
          </h4>
          <p className='leading-[26px]'>
            Розглянемо ключові евристики, які визначають основні принципи ефективного дизайну інтерфейсів
            та дізнаємось, як ці принципи можна успішно застосовувати в сучасних веб-сайтах та додатках,
            щоб забезпечити зручність, ефективність та задоволення користувачів.
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