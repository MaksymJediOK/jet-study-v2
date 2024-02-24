import React from 'react'

type AuthLayout = {
  children?: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayout) {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='container w-[310px] p-6'>{children}</div>
    </div>
  )
}
