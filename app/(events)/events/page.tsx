import { SearchInput } from '@/components/ui/input'
import { SelectFilters } from '@/components/SelectFilters'
import { cn } from '@/lib/utils'
import { eUK } from '@/app/_font/eUK'
import { BigEventCard, DefaultEventCard } from '@/components/Cards'

export default function EventsPage() {
  return (
    <div className='container mx-auto mt-10 max-w-screen-xl text-main'>
      <h2 className={cn('text-[30px] font-medium leading-9 tracking-tighter', eUK.className)}>
        Знайди те що тебе цікавить
      </h2>
      <div className='mt-4 flex items-center justify-between'>
        <SelectFilters />
        <SearchInput />
      </div>
      <div className='mt-10'>
        <h2 className={cn('text-[30px] font-medium leading-9 tracking-tighter mb-4', eUK.className)}>
          Найближчі події
        </h2>
        <BigEventCard />
        <div className='mt-6 flex gap-6'>
            <DefaultEventCard/>
            <DefaultEventCard/>
            <DefaultEventCard/>
        </div>
      </div>
    </div>
  )
}
