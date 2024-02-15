import { RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

type BlockProps = {
  title: string
  categories: string[]
}

const RadioButton = () => {
  return (
    <div className='flex w-[180px] items-center justify-between'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='default' id='r1' />
        <Label htmlFor='r1'>Default</Label>
      </div>
      <div className='text-sm font-medium'>12</div>
    </div>
  )
}

export { RadioButton }
