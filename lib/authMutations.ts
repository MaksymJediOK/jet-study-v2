import { RegisterFields } from '@/types/auth'
const server_url = process.env.NEXT_PUBLIC_DEV_SERVER_URL
export const registerUser = async (url: string, { arg }: { arg: RegisterFields }) => {
  await fetch(`${server_url}${url}`, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: new Headers({ 'content-type': 'application/json' }),
  })
}
