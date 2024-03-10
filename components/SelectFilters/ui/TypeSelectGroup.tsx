import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const TypeSelectGroup = () => {
  return (
    <>
      <SelectTrigger className='w-[130px] rounded-3xl py-2 pl-6 pr-4'>
        <SelectValue className='text-base font-medium leading-[14px]' placeholder='Формат' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className='w-[130px]'>
          <SelectLabel>Формат</SelectLabel>
          <SelectItem value='1'>Вебінар</SelectItem>
          <SelectItem value='2'>Лекція</SelectItem>
          <SelectItem value='3'>Tutorial</SelectItem>
        </SelectGroup>
      </SelectContent>
    </>
  )
}

export { TypeSelectGroup }
