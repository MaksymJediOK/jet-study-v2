'use client'

import { formSchema, type ProfileType } from './formSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useChangeNameMutation, useChangeSurnameMutation } from '@/lib/profileRequests'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const ProfileForm = () => {
  const { toast } = useToast()
  const form = useForm<ProfileType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: '',
      surname: '',
    },
  })
  const { trigger: changeName } = useChangeNameMutation()
  const { trigger: changeSurname } = useChangeSurnameMutation()
  const onSubmit = async ({ firstname, surname }: ProfileType) => {
    if (!firstname || !surname) {
      toast({
        variant: 'destructive',
        title: 'Input is empty.',
        description: 'You need to enter at least something.',
      })
      return
    }
    let toastMsg = ''
    if (firstname) {
      const msg = await changeName({ name: firstname })
      toastMsg += msg.message
    }
    if (surname) {
      const msg = await changeSurname({ name: surname })
      toastMsg += ' ' + msg.message
    }
    toast({
      title: 'Success!',
      description: `${toastMsg}`,
    })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-[385px] flex-col gap-4'>
        <FormField
          control={form.control}
          name='firstname'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ім&apos;я</FormLabel>
              <FormControl>
                <Input placeholder='Firstname' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='surname'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Прізвище</FormLabel>
              <FormControl>
                <Input placeholder='Surname' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Елекронна пошта</FormLabel>
              <FormControl>
                <Input placeholder='maksym.matviichuk@gmail.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='h-[56px] py-4 text-base leading-6'>
          Зберегти
        </Button>
      </form>
      <Toaster />
    </Form>
  )
}

export { ProfileForm }
