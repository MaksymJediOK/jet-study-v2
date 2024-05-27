'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { useBasketStore } from '@/store/BasketStore'
import { BasketItem } from '@/types/event'
import { useToast } from '@/components/ui/use-toast'

const AddToBasketButton = ({ eventId, title, price }: BasketItem) => {
  const addToBasket = useBasketStore((state) => state.addItemToBasket)
  const { toast } = useToast()

  const handleBasketAddToBasket = () => {
    addToBasket({ eventId, title, price })
    toast({
      title: 'Успішно додано до кошика',
      description: 'Події було додано у кошик, звідки можна оплатити',
    })
  }

  return (
    <Button
      size='lg'
      variant='ghost'
      className='h-[56px] w-full rounded-[8px] bg-[#263FC3] py-2 text-[18px] font-medium leading-7 text-[#FFFFFF]
            transition delay-150 ease-in-out hover:bg-[#263FC3] hover:text-[#FFFFFF]'
      onClick={handleBasketAddToBasket}
    >
      Купити квиток
    </Button>
  )
}

export { AddToBasketButton }
