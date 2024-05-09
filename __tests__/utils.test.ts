import { generateQueryString, formatDate } from '@/lib/utils'
import { FilterRequestParams } from '@/types'

describe('generateQueryString', () => {
  it('should generate a query string from an object', () => {
    const params: Partial<FilterRequestParams> = {
      eventTypeId: 'type1',
      categoryId: 'category1',
    }
    const result = generateQueryString(params)
    expect(result).toEqual('?eventTypeId=type1&categoryId=category1')
  })

  it('should return an empty string when all values are null or undefined', () => {
    const params: Partial<FilterRequestParams> = {
      eventTypeId: null,
      categoryId: undefined,
    }
    const result = generateQueryString(params)
    expect(result).toEqual('')
  })
})

describe('formatDate', () => {
  it('should format a date string to a localized date string', () => {
    const dateString = '2022-01-01T00:00:00Z'
    const result = formatDate(dateString)

    expect(typeof result).toBe('string')
  })

  it('should handle invalid date strings', () => {
    const dateString = 'not a date'
    const result = formatDate(dateString)

    expect(result).toEqual('Invalid Date')
  })
})
