import { X } from 'lucide-react'

const CartItem = () => {
  return (
    <div className='flex justify-between pb-4 pr-8 items-center border-b border-black w-[895px]'>
      <div className='w-[485px]'>
        <h3 className='mb-2 text-[20px] font-medium leading-6'>
          10 евристик Якоба Нільсона та як їх застосовувати
        </h3>
        <p className='leading-[19px]'>Вебінар</p>
      </div>
      <h2 className='text-xl font-semibold leading-6'>350.00 ₴</h2>
      <X size={16} className='m-2 cursor-pointer' />
    </div>
  )
}

export { CartItem }
