import { Story, Meta } from '@storybook/react/types-6-0'

import { InputTextProps } from 'components'

import { InputText } from '.'

export default {
  title: 'InputText',
  component: InputText
} as Meta

export const Default: Story<InputTextProps> = (args) => (
  <div className="w-72">
    <InputText {...args} />
  </div>
)

Default.args = {
  labelText: 'Input aqui',
  name: 'input',
  onInputChange: (e) => console.log(e)
}

export const WithError: Story<InputTextProps> = (args) => (
  <div className="w-72">
    <InputText {...args} />
  </div>
)

WithError.args = {
  labelText: 'Email aqui',
  name: 'email',
  error: 'Email Invalido',
  onInputChange: (e) => console.log(e)
}

export const WithoutLabel: Story<InputTextProps> = (args) => (
  <div className="w-72">
    <InputText {...args} />
  </div>
)

WithoutLabel.args = {
  placeholder: 'Senha aqui',
  name: 'senha',
  onInputChange: (e) => console.log(e)
}
