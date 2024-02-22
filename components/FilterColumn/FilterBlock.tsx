'use client'
import { RadioGroup } from '@/components/ui/radio-group'
import { RadioButton } from './RadioButton'
import { useRouter, useSearchParams } from 'next/navigation'
import { FilterParams } from '@/types'

const FilterBlock = () => {
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
    <>
      <div className='mt-8'>
        <div className='my-4 text-base font-medium'>Напрямки</div>
        <RadioGroup
          defaultValue={filter.category || 'All'}
          onValueChange={(value) => pushQuery({ category: value })}
          value={filter.category || 'All'}
        >
          <RadioButton title='All' />
          <RadioButton title='Categories' />
          <RadioButton title='Psycology' />
          <RadioButton title='Law' />
          <RadioButton title='Design' />
        </RadioGroup>
      </div>
      <div className='mt-8'>
        <div className='my-4 text-base font-medium'>Формат</div>
        <RadioGroup
          defaultValue={filter.format || 'All'}
          onValueChange={(value) => pushQuery({ format: value })}
          value={filter.format || 'All'}
        >
          <RadioButton title='All' />
          <RadioButton title='Webinar' />
          <RadioButton title='WorkShop' />
          <RadioButton title='Course' />
        </RadioGroup>
      </div>
      <div className='mt-8'>
        <div className='my-4 text-base font-medium'>Мова</div>
        <RadioGroup
          defaultValue={filter.lang || 'All'}
          onValueChange={(value) => pushQuery({ lang: value })}
          value={filter.lang || 'All'}
        >
          <RadioButton title='All' />
          <RadioButton title='Ukrainian' />
          <RadioButton title='English' />
        </RadioGroup>
      </div>
    </>
  )
}

export { FilterBlock }
