import { z } from 'zod'

export const formSchema = z.object({
  firstname: z
    .string()
    .max(25)
    .optional(),
  surname: z
    .string()
    .max(25)
    .optional(),
})

export type ProfileType = z.infer<typeof formSchema>
