'use client'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const RadioButton = ({ title }: { title: string }) => {
  return (
    <div className='flex w-[180px] items-center justify-between'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value={title} id={title} />
        <Label htmlFor={title}>{title}</Label>
      </div>
      <div className='text-sm font-medium'>12</div>
    </div>
  )
}

export { RadioButton }
