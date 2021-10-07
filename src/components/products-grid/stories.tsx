import { Story, Meta } from '@storybook/react/types-6-0'

import { ProductsGrid, ProductsGridProps } from '.'
import { mock } from './mock'

export default {
  title: 'ProductsGrid',
  component: ProductsGrid
} as Meta

export const Default: Story<ProductsGridProps> = (args) => <ProductsGrid {...args} />

Default.args = mock
