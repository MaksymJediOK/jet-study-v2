import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const CategorySelectGroup = () => {
  return (
    <>
      <SelectTrigger className='w-[145px] rounded-3xl py-2 pl-6 pr-4'>
        <SelectValue className='text-base font-medium leading-[14px]' placeholder='Напрямки' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className='w-[145px]'>
          <SelectLabel>Напрямки</SelectLabel>
          <SelectItem value='design'>Дизайн</SelectItem>
          <SelectItem value='ai'>ШІ</SelectItem>
          <SelectItem value='finances'>Фінанси</SelectItem>
        </SelectGroup>
      </SelectContent>
    </>
  )
}

export { CategorySelectGroup }
