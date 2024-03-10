import useSWRMutation from 'swr/mutation'
import { loginUser } from '@/lib/authMutations'
import { formSchema, UserAuthType } from '@/components/UserAuthForm/formSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RotateCw } from 'lucide-react'
import React from 'react'

const SignInForm = () => {
  const { trigger, isMutating } = useSWRMutation('/auth/login', loginUser)
  const onSubmit = async ({ email, password }: UserAuthType) => {
    const result = await trigger({
      email,
      password,
    })
    console.log(result)
  }
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
        <p className='mt-2 cursor-pointer leading-7 text-[#0F172A] underline opacity-70'>
          Забули пароль?
        </p>
        <Button type='submit' className='mt-3 h-[40px] w-full leading-6' disabled={isMutating}>
          {isMutating && <RotateCw className='mr-2 h-4 w-4 animate-spin' />}
          Увійти з поштою
        </Button>
      </form>
    </Form>
  )
}

export { SignInForm }
