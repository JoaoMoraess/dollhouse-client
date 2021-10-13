import { Headding } from 'components'
import { CartList } from 'components/cart-list'
import { useCart } from 'hooks/use-cart'

import { BaseTemplate } from './base'

export const CartTemplate: React.FC = () => {
  const { cartInfo, loading } = useCart()
  return (
    <BaseTemplate>
    <Headding>Veja nossos Produtos</Headding>
      {loading
        ? (
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-t-4 border-l-4 border-purple-600 animate-spin"></div>
          </div>
          )
        : (
        <>
          <div className="w-2/4">
            <CartList products={cartInfo?.products} />
          </div>
          <Headding>SubTotal: {cartInfo?.subTotal}</Headding>
        </>
          )}
    </BaseTemplate>
  )
}
