import { cn } from '@/lib/utils'
import { eUK } from '@/app/_font/eUK'
import { PersonalDataForm } from './_components/PersonalDataForm'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { ApplePayIcon, GooglePayIcon } from './_components/svgElements'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Separator } from '@/components/ui/separator'

export default function Checkout() {
  return (
    <>
      <section className='container ml-auto mr-auto mt-8 grid grid-cols-2 grid-rows-1'>
        <div className=''>
          <h2 className={cn('mt-10 text-[28px] leading-[28px]', eUK.className)}>Дані клієнта</h2>
          <p className='my-4 text-[14px] leading-[14px] text-[#0F172A] opacity-70'>
            Ми автозаповнили дані з вашого профілю. Перевірте їх правильність.
          </p>
          <PersonalDataForm />
          <h2 className='mt-10 text-[30px] font-semibold leading-[36px] tracking-[-0.225px]'>Оплата</h2>
          <p className='my-4 mb-4 mt-3 text-[14px] leading-[20px] text-[#0F172A] opacity-70'>
            Оберіть зручний вам метод оплати.
          </p>
          <RadioGroup defaultValue='comfortable' className='w-[225px] gap-4'>
            <div className='flex items-center space-x-2 rounded-[8px] border px-6 py-[13px]'>
              <RadioGroupItem value='default' id='r1' />
              <Label htmlFor='r1'>
                <div className='flex items-center gap-2'>
                  <span>Сплатити з </span>
                  <GooglePayIcon />
                </div>
              </Label>
            </div>
            <div className='flex items-center space-x-2 rounded-[8px] border px-6 py-[13px]'>
              <RadioGroupItem value='comfortable' id='r2' />
              <Label htmlFor='r2'>
                <div className='flex items-center gap-2'>
                  <span>Сплатити з </span>
                  <ApplePayIcon />
                </div>
              </Label>
            </div>
            <div className='flex items-center space-x-2 rounded-[8px] border px-6 py-[13px]'>
              <RadioGroupItem value='compact' id='r3' />
              <Label htmlFor='r3'>Банківською карткою</Label>
            </div>
          </RadioGroup>
          <Button
            size='lg'
            variant='ghost'
            className='mt-6 h-[56px] w-[475px] rounded-[8px] bg-[#263FC3] py-2 text-[18px] font-medium leading-7 text-[#FFFFFF]
            transition delay-150 ease-in-out hover:bg-[#263FC3] hover:text-[#FFFFFF]'
          >
            Сплатити замовлення
          </Button>
          <p className='mt-2 text-[12px] leading-[140%] text-[#0F172A] opacity-70'>
            Після проведення оплати ми надішлемо на реєстровану вами пошту лист з <br /> детальною
            інформацією.
          </p>
        </div>
        <div className='w-[385px]'>
          <h2 className={cn('mt-10 text-[28px] leading-[28px]', eUK.className)}>Дані замовлення</h2>
          <div className='mt-4 flex items-center justify-between text-[#0F172A]'>
            <p className='text-[14px] leading-[100%]'>Сума замовлення</p>
            <p className='text-[14px] leading-[100%]'>1050.00 ₴</p>
          </div>
          <div className='mt-[14px] flex items-center justify-between text-[#0F172A]'>
            <p className='text-[14px] leading-[100%]'>Знижка</p>
            <p className='text-[14px] leading-[100%]'>0.00 ₴</p>
          </div>
          <Separator className='my-4' />
          <div className='mt-[14px] flex items-center justify-between text-[#0F172A]'>
            <h5 className='text-lg font-semibold leading-5'>Всього</h5>
            <h5 className='text-lg font-semibold leading-5'>1050.00 ₴</h5>
          </div>
          <h2 className={cn('mt-10 text-[28px] leading-[28px]', eUK.className)}>Ваші товари</h2>
          <div className='mt-[38px] text-[#212121]'>
            <div className='flex items-center justify-between p-4 '>
              <p className={cn('w-[240px] text-ellipsis text-[12px] leading-[14px]', eUK.className)}>
                100 Days of Code: The Complete Python Pro Bootcamp for 2023
              </p>
              <span className='text-lg font-semibold'>350.00 ₴</span>
            </div>
            <Separator />
            <div className='flex items-center justify-between p-4 '>
              <p className={cn('w-[240px] text-ellipsis text-[12px] leading-[14px]', eUK.className)}>
                How to Market Yourself as a Coach or Consultant
              </p>
              <span className='text-lg font-semibold'>350.00 ₴</span>
            </div>
            <Separator />
            <div className='flex items-center justify-between p-4 '>
              <p className={cn('w-[240px] text-ellipsis text-[12px] leading-[14px]', eUK.className)}>
                Mind Mapping Mastery -{'>'} Effective Mind Maps -{'>'} Step by Step
              </p>
              <span className='text-lg font-semibold'>350.00 ₴</span>
            </div>
            <Button variant='outline' className='mt-6 h-[56px] w-full px-6 text-lg font-semibold'>
              Змінити кошик
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
