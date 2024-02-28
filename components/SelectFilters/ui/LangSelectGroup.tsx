import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'

const LangSelectGroup = () => {
  return (
    <>
      <SelectTrigger className='w-[125px] rounded-3xl py-2 pl-6 pr-4'>
        <SelectValue className='text-base font-medium leading-[14px]' placeholder='Мова' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className='w-[125px]'>
          <SelectLabel>Мова</SelectLabel>
          <SelectItem value='ua'>Укр</SelectItem>
          <SelectItem value='eng'>Англ</SelectItem>
        </SelectGroup>
      </SelectContent>
    </>
  )
}

export { LangSelectGroup }