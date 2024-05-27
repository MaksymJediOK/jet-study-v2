import React from 'react'
import { shortText } from '@/lib/utils'
import { BasketItem } from '@/types/event'

const BasketListItem = ({ title, price }: Omit<BasketItem, 'eventId'>) => {
  return (
    <div className='flex max-w-72  flex-col gap-1 rounded-lg border-2 border-gray-400 px-5 py-3 text-sm'>
      <p> {shortText(title ?? '', 15)}</p>
      <p> Price: {price}</p>
    </div>
  )
}

export { BasketListItem }
