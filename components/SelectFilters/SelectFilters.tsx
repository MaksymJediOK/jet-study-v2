'use client'

import { Select } from '@/components/ui/select'
import { CategorySelectGroup, TypeSelectGroup, LangSelectGroup } from './ui'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FilterParams } from '@/types'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { SearchInput } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { SearchInputSchema } from '@/components/SelectFilters/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDebounce } from '@/lib/debounce'
import { useEffect } from 'react'

const SelectFilters = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const filter: FilterParams = {
    search: searchParams.get('search'),
    category: searchParams.get('category'),
    format: searchParams.get('format'),
    lang: searchParams.get('lang'),
  }
  const form = useForm<z.infer<typeof SearchInputSchema>>({
    resolver: zodResolver(SearchInputSchema),
    defaultValues: {
      search: '',
    },
  })
  const pathname = usePathname()
  const pushQuery = (newValue: Partial<FilterParams>) => {
    const params = new URLSearchParams()
    if (newValue.search) {
      filter.search = newValue.search
      params.append('search', newValue.search)
    } else if (filter.search) {
      params.append('search', filter.search)
    }
    if (newValue.category) {
      filter.category = newValue.category
      params.append('category', filter.category)
    } else if (filter.category) params.append('category', filter.category)
    if (newValue.format) {
      filter.format = newValue.format
      params.append('format', filter.format)
    } else if (filter.format) params.append('format', filter.format)
    if (newValue.lang) {
      filter.lang = newValue.lang
      params.append('lang', filter.lang)
    } else if (filter.lang) params.append('lang', filter.lang)

    router.push(`?${params.toString()}`, {
      scroll: false,
    })
  }
  const debounced = useDebounce(form.watch('search'), 500)
  useEffect(() => {
    if (debounced.length > 2) {
      pushQuery({ search: debounced })
    }
    if (filter.search && !debounced) {
      router.back()
    }
  }, [debounced])
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='flex gap-3 leading-[14px]'>
        <Select onValueChange={(value) => pushQuery({ category: value })}>
          <CategorySelectGroup />
        </Select>
        <Select onValueChange={(value) => pushQuery({ format: value })}>
          <TypeSelectGroup />
        </Select>
        <Select onValueChange={(value) => pushQuery({ lang: value })}>
          <LangSelectGroup />
        </Select>
      </div>
      <>
        <Form {...form}>
          <form className='w-[200px] space-y-6'>
            <FormField
              control={form.control}
              name='search'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SearchInput placeholder='Назва, тема' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </>
    </div>
  )
}

export { SelectFilters }
