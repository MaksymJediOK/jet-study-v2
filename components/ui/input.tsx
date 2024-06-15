import * as React from 'react'
import { Search } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className='flex items-center '>
        <div className='max-h-[40px] rounded-l-lg border-b border-l border-t py-3 pl-1'>
          <Search width={16} height={16} className=' ml-2 mr-2' color='grey' />
        </div>
        <input
          type={type}
          placeholder='Назва, Тема'
          className={cn(
            'flex h-10 w-full rounded-r-lg border-b border-r border-t bg-background py-2 pl-0.5 pr-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
SearchInput.displayName = 'SearchInput'

export { Input, SearchInput }
