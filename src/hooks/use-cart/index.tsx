/* eslint-disable @typescript-eslint/no-floating-promises */
import { createContext, useContext, useState, useEffect } from 'react'

import { useAlert } from 'hooks/use-alert'
import { AxiosAdapter } from 'utils/adapters/axios'
import { LocalStorageAdapter } from 'utils/adapters/local-storage'
import { baseApiUrl } from 'utils/api'

const CART_KEY = 'cartItems'

export type ProductCartItem = {
  id: string
  name: string
  imageUrl: string
  price: number
  quantity: number
}

type CartInfo = {
  products: ProductCartItem[]
  subTotal: number
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
    subTotal: 0
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
  const [cartInfo, setCartInfo] = useState<CartInfo>({ products: [], subTotal: 0 })
  const [cartItems, setCartItems] = useState<LocalCartItems>({})
  const [loading, setLoading] = useState(false)

  const { open } = useAlert()

  useEffect(() => {
    const data = localStorageAdapter().get<LocalCartItems>({ key: CART_KEY })
    if (data) {
      setCartItems(data)
    }
  }, [])

  useEffect(() => {
    getCartInfo().then((info) => {
      if (info !== undefined) setCartInfo(info)
    })
  }, [cartItems])

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
    if (loading) return

    setLoading(true)

    const localProducts = localStorageAdapter().get<LocalCartItems>({ key: CART_KEY })

    const { body } = await axiosAdapter<CartInfo>({
      url: `${baseApiUrl}/cart/info`,
      method: 'post',
      body: {
        localProducts
      }
    })
    setLoading(false)
    if (body.error) {
      open({ message: body.error, is: 'warning' })
    }
    return body
  }

  const addToCart = (id: string): void => {
    const isInTheCart = isInCart(id)
    if (isInTheCart) return
    saveCart({ ...cartItems, [id]: 1 })
    open({ message: 'Produto adicionado ao carrinho', is: 'info' })
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
    open({ message: 'Produto removido do carrinho', is: 'info' })
  }

  const clearCart = (): void => {
    saveCart({})
    open({ message: 'Carrinho limpo', is: 'info' })
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
