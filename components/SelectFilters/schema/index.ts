import { z } from 'zod'

export const SearchInputSchema = z.object({
  search: z.string().max(60, {message: 'The limit has been exceeded'}),
})