import { Story, Meta } from '@storybook/react/types-6-0'

import { ProductCard, ProductCardProps } from '.'
import { mock } from './mock'

export default {
  title: 'ProductCard',
  component: ProductCard
} as Meta

export const Default: Story<ProductCardProps> = (args) => (
  <div className="w-72">
    <ProductCard {...args} />
  </div>
)

Default.args = mock
