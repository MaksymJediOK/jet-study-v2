import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ProfileNavigation } from '@/components/ProfileNavigation'

type ProfileLayoutProps = {
  children?: React.ReactNode
}

export default async function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1 mt-8'>
        <div className='container flex gap-6'>
          <ProfileNavigation />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
