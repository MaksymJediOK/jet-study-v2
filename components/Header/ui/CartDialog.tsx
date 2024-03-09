import React from 'react'
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

const CartDialog = ({ children }: { children: React.ReactNode }) => (
  <Sheet>
    <SheetTrigger asChild>{children}</SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle className='text-center text-[30px] font-semibold leading-[36px] tracking-tight'>
          Кошик
        </SheetTitle>
      </SheetHeader>
      <div className='grid gap-4 py-4'>Кошик порожній 😢</div>
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

export { CartDialog }
