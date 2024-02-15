import './Header.scss'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

const Header = () => {
  return (
    <header className='px-16 py-[30px] border-solid border-b-[1px] border-gray-200'>
      <nav className='flex items-center justify-between'>
        <span className='header-text'>JetStudy</span>
        <ul className='flex'>
          <li className='px-4 py-2'>Про нас</li>
          <li className='px-4 py-2'>Події</li>
          <li className='px-4 py-2'>FAQ</li>
        </ul>
        <div className='flex items-center gap-4'>
          <Button variant='secondary'>Стати інструктором</Button>
          <div className='p-2'>
            <ShoppingCart size={16} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export { Header }
