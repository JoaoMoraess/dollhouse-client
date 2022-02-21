import { Headding, ProductCardProps, Slider } from 'components'
import { ProductsGrid } from 'components/products-grid'

import { BaseTemplate } from './base'

export type HomeTemplateProps = {
  products: ProductCardProps[]
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  products
}) => {
  const mockSliders = [
    'https://www.procuroacho.com/espaco-vip/768/img/1-lo-store-tendenci-loja-de-roupas-femininas-banner.jpg',
    'https://images.tcdn.com.br/img/img_prod/672891/1561748280_full_banner_feminino_certo2.jpg',
    'https://images.tcdn.com.br/img/img_prod/436693/1569536425_banner_09.jpg'
  ]
  return (
    <BaseTemplate>
      <div className='max-w-7xl mx-auto h-96 mb-11 sticky'>
        <Slider slides={mockSliders} />
      </div>
      <Headding>Veja nossos Produtos</Headding>
      <ProductsGrid products={products} />
    </BaseTemplate>
  )
}
