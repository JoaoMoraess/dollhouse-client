import { Headding } from 'components'
import { ProductsCartItem, ProductsCartItemProps } from 'components/products-cart-item'
import { formatPrice } from 'utils/format-price'

export type CartListProps = {
  products: ProductsCartItemProps[],
  subTotal: number
}

export const CartList: React.FC<CartListProps> = ({
  products,
  subTotal
}) => {
  const labels = ['Image', 'Product/Price', 'Quantity', 'Total Product', 'Remove']
  return (
  <div data-testid="cartList">
    <div className="flex flex-col border-pink-600">
      <div className="flex items-center justify-between p-2 border-b-2 border-pink-600">
        {labels.map((label, index) => (
          <div className="flex items-center justify-center w-36" key={`cartLabel-${index}`}>
            <h3 className="inline-block text-pink-600">{label}</h3>
          </div>
        ))}
      </div>
      {products?.map((product, key) => (
        <ProductsCartItem key={`productCarItem-${key}`} {...product} />
      ))}
      <div className="px-10 flex border-t-2 border-pink-600 items-center justify-between">
        <span className="font-bold text-gray-700">SubTotal: </span><Headding>{formatPrice(subTotal)}</Headding>
      </div>
    </div>
  </div>
  )
}
