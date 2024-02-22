import React from 'react'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  return <div className='hello'>{children}</div>
}
