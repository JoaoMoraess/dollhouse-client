import { Story, Meta } from '@storybook/react/types-6-0'

import { CartList, CartListProps } from '.'
import { mock } from './mock'

export default {
  title: 'CartList',
  component: CartList
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div className="w-2/4">
    <CartList {...args} />
  </div>
)

Default.args = mock
