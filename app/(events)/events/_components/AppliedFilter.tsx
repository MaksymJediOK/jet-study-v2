import { fetchData } from '@/lib/fetchData'
import { Event } from '@/types/event'
import { DefaultEventCard } from '@/components/Cards'
import { cn, generateQueryString, getRandomNumber } from '@/lib/utils'
import { eUK } from '@/app/_font/eUK'
import { FilterParams } from '@/types'

const AppliedFilter = async (searchParams: Partial<FilterParams>) => {
  // rewrite endpoint on server
  const query = generateQueryString({
    categoryId: searchParams.category,
    eventTypeId: searchParams.format,
  })
  const currentEvents = await fetchData<Event[]>({ url: `/event/parameters${query}` })
  console.log(`/event/parameters${query}`)
  return (
    <div className='mx-auto mt-10 max-w-screen-xl text-main'>
      <h2 className={cn('mb-4 mt-10 text-[30px] font-medium leading-9 tracking-tighter', eUK.className)}>
        Події
      </h2>
      <div className='grid grid-cols-3 grid-rows-3 gap-6'>
        {currentEvents.map((event) => (
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
