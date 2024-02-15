import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      {/*<Footer />*/}
    </div>
  )
}
