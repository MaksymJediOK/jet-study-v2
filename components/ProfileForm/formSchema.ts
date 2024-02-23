import { z } from 'zod'

export const formSchema = z.object({
  firstname: z
    .string()
    .min(3, {
      message: 'Firstname must be at least 3 characters.',
    })
    .max(25)
    .optional(),
  lastname: z
    .string()
    .min(3, {
      message: 'Lastname must be at least 3 characters.',
    })
    .max(25)
    .optional(),
  email: z.string().email('Incorrect email').optional(),
})

export type ProfileType = z.infer<typeof formSchema>
