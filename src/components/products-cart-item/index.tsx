import Image from 'next/image'

import { useCart } from 'hooks/use-cart'
import { formatPrice } from 'utils/format-price'
import { imageLoader } from 'utils/image-loader'
export type ProductsCartItemProps = {
  id: string
  name: string
  imageUrl: string
  stock: number
  price: number
  quantity: number
}

export const ProductsCartItem: React.FC<ProductsCartItemProps> = ({
  id,
  name,
  price,
  imageUrl,
  stock,
  quantity
}) => {
  const { removeFromCart, changeQuantity } = (useCart())
  return (
  <div data-testid="productsCartItem">
    <div className="flex p-4 justify-between">
      <Image loader={imageLoader} src={imageUrl} layout="fixed" height={110} width={100} alt={name} />
      <div className="pl-4 w-36 flex flex-col items-center justify-center">
        <h2>{name}</h2>
        <h2>{formatPrice(price)}</h2>
      </div>
      <div className="flex w-36 justify-center items-center">
        <input onChange={(v) => changeQuantity(id, stock, Number(v.target.value))} value={quantity} className="border-2 border-gray-600 rounded-md w-16 text-center outline-none" type="number" name="productqtd" id="" />
      </div>
      <div className="flex w-36 justify-center items-center font-bold text-green-600">
        {formatPrice(price * quantity)}
      </div>
      <div className="flex w-36 justify-center items-center">
        <div onClick={() => removeFromCart(id)} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  )
}
