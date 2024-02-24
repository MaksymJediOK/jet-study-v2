import { z } from 'zod'

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/

export const formSchema = z.object({
  email: z.string().email('Incorrect email'),
  password: z.string().refine((value) => passwordRegex.test(value), {
    message: 'Password must be at least 8 characters long and include both letters and numbers.',
  }),
})

export type UserAuthType = z.infer<typeof formSchema>
