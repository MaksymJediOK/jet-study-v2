import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className='flex gap-6'>
      <div className='flex flex-col space-y-3'>
        <Skeleton className='h-[176px] w-[282px] rounded-xl' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[282px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
      <div className='flex flex-col space-y-3'>
        <Skeleton className='h-[176px] w-[282px] rounded-xl' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[282px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
    </div>
  )
}
