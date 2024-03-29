type fetchDataOptions = {
  url: string
  cache?: RequestCache
}
const server_url = process.env.NEXT_PUBLIC_DEV_SERVER_URL
export const fetchData = async <T>({ url, cache = 'force-cache' }: fetchDataOptions): Promise<T> => {
  try {
    const response = await fetch(`${server_url}${url}`, {
      cache,
    })

    if (!response.ok) {
      throw new Error(`Something went wrong ${response.status}`)
    }
    return await response.json()
  } catch (e: any) {
    throw new Error(`Error fetching data: ${e.message}`)
  }
}

export const fetcher = (url: string) => {
  return fetch(`${server_url}${url}`).then((res) => res.json())
}
