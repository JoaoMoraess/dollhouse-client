import Image from 'next/image'

import { useCart } from 'hooks/use-cart'
import { formatPrice } from 'utils/format-price'
import { imageLoader } from 'utils/image-loader'

export type ProductCardProps = {
  id: string
  name: string
  imageUrl: string
  price: number
  stock: number
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  imageUrl,
  price,
  stock
}) => {
  const { addToCart, isInCart, removeFromCart } = useCart()
  return (
  <div data-testid="productCard" className={`bg-skulls-pattern transition-all border-2 ${stock > 0 ? 'hover:border-pink-500' : 'hover:border-red-400'} rounded-lg relative cursor-pointer group flex justify-between flex-col items-center`}>
    {stock < 1 && (
      <>
        <div className='top-2 px-3 h-8 bg-red-400 absolute z-20 -right-4 text-gray-700 rounded-r-md flex items-center justify-center'>Fora de estoque!</div>
        <div className="absolute inset-0 bg-gray-600 rounded-lg opacity-60 z-10"></div>
      </>
    )}
    <div className='overflow-hidden flex justify-between flex-col items-center'>
      <Image
        loader={imageLoader}
        src={imageUrl}
        alt={name}
        layout="fixed"
        width={200}
        height={210}
      />
      {stock > 0 && (!isInCart(id)
        ? (
      <button onClick={() => addToCart(id)} className="hover:border-purple-700 border-2 shadow-lg rounded-md transition-opacity group-hover:opacity-100 opacity-0 absolute top-2/4 bg-opacity-70 bg-white p-2 text-purple-600 text-lg">
        Adicionar ao carrinho
      </button>
          )
        : (
      <button onClick={() => removeFromCart(id)} className="hover:border-purple-700 border-2 shadow-lg rounded-md transition-opacity group-hover:opacity-100 opacity-0 absolute top-2/4 bg-opacity-70 bg-white p-2 text-purple-600 text-lg">
        Remover do carrinho
      </button>
          ))}
    </div>
    <h2 className="bg-white text-xl text-center font-light pt-3">{name}</h2>
    <h2 className="bg-white font-medium">{formatPrice(price)}</h2>
  </div>
  )
}
