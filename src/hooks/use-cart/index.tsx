/* eslint-disable @typescript-eslint/no-floating-promises */
import { createContext, useContext, useState, useEffect } from 'react'

import { AxiosAdapter } from 'utils/adapters/axios'
import { getLocalStorageItem } from 'utils/adapters/local-storage'

const CART_KEY = 'cartItems'

export type CartContextData = {
  itemsCount: number
  isInCart: (id: string) => boolean
  loading: boolean
  cartInfo: CartInfo
}
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

export const CartContextDefaultValues = {
  itemsCount: 0,
  isInCart: () => false,
  loading: false,
  cartInfo: {
    products: [],
    total: 0
  }
}
export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type Context = (input: { children: React.ReactNode }) => JSX.Element
export type UseCartContext = (axiosAdapter: AxiosAdapter) => Context

type Quantity = number
type LocalCartItems = { [id: string]: Quantity }

const CartProvider: UseCartContext = (axiosAdapter) => ({ children }) => {
  const [cartItems, setCartItems] = useState<LocalCartItems>({})
  const [cartInfo, setCartInfo] = useState<CartInfo>({
    products: [],
    total: 0
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const data = getLocalStorageItem<LocalCartItems>({ key: CART_KEY })
    if (data) {
      setCartItems(data)
      getCartInfo().then((info) => setCartInfo(info))
    }
  }, [])

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

  return (
      <CartContext.Provider
        value={{ itemsCount, isInCart, cartInfo, loading }}
      >
        {children}
      </CartContext.Provider>
  )
}
const useCart = (): CartContextData => useContext(CartContext)

export { CartProvider, useCart }
