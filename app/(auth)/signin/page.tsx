'use client'

import Link from 'next/link'
import Image from 'next/image'
import { UserAuthForm } from '@/components/UserAuthForm'
import { Button } from '@/components/ui/button'
import { useGoogleLogin } from '@react-oauth/google'

export default function SignInPage() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (errorResponse) => console.log(errorResponse),
  })

  return (
    <>
      <h3 className='w-full scroll-m-10 text-[28px] font-semibold leading-9 tracking-tighter'>
        Вітаємо у JetStudy
      </h3>
      <p className='mt-1 text-base leading-7 tracking-tight'>
        Вперше на сайті?
        <Link href='/signup' className='ml-2 text-[#4176F3] underline'>
          Реєстрація
        </Link>
      </p>
      <Button
        variant='outline'
        className='mt-4 flex w-[95%] items-center justify-center gap-2  px-4 py-2'
        onClick={() => login()}
      >
        <Image src='/google.svg' width={16} height={16} alt='google icon' />
        <span className='text-sm font-medium leading-6 text-[#0F172A] '>Увійти через Google </span>
      </Button>
      <h4 className='my-3 text-center text-base leading-7 tracking-tighter opacity-50'>Або</h4>
      <UserAuthForm>
        <p className='mt-3 leading-7 text-[#0F172A] underline opacity-70'>Забули пароль?</p>
      </UserAuthForm>
    </>
  )
}
