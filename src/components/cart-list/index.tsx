import { ProductsCartItem, ProductsCartItemProps } from 'components/products-cart-item'
import { formatPrice } from 'utils/format-price'

export type CartListProps = {
  products: ProductsCartItemProps[],
  subTotal: number,
  total?: number
}

export const CartList: React.FC<CartListProps> = ({
  products,
  subTotal,
  total
}) => {
  const labels = ['Image', 'Product/Price', 'Quantity', 'Total Product', 'Remove']
  return (
  <div data-testid="cartList">
    <div className="flex flex-col border-gray-600">
      <div className="flex items-center justify-between p-2 border-b-2 border-gray-600">
        {labels.map((label, index) => (
          <div className="flex items-center justify-center w-36" key={`cartLabel-${index}`}>
            <h3 className="inline-block text-gray-600">{label}</h3>
          </div>
        ))}
      </div>
      {products?.map((product, key) => (
        <ProductsCartItem key={`productCarItem-${key}`} {...product} />
      ))}
      <div className="flex items-center justify-between border-t-2 border-gray-600">
        <div className={`transition-all px-10 flex items-center ${total > 0 ? 'w-2/4' : 'w-full'}  justify-between`}>
          <span className="font-bold text-gray-700">SubTotal: </span><h3 className='font-extrabold text-green-700 border-b-2 p-2 border-green-700'>{formatPrice(subTotal)}</h3>
        </div>
        {total > 0 && (
          <div className="transition-all px-10 flex items-center w-2/4 justify-between">
            <span className="font-bold text-gray-700">Total: </span><h3 className='font-extrabold text-green-700 border-b-2 p-2 border-green-700'>{formatPrice(total)}</h3>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}
