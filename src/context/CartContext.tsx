"use client"

import { createContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";

export type CartContextType = {
  CartCounter: number
  setCartCounter: Dispatch<SetStateAction<number>>
}

export const CartContext = createContext<CartContextType>({
  CartCounter: 0,
  setCartCounter: () => {},
})

export default function CartContextProvider({ children }: { children: ReactNode }) {
  const [CartCounter, setCartCounter] = useState<number>(0)

  return (
    <CartContext.Provider value={{ CartCounter, setCartCounter }}>
      {children}
    </CartContext.Provider>
  )
}

