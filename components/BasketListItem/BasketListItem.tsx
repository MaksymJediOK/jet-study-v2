import React from 'react'
import { shortText } from '@/lib/utils'
import { BasketItem } from '@/types/event'
import { X } from 'lucide-react'
import { useBasketStore } from '@/store/BasketStore'

const BasketListItem = ({ eventId, title, price }: BasketItem) => {
  const removeFromBasket = useBasketStore((state) => state.removeItemFromBasket)

  return (
    <div className='flex max-w-72  flex-col gap-1 rounded-lg border-2 border-gray-300 px-5 py-3 text-sm '>
      <div className='flex items-center justify-between'>
        <p className='font-bold'> {shortText(title ?? '', 30)}</p>
        <X className='h-4 w-4 cursor-pointer' onClick={() => removeFromBasket(eventId)} />
      </div>
      <p> Price: {price} uah</p>
    </div>
  )
}

export { BasketListItem }
