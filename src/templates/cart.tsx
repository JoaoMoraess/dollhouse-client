import { useState, useEffect } from 'react'

import { Headding } from 'components'
import { CartList } from 'components/cart-list'
import { ProductCartItem, useCart } from 'hooks/use-cart'

import { BaseTemplate } from './base'

type CartProps = {
  products?: ProductCartItem[]
  subTotal?: number
}

export const CartTemplate: React.FC = () => {
  const { getCartInfo, clearCart, itemsCount } = useCart()

  const [cartProps, setCartProps] = useState<CartProps>({
    products: [],
    subTotal: 0
  })
  useEffect(() => {
    void getCartInfo().then((info) => {
      if (info !== undefined) setCartProps(info)
    })
  }, [itemsCount])

  return (
    <BaseTemplate>
      <Headding>Meu Carrinho</Headding>
      <div className="mx-auto max-w-6xl">
          {itemsCount > 0
            ? (
              <div>
                <div className="flex items-center justify-center">
                  <CartList products={cartProps.products} subTotal={cartProps.subTotal} />
                </div>
                <div className="flex mt-4 gap-4 items-center justify-center">
                  <button className="p-2 border-2 border-pink-600 text-pink-600 rounded-md flex gap-2">
                    Calcular frete
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-pink-600 text-white rounded-md flex gap-2" onClick={() => clearCart()}>
                    Limpar Carrinho
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <div className="flex mt-4 items-center justify-center">
                  <button className="p-2 border-2 border-pink-600 text-pink-600 rounded-md flex gap-2">
                    Seguir para o caixa
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              )
            : (
              <div className="text-center mt-11 text-pink-600">
              <h1 className="text-6xl mb-4">
                Carrinho vazio
              </h1>
              <p>Volte a loja e adicione produtos ao corrinho</p>
              </div>
              )}
      </div>
    </BaseTemplate>
  )
}
