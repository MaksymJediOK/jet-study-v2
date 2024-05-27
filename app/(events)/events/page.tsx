import { SearchInput } from '@/components/ui/input'
import { SelectFilters } from '@/components/SelectFilters'
import { cn } from '@/lib/utils'
import { eUK } from '@/app/_font/eUK'
import { BigEventCard, DefaultEventCard } from '@/components/Cards'
import { Event } from '@/types/event'
import { fetchData } from '@/lib/fetchData'
import { EventsContentRow } from '@/app/(events)/events/_components/EventsContentRow'
import { AppliedFilter } from '@/app/(events)/events/_components/AppliedFilter'

export const revalidate = 3600
export default async function EventsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  let currentEvents = await fetchData<Event[]>({ url: '/event' })
  currentEvents = currentEvents.slice(0, 3)

  return (
    <div className='container mx-auto mt-10 max-w-screen-xl text-main'>
      <h2 className={cn('text-[30px] font-medium leading-9 tracking-tighter', eUK.className)}>
        Знайди те що тебе цікавить
      </h2>
      <div className='mt-4 flex items-center justify-between'>
        <SelectFilters />
        <SearchInput />
      </div>
      {Object.keys(searchParams).length > 0 ? (
        <AppliedFilter {...searchParams} />
      ) : (
        <>
          <div className='mt-10'>
            <h2 className={cn('mb-4 text-[30px] font-medium leading-9 tracking-tighter', eUK.className)}>
              Найближчі події
            </h2>
            <BigEventCard />
            <div className='mt-6 flex gap-6'>
              {currentEvents.map((event, index) => (
                <DefaultEventCard
                  title={event.title}
                  category={event.eventType}
                  price={1200}
                  contentType={event.eventType}
                  thumbnail={event.thumbnail}
                  key={event.id}
                  imgId={index + 1}
                  linkId={event.id}
                />
              ))}
            </div>
          </div>
          <EventsContentRow title='Цього місяця' url='/event/get-this-month-events' />
          <EventsContentRow title='Наступного місяця' url='/event/get-after-month-events' />
        </>
      )}
    </div>
  )
}
