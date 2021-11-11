import { Story, Meta } from '@storybook/react/types-6-0'

import { MenuSideProps } from 'components'

import { MenuSide } from '.'

export default {
  title: 'MenuSide',
  component: MenuSide
} as Meta

export const Default: Story<MenuSideProps> = (args) => <MenuSide {...args} />

Default.args = {
  items: [{
    label: 'Produtos',
    href: 'products'
  }]
}
