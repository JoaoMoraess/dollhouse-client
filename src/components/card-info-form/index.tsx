import { useState } from 'react'

import { Button, InputText } from 'components'
import { ArrowLeftIcon } from 'icons'

export type CardInfoFormProps = {
  onFormSubmit: (e: any, setpTo: 1 | 2 | 3) => void
}

export type CardInfo = {
  cardHolderName: string
  cardNumber: string
  cardExpirationYear: string
  cardExpirationMoth: string
  cardSecurityCode: string
}

export const CardInfoForm: React.FC<CardInfoFormProps> = ({
  onFormSubmit
}) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardHolderName: '',
    cardNumber: '',
    cardExpirationYear: '',
    cardExpirationMoth: '',
    cardSecurityCode: ''
  })

  const resetState = (): void => {
    setCardInfo({
      cardHolderName: '',
      cardNumber: '',
      cardExpirationYear: '',
      cardExpirationMoth: '',
      cardSecurityCode: ''
    })
  }

  const submit = (e: React.FormEvent, setpTo: 1| 2 | 3): void => {
    e.preventDefault()
    onFormSubmit(cardInfo, setpTo)
  }

  return (
  <div data-testid="cardInfoForm">
    <form onSubmit={(e) => submit(e, 3)}>
      <div className="border-2 rounded-lg relative border-purple-600 gap-4 p-8 pt-14 flex flex-col">
        <div title="Voltar" onClick={(e) => submit(e, 1)} className="absolute top-3 left-3 cursor-pointer">
          <ArrowLeftIcon />
        </div>
        <InputText
          name="cardName"
          value={cardInfo.cardHolderName}
          labelText="Nome"
          onInputChange={(e) => setCardInfo(old => ({ ...old, cardHolderName: e }))}
        />
        <InputText
          name="cardNumber"
          value={cardInfo.cardNumber}
          labelText="Numero do cartao"
          onInputChange={(e) => setCardInfo(old => ({ ...old, cardNumber: e }))}
        />
        <div className="flex items-center justify-between">
          <div className="w-2/4 flex flex-col gap-4">
            <InputText
              name="cardExpiration"
              value={cardInfo.cardExpirationYear}
              labelText="Ano de vencimento"
              onInputChange={(e) => setCardInfo(old => ({ ...old, cardExpirationYear: e }))}
            />
            <InputText
              name="cardExpiration"
              value={cardInfo.cardExpirationMoth}
              labelText="Mes de vencimento"
              onInputChange={(e) => setCardInfo(old => ({ ...old, cardExpirationMoth: e }))}
            />
          </div>
          <div className="w-20">
            <InputText
              name="cardCvc"
              value={cardInfo.cardSecurityCode}
              labelText="CVC"
              onInputChange={(e) => setCardInfo(old => ({ ...old, cardSecurityCode: e }))}
            />
          </div>
        </div>
        <div className="flex items-center justify-around pt-4">
          <Button title="Refazer" onClick={resetState}>Refazer</Button>
          <Button title="Enviar" type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  </div>
  )
}
