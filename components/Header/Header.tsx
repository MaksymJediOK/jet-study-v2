import './Header.scss'
import { ShoppingCart } from 'lucide-react'
import { AuthView, CartDialog } from './ui'
import { cn } from '@/lib/utils'
import { eUK } from '@/app/_font/eUK'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='border-b-[1px] border-solid border-gray-200 px-16 py-[30px]'>
      <nav className='flex items-center justify-between'>
        <span className={cn('header-text', eUK.className)}>JetStudy</span>
        <ul className='flex'>
          <Link className='px-4 py-2 no-underline' href='/events'>
            Події
          </Link>
          <Link className='px-4 py-2 no-underline' href='/events'>
            Стати лектором
          </Link>
          <Link className='px-4 py-2 no-underline' href='/events'>
            FAQ
          </Link>
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
          <AuthView />
        </div>
      </nav>
    </header>
  )
}

export { Header }
