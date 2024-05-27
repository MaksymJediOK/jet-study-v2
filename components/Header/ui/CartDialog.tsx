'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { BasketListItem } from '@/components/BasketListItem'
import { useBasketStore } from '@/store/BasketStore'

const CartDialog = ({ children }: { children: React.ReactNode }) => {
  const { items, setItems } = useBasketStore()

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('basket') as string)
    if (storedCart) {
      setItems(storedCart)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(items))
  }, [items])

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='text-center text-[30px] font-semibold leading-[36px] tracking-tight'>
            Кошик
          </SheetTitle>
        </SheetHeader>
        <div className='grid grid-cols-1 gap-4 py-4'>
          {items.length > 0 ? (
            items.map((item) => {
              return <BasketListItem key={item.eventId} {...item} />
            })
          ) : (
            <p>Кошик порожній 😢</p>
          )}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className='flex w-full flex-col items-center justify-center gap-8'>
              <Separator />
              <Button type='submit' className='w-[296px]'>
                Змінити кошик
              </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
export { CartDialog }
