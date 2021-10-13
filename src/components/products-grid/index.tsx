import { ProductCard, ProductCardProps } from 'components'

export type ProductsGridProps = {
  products: ProductCardProps[]
}

export const ProductsGrid: React.FC<ProductsGridProps> = ({
  products
}) => (
  <div data-testid="productsGrid">
    <div className="mx-auto max-w-6xl grid grid-cols-4 gap-5">
      {products.map((product, key) => (
        <ProductCard key={`productCard${key}`} {...product} />
      ))}
    </div>
  </div>
)
