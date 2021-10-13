import { Story, Meta } from '@storybook/react/types-6-0'

import { ProductsCartItem, ProductsCartItemProps } from '.'
import { mock } from './mock'

export default {
  title: 'ProductsCartItem',
  component: ProductsCartItem
} as Meta

export const Default: Story<ProductsCartItemProps> = (args) => <ProductsCartItem {...args} />

Default.args = mock
