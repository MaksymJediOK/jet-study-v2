import useSWRMutation from 'swr/mutation'
import { fetcher } from './fetchData'

type UpdateProfileRequest = {
  name: string
  surname: string
}

type UpdateProfileResponse = {
  message: string
}

const useChangeNameMutation = () => {
  return useSWRMutation<UpdateProfileResponse, any, string, Pick<UpdateProfileRequest, 'name'>>(
    '/user/change-name',
    (url, { arg }) =>
      fetcher<Pick<UpdateProfileRequest, 'name'>, UpdateProfileResponse>({
        url,
        method: 'PUT',
        body: arg,
      }),
  )
}

const useChangeSurnameMutation = () => {
  return useSWRMutation<UpdateProfileResponse, any, string, Pick<UpdateProfileRequest, 'name'>>(
    '/user/change-surname',
    (url, { arg }) =>
      fetcher<Pick<UpdateProfileRequest, 'name'>, UpdateProfileResponse>({
        url,
        method: 'PUT',
        body: arg,
      }),
  )
}

const useLogout = () => {
  return useSWRMutation<void, any, string, null>('/auth/logout', (url) =>
    fetcher<null, void>({
      url,
      method: 'POST',
      body: null,
    }),
  )
}
export { useChangeNameMutation, useChangeSurnameMutation, useLogout }
