import { GoogleLoginArg, LoginFields, RegisterFields } from '@/types/auth'

const server_url = process.env.NEXT_PUBLIC_DEV_SERVER_URL
export const registerUser = async (url: string, { arg }: { arg: RegisterFields }) => {
  await fetch(`${server_url}${url}`, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: new Headers({ 'content-type': 'application/json' }),
  })
}
export const loginUser = async (url: string, { arg }: { arg: LoginFields }) => {
  const response = await fetch(`${server_url}${url}`, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: new Headers({ 'content-type': 'application/json' }),
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return await response.json()
}

export const loginViaGoogle = async (url: string, { arg }: { arg: GoogleLoginArg }) => {
  await fetch(`${server_url}${url}`, {
    method: 'POST',
    body: JSON.stringify(arg),
    headers: new Headers({ 'content-type': 'application/json' }),
  })
}
