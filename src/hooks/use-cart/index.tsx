import { createContext, useContext, useState, useEffect } from 'react'

import { getLocalStorageItem } from 'utils/local-storage'

const CART_KEY = 'cartItems'

export type CartContextData = {
  itemsCount: number
  isInCart: (id: string) => boolean
}

export const CartContextDefaultValues = {
  itemsCount: 0,
  isInCart: () => false
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type Context = (input: { children: React.ReactNode }) => JSX.Element

type Quantity = number

type LocalCartItems = { [id: string]: Quantity }

const CartProvider: Context = ({ children }) => {
  const [cartItems, setCartItems] = useState<LocalCartItems>({})

  useEffect(() => {
    const data = getLocalStorageItem<LocalCartItems>({ key: CART_KEY })
    if (data) {
      setCartItems(data)
    }
  }, [])

  const itemsCount = Object.keys(cartItems).length

  const isInCart = (id: string): boolean => {
    const keys = Object.keys(cartItems)
    return keys.includes(id)
  }

  return (
    <CartContext.Provider value={{ itemsCount, isInCart }}>
      {children}
    </CartContext.Provider>
  )
}
const useCart = (): CartContextData => useContext(CartContext)

export { CartProvider, useCart }
