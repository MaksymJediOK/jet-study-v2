import { create } from 'zustand'
import { BasketItem } from '@/types/event'

type BasketState = {
  items: BasketItem[]
  addItemToBasket: (item: BasketItem) => void
  setItems: (items: BasketItem[]) => void
}

export const useBasketStore = create<BasketState>()((set) => ({
  items: [],
  addItemToBasket: (newItem) =>
    set((state) => {
      return {
        items: [...state.items, newItem],
      }
    }),
  setItems: (items) =>
    set(() => {
      return {
        items: [...items],
      }
    }),
}))
