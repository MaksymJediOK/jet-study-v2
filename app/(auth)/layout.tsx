import React from 'react'
import {GoogleOAuthProvider} from '@react-oauth/google'

type AuthLayout = {
  children?: React.ReactNode
}

export default async function AuthLayout({ children }: AuthLayout) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID || ''}>
      <div className='flex h-screen items-center justify-center'>
        <div className='container w-[310px] p-6'>{children}</div>
      </div>
    </GoogleOAuthProvider>
  )
}
