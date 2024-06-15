'use client'

import { usePathname, useRouter } from 'next/navigation'
import { ProfileLinks } from '@/types/constants'
import Link from 'next/link'
import { clsx } from 'clsx'
import { useLogout } from '@/lib/profileRequests'
import { useUserStore } from '@/store'
import { storageKeys } from '@/constants'

const ProfileNavigation = () => {
  const { trigger: logout } = useLogout()
  const setToken = useUserStore((state) => state.setToken)
  const router = useRouter()
  const handleLogout = async () => {
    setToken('')
    localStorage.setItem(storageKeys.Token, '')
    await logout(null)
    router.push('/events')
  }
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
      <h4 className='cursor-pointer text-base font-semibold leading-4 opacity-50' onClick={handleLogout}>
        Вийти
      </h4>
    </div>
  )
}

export { ProfileNavigation }
