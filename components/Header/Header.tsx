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
          <li className='px-4 py-2'>Про нас</li>
          <li className='px-4 py-2'>Події</li>
          <li className='px-4 py-2'>FAQ</li>
        </ul>
        <div className='flex items-center gap-4'>
          <Button variant='secondary'>Стати інструктором</Button>
          <div className='p-2'>
            <CartDialog>
              <ShoppingCart size={16} className='cursor-pointer' />
            </CartDialog>
          </div>
        </div>
      </nav>
    </header>
  )
}

export { Header }
