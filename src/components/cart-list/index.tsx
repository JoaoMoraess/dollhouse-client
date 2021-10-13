import { ProductsCartItem, ProductsCartItemProps } from 'components/products-cart-item'

export type CartListProps = {
  products: ProductsCartItemProps[]
}

export const CartList: React.FC<CartListProps> = ({
  products
}) => (
  <div data-testid="cartList">
    <div className="flex flex-col">
      {products?.map((product, key) => (
        <ProductsCartItem key={`productCarItem-${key}`} {...product} />
      ))}
    </div>
  </div>
)
