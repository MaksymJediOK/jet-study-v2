'use client'

import React, { useEffect } from 'react'
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
import { useUserStore } from '@/store'

const CartDialog = ({ children }: { children: React.ReactNode }) => {
  const { items, setItems } = useBasketStore()
  const { setToken } = useUserStore()

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('basket') as string)
    const unparsedToken =localStorage.getItem('token') as string
    const token = unparsedToken ?  JSON.parse(unparsedToken) : ''
    if (storedCart) setItems(storedCart)
    if (token) setToken(token)
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
        <div className='grid grid-cols-1 items-center gap-4 py-4'>
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
