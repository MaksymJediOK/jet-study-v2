import { fetchData } from '@/lib/fetchData'
import { Event } from '@/types/event'
import { cn } from '@/lib/utils'
import { eUK } from '@/app/_font/eUK'
import { ChevronRight } from 'lucide-react'
import { DefaultEventCard } from '@/components/Cards'

const EventsContentRow = async ({ url, title }: { url: string; title: string }) => {
  const monthEvents = await fetchData<Event[]>({ url })

  return (
    <div className='mt-[96px]'>
      <div className='flex w-full justify-between'>
        <h2 className={cn('mb-4 text-[30px] font-medium leading-9 tracking-[-0.225px]', eUK.className)}>
          {title}
        </h2>
        <div className='flex cursor-pointer items-center gap-1'>
          <span className='text-sm font-medium leading-[14px]'>Дивитись усі</span>
          <ChevronRight size={20} />
        </div>
      </div>
      <div className='mt-4 flex gap-6'>
        {monthEvents.map((event, index) => (
          <DefaultEventCard
            title={event.title}
            category={event.eventType}
            price={1200}
            contentType={event.eventType}
            thumbnail={event.thumbnail}
            key={event.id}
            imgId={index + 1}
          />
        ))}
      </div>
    </div>
  )
}

export { EventsContentRow }
