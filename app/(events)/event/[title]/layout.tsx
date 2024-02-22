import React from 'react'

type LayoutProps = {
  children?: React.ReactNode
  similar: React.ReactNode
}

export default function Layout({ children, similar }: LayoutProps) {
  return (
    <>
      {children}
      {similar}
    </>
  )
}
