import { Story, Meta } from '@storybook/react/types-6-0'

import { CardInfoForm } from '.'
import { mock } from './mock'

export default {
  title: 'CardInfoForm',
  component: CardInfoForm
} as Meta

export const Default: Story = () => (
  <div className="w-96">
    <CardInfoForm {...mock} />
  </div>

)
