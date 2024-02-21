import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const FreeSwitcher = () => {
  return (
    <div className='my-2 flex items-center space-x-2'>
      <Label htmlFor='airplane-mode'>Без оплати</Label>
      <Switch id='airplane-mode' />
    </div>
  )
}

export { FreeSwitcher }
