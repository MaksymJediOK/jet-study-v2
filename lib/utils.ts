import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const shortText = (text: string, end: number) =>
  text.length > end ? text.slice(0, end).concat('...') : text

export const getRandomNumber = (): number => {
  const randomDecimal = Math.random()
  return Math.floor(randomDecimal * 3) + 1
}
