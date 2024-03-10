export type RegisterFields = {
  userName: string
  email: string
  password: string
  confirmPassword: string
}

export type LoginFields = Omit<RegisterFields, 'userName' | 'confirmPassword'>

export type GoogleLoginArg = {
  credential: string
}

export type Token = {
  token: string
}
