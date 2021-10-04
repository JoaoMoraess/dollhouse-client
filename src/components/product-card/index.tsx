import Image from 'next/image'

export type ProductCardProps = {
  name: string
  imageUrl: string
  price: string
}

const myLoader = ({ src }: { src: string }): string => {
  return `${src}`
}
export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imageUrl,
  price
}) => (
  <div className="transition-all border-2 hover:border-pink-500 rounded-lg relative cursor-pointer group flex justify-between flex-col items-center">
    <Image
      loader={myLoader}
      src={imageUrl}
      alt={name}
      layout="fixed"
      width={230}
      height={240}
    />
    <button className="shadow-lg rounded-md transition-opacity group-hover:opacity-100 opacity-0 absolute top-2/4 bg-gray-200 p-2 font-thin text-lg">
      Adicionar ao carrinho
    </button>
    <h2 className="text-xl font-light pt-3">{name}</h2>
    <h2 className="font-medium">R$ {price}</h2>
  </div>
)
