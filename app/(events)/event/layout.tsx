import React from 'react'

type  EventProps = {
  children?: React.ReactNode
}

export default function EventLayout({children}: EventProps) {
  return (
    <div className='container mt-10'>
      {children}
    </div>
  )
}
