import { CardInfoFormProps } from 'components'

const submit = async (e: any): Promise<void> => {
  return await new Promise(resolve => resolve(e)).then((e) => console.log(e))
}

export const mock: CardInfoFormProps = {
  onFormSubmit: submit
}
