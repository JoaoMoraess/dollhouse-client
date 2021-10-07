import { Story, Meta } from '@storybook/react/types-6-0'

import { Headding } from '.'

export default {
  title: 'Headding',
  component: Headding
} as Meta

export const Default: Story = () => <Headding>Default Title</Headding>
