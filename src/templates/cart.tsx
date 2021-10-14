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
      <Headding>Veja nossos Produtos</Headding>
      <button onClick={() => clearCart()}>Limpar Carrinho</button>
      <div className="w-2/4">
        <CartList products={cartProps.products} />
      </div>
      <Headding>SubTotal: {cartProps.subTotal}</Headding>
    </BaseTemplate>
  )
}
