import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { FilterRequestParams } from '@/types'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const shortText = (text: string, end: number) =>
  text.length > end ? text.slice(0, end).concat('...') : text

export const getRandomNumber = (): number => {
  const randomDecimal = Math.random()
  return Math.floor(randomDecimal * 3) + 1
}

export const generateQueryString = (params: Partial<FilterRequestParams>): string => {
  const searchParams = new URLSearchParams(
    Object.entries(params)
      .filter(([_, value]) => value !== null && value !== undefined)
      .map(([key, value]) => [key, value] as [string, string]),
  )

  return searchParams.toString() ? `?${searchParams.toString()}` : ''
}
