import React from 'react'

const BreadCrumbs = ({ eventTitle = 'ye' }: { eventTitle?: string }) => {
  return (
    <div className='flex gap-1 text-sm leading-[14px]'>
      <span className='opacity-50'>Усі події</span>
      <span>/</span>
      <span className='opacity-50'>Дизайн</span>
      <span>/</span>
      <span>{eventTitle}</span>
    </div>
  )
}

export { BreadCrumbs }
