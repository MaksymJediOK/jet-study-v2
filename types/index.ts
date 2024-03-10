export type FilterParams = {
  category: string | null | undefined,
  format: string | null | undefined,
  lang: string | null | undefined,
}

export type FilterRequestParams = {
  eventTypeId: string | null
  categoryId: string | null
}