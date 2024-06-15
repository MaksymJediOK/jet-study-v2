'use client'

import React from 'react'
import { useUserStore } from '@/store'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { User as UserIcon } from 'lucide-react'

const AuthView = () => {
  const token = useUserStore((state) => state.token)
  return (
    <>
      {!!token ? (
        <Link href='/profile' className='mx-2'>
          <UserIcon size={16} className='cursor-pointer' />
        </Link>
      ) : (
        <>
          <div className='ml-2 px-4 py-2'>
            <h4 className='text-sm font-medium leading-[14px]'>
              <Link className='no-underline' href='/signin'>
                Увійти
              </Link>
            </h4>
          </div>
          <Button
            size='lg'
            variant='ghost'
            className='h-[40px] rounded-[8px] bg-[#263FC3] py-2 font-semibold leading-[14px] text-[#FFFFFF]
            transition delay-150 ease-in-out hover:bg-[#263FC3] hover:text-[#FFFFFF]'
          >
            <Link className='no-underline' href='/signup'>
              Зареєструватись
            </Link>
          </Button>
        </>
      )}
    </>
  )
}

export { AuthView }
