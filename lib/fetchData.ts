import { useUserStore } from '@/store'

interface FetcherParams<T> {
  url: string
  method: 'POST' | 'PUT'
  body: T
}
type fetchDataOptions = {
  url: string
  // cache?: RequestCache
  revalidate?: number
}
const server_url = process.env.NEXT_PUBLIC_DEV_SERVER_URL
export const fetchData = async <T>({ url, revalidate = 3600 }: fetchDataOptions): Promise<T> => {
  try {
    const response = await fetch(`${server_url}${url}`, {
      next: {
        revalidate,
      },
    })
    return await response.json()
  } catch (e: any) {
    throw new Error(`Error fetching data: ${e.message}`)
  }
}

export const fetcher = async <TRequest, TResponse>({
  url,
  method,
  body,
}: FetcherParams<TRequest>): Promise<TResponse> => {
  const token = useUserStore.getState().token

  const response = await fetch(`${server_url}${url}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    credentials: 'include',
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return await response.json()
}
