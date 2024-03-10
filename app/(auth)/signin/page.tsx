'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SignInForm } from '@/components/UserAuthForm'
import { Button } from '@/components/ui/button'
import { useGoogleLogin } from '@react-oauth/google'
import useSWRMutation from 'swr/mutation'
import { loginViaGoogle } from '@/lib/authMutations'

export default function SignInPage() {
  const { trigger, isMutating } = useSWRMutation('/auth/login-with-google', loginViaGoogle)
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await trigger({
        credential: tokenResponse.access_token,
      })
      console.log(res)
    },
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
      <SignInForm />
    </>
  )
}
