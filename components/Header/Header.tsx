import './Header.scss'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { CartDialog } from './ui'
import { cn } from '@/lib/utils'
import { eUK } from '@/app/_font/eUK'

const Header = () => {
  return (
    <header className='border-b-[1px] border-solid border-gray-200 px-16 py-[30px]'>
      <nav className='flex items-center justify-between'>
        <span className={cn('header-text', eUK.className)}>JetStudy</span>
        <ul className='flex'>
          <li className='px-4 py-2'>Події</li>
          <li className='px-4 py-2'>Стати лектором</li>
          <li className='px-4 py-2'>FAQ</li>
        </ul>
        <div className='flex items-center gap-2'>
          <div className='px-4 py-2'>
            <CartDialog>
              <div className='flex cursor-pointer items-center gap-2'>
                <ShoppingCart size={16} className='cursor-pointer' />
                <h4 className='font-medium leading-[24px]'>Корзина</h4>
              </div>
            </CartDialog>
          </div>
          <div className='ml-2 px-4 py-2'>
            <h4 className='text-sm font-medium leading-[14px]'>Увійти</h4>
          </div>
          <Button
            size='lg'
            variant='ghost'
            className='h-[40px] rounded-[8px] bg-[#263FC3] py-2 font-semibold leading-[14px] text-[#FFFFFF]
            transition delay-150 ease-in-out hover:bg-[#263FC3] hover:text-[#FFFFFF]'
          >
            Зареєструватись
          </Button>
        </div>
      </nav>
    </header>
  )
}

export { Header }
