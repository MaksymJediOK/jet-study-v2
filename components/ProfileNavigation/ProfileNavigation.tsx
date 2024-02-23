'use client'
import { usePathname } from 'next/navigation'
import { ProfileLinks } from '@/types/constants'
import Link from 'next/link'
import { clsx } from 'clsx'

const ProfileNavigation = () => {
  const pathName = usePathname()
  return (
    <div className='flex w-[180px] flex-col gap-4'>
      <Link
        href='myevents'
        className={clsx(
          'text-base font-semibold leading-4 no-underline',
          pathName === ProfileLinks.MyEvents ? 'opacity-100' : 'opacity-50',
        )}
      >
        Мої події
      </Link>
      <Link
        href='profile'
        className={clsx(
          'text-base font-semibold leading-4 no-underline',
          pathName === ProfileLinks.PersonalInfo ? 'opacity-100' : 'opacity-50',
        )}
      >
        Особисті дані
      </Link>
      <h4 className='text-base font-semibold leading-4 opacity-50'>Вийти</h4>
    </div>
  )
}

export { ProfileNavigation }
