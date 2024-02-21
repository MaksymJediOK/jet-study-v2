import { FilterBlock } from '@/components/FilterColumn'
import { FreeSwitcher } from '@/components/FreeSwitcher'
import { SearchInput } from '@/components/ui/input'

export default function EventPage() {
  return (
    <div className='container mx-auto mt-10 max-w-screen-xl '>
      <div className='ml-[95px] flex gap-12'>
        <div>
          <h3 className='text-2xl tracking-tight'>Фільтри</h3>
          <FilterBlock />
        </div>
        <div className='w-[100%]'>
          <div className='flex items-center justify-between '>
            <FreeSwitcher />
            <div className='w-80'>
              <SearchInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
