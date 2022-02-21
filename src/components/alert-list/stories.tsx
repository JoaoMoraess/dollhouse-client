import { Story, Meta } from '@storybook/react/types-6-0'

import { AlertList } from '.'

export default {
  title: 'AlertList',
  component: AlertList
} as Meta

export const Default: Story = () => <AlertList alerts={[{ is: 'danger', message: 'Error Message!' }]} />
