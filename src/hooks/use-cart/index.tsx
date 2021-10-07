/* eslint-disable @typescript-eslint/no-floating-promises */
import { createContext, useContext, useState, useEffect } from 'react'

import { AxiosAdapter } from 'utils/adapters/axios'
import { LocalStorageAdapter } from 'utils/adapters/local-storage'

const CART_KEY = 'cartItems'

export type ProductCartItems = {
  id: string
  name: string
  imageUrl: string
  price: number
  quantity: number
}

type CartInfo = {
  products: ProductCartItems[]
  total: number
}
export type CartContextData = {
  itemsCount: number
  isInCart: (id: string) => boolean
  loading: boolean
  cartInfo: CartInfo
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

export const CartContextDefaultValues = {
  itemsCount: 0,
  isInCart: () => false,
  loading: false,
  cartInfo: {
    products: [],
    total: 0
  },
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null
}
export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type Context = (input: { children: React.ReactNode }) => JSX.Element
export type UseCartContext = (axiosAdapter: AxiosAdapter, localStorageAdapter: LocalStorageAdapter) => Context

type Quantity = number
type LocalCartItems = { [id: string]: Quantity }

const CartProvider: UseCartContext = (axiosAdapter, localStorageAdapter) => ({ children }) => {
  const [cartInfo, setCartInfo] = useState<CartInfo>({ products: [], total: 0 })
  const [cartItems, setCartItems] = useState<LocalCartItems>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const data = localStorageAdapter().get<LocalCartItems>({ key: CART_KEY })
    if (data) {
      setCartItems(data)
      getCartInfo().then((info) => setCartInfo(info))
    }
  }, [])

  const saveCart = (cartItems: LocalCartItems): void => {
    setCartItems(cartItems)
    localStorageAdapter().set({ key: CART_KEY, value: cartItems })
  }

  const itemsCount = Object.keys(cartItems)
    .map((key) => cartItems[key])
    .reduce((acc, itemQuantity) => acc + itemQuantity, 0)

  const isInCart = (id: string): boolean => {
    const keys = Object.keys(cartItems)
    return keys.includes(id)
  }

  const getCartInfo = async (): Promise<CartInfo> => {
    setLoading(true)
    const { body } = await axiosAdapter<CartInfo>({
      url: 'any_url', // TODO change
      method: 'get',
      body: cartItems
    })
    setLoading(false)
    return body
  }

  const addToCart = (id: string): void => {
    const isInTheCart = isInCart(id)
    if (isInTheCart) return
    saveCart({ ...cartItems, [id]: 1 })
  }

  const removeFromCart = (id: string): void => {
    const isInTheCart = isInCart(id)
    if (!isInTheCart) return
    const newCartItems: LocalCartItems = {}
    Object.keys(cartItems).forEach((key) => {
      if (key !== id) {
        newCartItems[key] = Number(cartItems[key])
      }
    })
    saveCart(newCartItems)
  }

  const clearCart = (): void => {
    saveCart({})
  }

  return (
      <CartContext.Provider
        value={{
          itemsCount,
          isInCart,
          cartInfo,
          loading,
          addToCart,
          removeFromCart,
          clearCart
        }}>
        {children}
      </CartContext.Provider>
  )
}
const useCart = (): CartContextData => useContext(CartContext)

export { CartProvider, useCart }
