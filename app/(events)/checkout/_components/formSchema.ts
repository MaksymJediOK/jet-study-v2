import { z } from 'zod'

export const formSchema = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
})
