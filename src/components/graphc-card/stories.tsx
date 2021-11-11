import { Story, Meta } from '@storybook/react/types-6-0'

import { GraphcCardProps } from 'components'

import { GraphcCard } from '.'

export default {
  title: 'GraphcCard',
  component: GraphcCard
} as Meta

export const Money: Story<GraphcCardProps> = (args) => <GraphcCard {...args} >25086</GraphcCard>
export const Number: Story<GraphcCardProps> = (args) => <GraphcCard {...args} >27</GraphcCard>

Number.args = {
  color: 'pink',
  title: 'Total de vendas - mensal',
  type: 'number',
  colorText: 'blue'
}

Money.args = {
  color: 'purple',
  title: 'Total em vendas - semanal',
  type: 'money',
  colorText: 'yellow'
}
