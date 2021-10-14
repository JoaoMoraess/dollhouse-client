import { Story, Meta } from '@storybook/react/types-6-0'

import { AlertProps } from 'components'

import { Alert } from '.'
import { mock } from './mock'

export default {
  title: 'Alert',
  component: Alert
} as Meta

export const Default: Story<AlertProps> = (args) => <Alert {...args} />

Default.args = mock
