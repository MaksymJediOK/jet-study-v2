export type FilterParams = {
  search: string | null | undefined
  category: string | null | undefined
  format: string | null | undefined
  lang: string | null | undefined
}

export type FilterRequestParams = {
  search: string | null
  eventTypeId: string | null
  categoryId: string | null
}
