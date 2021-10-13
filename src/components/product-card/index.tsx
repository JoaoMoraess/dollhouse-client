import Image from 'next/image'

import { useCart } from 'hooks/use-cart'
import { formatPrice } from 'utils/format-price'

export type ProductCardProps = {
  id: string
  name: string
  imageUrl: string
  price: number
}

const myLoader = ({ src }: { src: string }): string => {
  return `${src}`
}
export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  imageUrl,
  price
}) => {
  const { addToCart, isInCart, removeFromCart } = useCart()
  return (
  <div data-testid="productCard" className="bg-skulls-pattern transition-all border-2 hover:border-pink-500 rounded-lg relative cursor-pointer group flex justify-between flex-col items-center">
    <Image
      loader={myLoader}
      src={imageUrl}
      alt={name}
      layout="fixed"
      width={200}
      height={210}
    />
    {!isInCart(id)
      ? (
    <button onClick={() => addToCart(id)} className="hover:border-purple-700 border-2 shadow-lg rounded-md transition-opacity group-hover:opacity-100 opacity-0 absolute top-2/4 bg-opacity-70 bg-white p-2 text-purple-600 text-lg">
      Adicionar ao carrinho
    </button>
        )
      : (
    <button onClick={() => removeFromCart(id)} className="hover:border-purple-700 border-2 shadow-lg rounded-md transition-opacity group-hover:opacity-100 opacity-0 absolute top-2/4 bg-opacity-70 bg-white p-2 text-purple-600 text-lg">
      Remover do carrinho
    </button>

        )}
    <h2 className="bg-white text-xl text-center font-light pt-3">{name}</h2>
    <h2 className="bg-white font-medium">{formatPrice(price)}</h2>
  </div>
  )
}
