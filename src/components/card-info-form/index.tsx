import { useState } from 'react'

import { InputText } from 'components'

export type CardInfoFormProps = {
  onFormSubmit: (e) => Promise<void>
}

export const CardInfoForm: React.FC<CardInfoFormProps> = ({
  onFormSubmit
}) => {
  const [cardInfo, setCardInfo] = useState({
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
    cardCVC: ''
  })

  const submit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    await onFormSubmit(cardInfo)
  }

  return (
  <div data-testid="cardInfoForm">
    <form onSubmit={async (e) => await submit(e)}>
      <div className="border-2 rounded-lg border-purple-600 gap-4 p-8 flex flex-col">
        <InputText
          name="cardName"
          value={cardInfo.cardName}
          labelText="Nome"
          onInputChange={(e) => setCardInfo(old => ({ ...old, cardName: e }))}
        />
        <InputText
          name="cardNumber"
          value={cardInfo.cardNumber}
          labelText="Numero do cartao"
          onInputChange={(e) => setCardInfo(old => ({ ...old, cardNumber: e }))}
        />
        <div className="flex items-center justify-between">
          <div className="w-2/4">
            <InputText
              name="cardExpiration"
              value={cardInfo.cardExpiration}
              labelText="Data de validade"
              onInputChange={(e) => setCardInfo(old => ({ ...old, cardExpiration: e }))}
            />
          </div>
          <div className="w-20">
            <InputText
              name="cardCvc"
              value={cardInfo.cardCVC}
              labelText="CVC"
              onInputChange={(e) => setCardInfo(old => ({ ...old, cardCVC: e }))}
            />
          </div>
        </div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  </div>
  )
}
