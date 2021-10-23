import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { useCart } from 'hooks/use-cart'

import { BaseTemplate } from './base'

export const CheckoutTemplate: React.FC = () => {
  const { itemsCount } = useCart()
  const { push } = useRouter()

  useEffect(() => {
    if (itemsCount <= 0) void push('/')
  })
  return (
    <BaseTemplate>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-purple-600 gap-4 p-8 flex flex-col">
          <div className="flex flex-col">
            <span className="text-white">Nome</span>
            <input type="text" className="outline-none pl-2" />
          </div>
          <div className="flex flex-col">
            <span className="text-white">Numero do cartao</span>
            <input type="number" className="outline-none pl-2" />
          </div>
          <div className="flex gap-3 items-center justify-between">
            <div className="flex flex-col">
              <span className="text-white">Data de vencimento</span>
              <input type="text" className="w-40 outline-none pl-2" />
            </div>
            <div className="flex flex-col w-2/4">
              <span className="text-white">CVC</span>
              <input type="number" className="w-12 outline-none pl-2" />
            </div>
          </div>
        </div>
      </div>
    </BaseTemplate>
  )
}
