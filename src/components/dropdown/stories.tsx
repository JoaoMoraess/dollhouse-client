import { Story, Meta } from '@storybook/react/types-6-0'

import { Dropdown, DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown

} as Meta<DropdownProps>

export const Default: Story<DropdownProps> = () => <Dropdown title={<h1 className='text-black'>Click Here</h1>}>
  <div>Aberto</div>
</Dropdown>
