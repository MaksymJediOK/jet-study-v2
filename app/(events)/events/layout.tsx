import React from 'react'

type EventsLayoutProps = {
  children?: React.ReactNode
}

export default async function EventsLayout({ children }: EventsLayoutProps) {
  return <div className='hello'>{children}</div>
}
