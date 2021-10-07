import { Headding, ProductCardProps } from 'components'
import { ProductsGrid } from 'components/products-grid'

import { BaseTemplate } from './base'

export type HomeTemplateProps = {
  products: ProductCardProps[]
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  products
}) => {
  return (
    <BaseTemplate>
      <Headding>Veja nossos Produtos</Headding>
      <ProductsGrid products={products} />
    </BaseTemplate>
  )
}
