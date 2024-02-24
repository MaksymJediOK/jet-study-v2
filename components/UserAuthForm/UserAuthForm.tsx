'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema, UserAuthType } from './formSchema'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const UserAuthForm = ({ children }: { children?: React.ReactNode }) => {
  const onSubmit = (values: UserAuthType) => {}
  const form = useForm<UserAuthType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      email: '',
    },
  })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='my-2 flex flex-col gap-2'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Елекронна пошта</FormLabel>
              <FormControl>
                <Input placeholder='email@gmail.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input placeholder='**********' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {children ? children : null}
          <Button type='submit' className='mt-4 h-[40px] w-full leading-6'>
            Зареєструватись з поштою
          </Button>
        </div>
      </form>
    </Form>
  )
}

export { UserAuthForm }
