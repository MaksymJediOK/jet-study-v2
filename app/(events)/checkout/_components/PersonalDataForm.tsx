'use client'

import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from './formSchema'
import { zodResolver } from '@hookform/resolvers/zod'

const PersonalDataForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'maksym.matviichuk@oa.edu.ua',
      firstName: 'Maksym',
      lastName: 'Matviichuk',
    },
  })

  const onSubmit = () => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-[385px]'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Елекронна пошта</FormLabel>
              <FormControl>
                <Input placeholder='shadcn' {...field} />
              </FormControl>
            </FormItem>
          )}
        />{' '}
        <FormField
          control={form.control}
          name='firstName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ім’я</FormLabel>
              <FormControl>
                <Input placeholder='firstname' {...field} />
              </FormControl>
            </FormItem>
          )}
        />{' '}
        <FormField
          control={form.control}
          name='lastName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Прізвище</FormLabel>
              <FormControl>
                <Input placeholder='lastname' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export { PersonalDataForm }
