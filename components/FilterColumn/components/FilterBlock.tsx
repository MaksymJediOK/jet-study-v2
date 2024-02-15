import { RadioGroup } from '@/components/ui/radio-group'
import { RadioButton } from './RadioButton'

const FilterBlock = () => {
  return (
    <div className='mt-4'>
      <div className='my-4 text-base font-medium'>Напрямки</div>
      <RadioGroup defaultValue='comfortable'>
        <RadioButton />
        <RadioButton />
      </RadioGroup>
    </div>
  )
}

export { FilterBlock }
