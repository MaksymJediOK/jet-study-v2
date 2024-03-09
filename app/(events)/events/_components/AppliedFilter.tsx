import { fetchData } from '@/lib/fetchData'
import { Event } from '@/types/event'
import { DefaultEventCard } from '@/components/Cards'
import { cn, getRandomNumber } from '@/lib/utils'
import { eUK } from '@/app/_font/eUK'

const AppliedFilter = async () => {
  const currentEvents = await fetchData<Event[]>({ url: '/event' })
  return (
    <div className='container mx-auto mt-10 max-w-screen-xl text-main'>
      <h2 className={cn('mb-4 mt-10 text-[30px] font-medium leading-9 tracking-tighter', eUK.className)}>
        Події
      </h2>
      <div className='grid grid-cols-3 grid-rows-3 gap-6'>
        {currentEvents.map((event, index) => (
          <DefaultEventCard
            title={event.title}
            category={event.eventType}
            price={1200}
            contentType={event.eventType}
            thumbnail={event.thumbnail}
            key={event.id}
            imgId={getRandomNumber()}
          />
        ))}
      </div>
    </div>
  )
}

export { AppliedFilter }
