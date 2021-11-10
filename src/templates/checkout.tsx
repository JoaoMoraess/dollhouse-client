import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { CardInfo, CardInfoForm, DeliveryLocationForm, DeliveryLocationInfo } from 'components'
import { CART_KEY, LocalCartItems, useCart } from 'hooks/use-cart'
import { axiosAdapter } from 'utils/adapters/axios'
import { localStorageAdapter } from 'utils/adapters/local-storage'
import { baseApiUrl } from 'utils/api'

import { BaseTemplate } from './base'

export const CheckoutTemplate: React.FC = () => {
  const { itemsCount } = useCart()
  const { push } = useRouter()

  useEffect(() => {
    if (itemsCount <= 0) void push('/')
  })

  const [step, setStep] = useState< 1 | 2 | 3 >(1)

  const [purchaseInfo, setPurchaseInfo] = useState<CardInfo & DeliveryLocationInfo>({
    cep: '',
    city: '',
    district: '',
    number: '',
    aptoNumber: '',
    isHouse: null,
    cardHolderName: '',
    cardNumber: '',
    cardExpirationMoth: '',
    cardExpirationYear: '',
    cardSecurityCode: ''
  })

  const changeStep = (value: any, stepTo: 1 | 2 | 3): void => {
    setPurchaseInfo((old) => ({ ...old, ...value }))
    setStep(stepTo)
  }

  const confirmPurchase = async (): Promise<void> => {
    const localProducts = localStorageAdapter().get<LocalCartItems>({ key: CART_KEY })
    const info = { ...purchaseInfo, localProducts }
    console.log(info)
    const { statusCode } = await axiosAdapter({
      method: 'post',
      url: `${baseApiUrl}/effect-purchase`,
      body: { ...purchaseInfo, localProducts, cardBrand: 'VISA' }
    })
    if (statusCode === 204) {
      void push('/success')
    }
  }

  return (
    <BaseTemplate>
      <div className="flex h-full mt-16 items-center justify-center">
        {step === 1 && (
          <DeliveryLocationForm onFormSubmit={changeStep} />
        )}
        {step === 2 && (
          <CardInfoForm onFormSubmit={changeStep} />
        )}
        {step === 3 && (
          <button onClick={async () => await confirmPurchase()}>Confirmar compra</button>
        )}
      </div>
    </BaseTemplate>
  )
}
