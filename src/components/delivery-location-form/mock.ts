import { DeliveryLocationFormProps } from 'components'

const submit = (e: any, stepTo: 1|2|3): void => {
  return console.log(e, stepTo)
}

export const mock: DeliveryLocationFormProps = {
  onFormSubmit: submit
}
