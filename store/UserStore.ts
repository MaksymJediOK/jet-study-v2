import { create } from 'zustand'

type UserStoreState = {
  token: string | null
  setToken: (token: string) => void
}

export const useUserStore = create<UserStoreState>()((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}))
