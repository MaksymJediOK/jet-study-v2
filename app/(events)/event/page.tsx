import { FilterColumn } from '@/components/FilterColumn'

export default function EventPage() {
  return (
    <div className='container mx-auto mt-10 max-w-screen-xl '>
      <div className='ml-[95px] flex gap-12'>
        <FilterColumn />
        <div>other stuff</div>
      </div>
    </div>
  )
}
