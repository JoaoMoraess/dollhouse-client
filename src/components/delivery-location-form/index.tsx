import { useState } from 'react'

import { Button, InputText } from 'components'

export type DeliveryLocationFormProps = {
  onFormSubmit: (e: any, stepTo: 1 | 2 | 3) => void
}

export type DeliveryLocationInfo = {
  cep: string
  city: string
  district: string
  number: string
  aptoNumber: string
  isHouse: boolean | null
}

export const DeliveryLocationForm: React.FC<DeliveryLocationFormProps> = ({
  onFormSubmit
}) => {
  const [location, setLocation] = useState<DeliveryLocationInfo>({
    cep: '',
    city: '',
    district: '',
    number: '',
    aptoNumber: '',
    isHouse: null
  })

  const resetState = (): void => {
    setLocation({
      cep: '',
      city: '',
      district: '',
      number: '',
      aptoNumber: '',
      isHouse: null
    })
  }

  const submit = (e: React.FormEvent, setpTo: 1 | 2 | 3): void => {
    e.preventDefault()
    onFormSubmit(location, setpTo)
  }

  return (
  <div data-testid="deliveryLocationForm" className="w-96">
    <form onSubmit={(e) => submit(e, 2)}>
      <div className="border-2 rounded-lg border-purple-600 gap-4 p-8 flex flex-col">
        <InputText
          name="city"
          value={location.city}
          labelText="Cidade"
          onInputChange={(value) => setLocation(old => ({ ...old, city: value }))}
        />
        <InputText
          name="dictrict"
          value={location.district}
          labelText="Bairro"
          onInputChange={(value) => setLocation(old => ({ ...old, district: value }))}
        />

        <div className={`${location.isHouse && 'flex items-center justify-between'}`}>
          <div className={`transition-all ${(!location.isHouse || location.isHouse === null) ? 'w-full' : 'w-2/5'}`}>
            <InputText
              name="cep"
              value={location.cep}
              labelText="CEP"
              onInputChange={(value) => setLocation(old => ({ ...old, cep: value }))}
            />
          </div>
          <div className={`${!location.isHouse ? 'flex items-center justify-between' : 'w-2/5'} pt-3`}>
            {location.isHouse !== null && (
              <div className={`${!location.isHouse && 'w-2/5'}`}>
                <InputText
                  name="number"
                  value={location.number}
                  labelText="Numero"
                  onInputChange={(value) => setLocation(old => ({ ...old, number: value }))}
                />
              </div>
            )}
            {!location.isHouse && (
              <div className="w-2/5">
                <InputText
                  name="aptoNumber"
                  value={location.aptoNumber}
                  labelText="Numero - apartamento"
                  onInputChange={(value) => setLocation(old => ({ ...old, aptoNumber: value }))}
                />
              </div>
            )}
          </div>
        </div>
        {location.isHouse === null && (
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center justify-center text-gray-800">
              <button className="text-purple-600 border-2 border-pink-600 rounded-md p-2" onClick={() => setLocation((old) => ({ ...old, isHouse: true }))}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </button>
              <span>Casa</span>
            </div>
            <div className="flex flex-col items-center justify-center text-gray-800">
              <button className="text-purple-600 border-2 border-pink-600 rounded-md p-2" onClick={() => setLocation((old) => ({ ...old, isHouse: false }))}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </button>
              <span>Apto.</span>
            </div>
          </div>
        )}
        <div className="flex items-center justify-around border-t-2 border-pink-600 pt-4">
          <Button onClick={resetState}>Refazer</Button>
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  </div>
  )
}
