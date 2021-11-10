import { Story, Meta } from '@storybook/react/types-6-0'

import { DeliveryLocationFormProps } from 'components'

import { DeliveryLocationForm } from '.'
import { mock } from './mock'

export default {
  title: 'DeliveryLocationForm',
  component: DeliveryLocationForm
} as Meta

export const Default: Story<DeliveryLocationFormProps> = (args) => (
  <div className="w-96">
    <DeliveryLocationForm {...args} />
  </div>
)

Default.args = mock
