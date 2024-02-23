import { CartItem } from '@/components/CartItem'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CartPage() {
  return (
    <section className='ml-auto mr-auto mt-8 flex w-[895px] gap-6 xl:ml-[360px] xl:mr-[360px]'>
      <div>
        <h2 className='mb-2 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0'>Кошик</h2>
        <p className='mb-8 text-lg leading-[22px]'>3 товара</p>
        <div className='flex flex-col gap-4'>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div className='flex flex-col gap-10'>
        <div className='flex w-[282px] flex-col gap-4'>
          <h3 className='text-2xl font-semibold tracking-tighter'>Сума</h3>
          <div className='flex w-[282px] justify-between text-lg leading-[22px]'>
            <p>3 товара</p>
            <span>700$</span>
          </div>
          <div className='flex w-[282px] justify-between text-lg leading-[22px]'>
            <p>Знижка</p>
            <span>0.00 $</span>
          </div>
          <Button className='h-[48px] py-3 text-base leading-6'> Оформити</Button>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-lg leading-[22px]'>Промокод</p>
          <Input placeholder='Код промокоду' />
          <Button variant='outline' className='mt-1 h-[48px] py-3 text-base leading-6'>
            Застосувати
          </Button>
        </div>
      </div>
    </section>
  )
}
