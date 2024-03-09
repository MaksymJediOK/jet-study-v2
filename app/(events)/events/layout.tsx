import React from 'react'

type EventsLayoutProps = {
  children?: React.ReactNode
}

export default async function EventsLayout({ children}: EventsLayoutProps) {
  return (
    <>
      {children}
    </>
  )
}
