'use client'

import { Select } from '@/components/ui/select'
import { CategorySelectGroup, TypeSelectGroup, LangSelectGroup } from './ui'
import { useRouter, useSearchParams } from 'next/navigation'
import { FilterParams } from '@/types'

const SelectFilters = () => {

  const router = useRouter()
  const searchParams = useSearchParams()
  const filter: FilterParams = {
    category: searchParams.get('category'),
    format: searchParams.get('format'),
    lang: searchParams.get('lang'),
  }

  const pushQuery = (newValue: Partial<FilterParams>) => {
    const params = new URLSearchParams()
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
      scroll: false
    })
  }

  return (
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
  )
}

export { SelectFilters }
