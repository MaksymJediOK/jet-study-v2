import { ActiveEventCard } from '@/components/ActiveEventCard'

export default function MyEventsPage() {
  return (
    <div className='w-[792px]'>
      <h3 className='text-2xl font-semibold tracking-tighter mb-4'>Активні події</h3>
      <div className='flex flex-col gap-4'>
        <ActiveEventCard />
        <ActiveEventCard />
      </div>
      {/*parallel routes*/}
    </div>
  )
}
