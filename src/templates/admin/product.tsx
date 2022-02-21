import { useState } from 'react'

import { Button, InputText } from 'components'
import { InputFile } from 'components/input-file'
import { useAlert } from 'hooks/use-alert'
import { BaseTemplate } from 'templates/base'
import { axiosAdapter, HttpStatusCode } from 'utils/adapters/axios'
import { localStorageAdapter } from 'utils/adapters/local-storage'
import { baseApiUrl } from 'utils/api'

type AddProductsState = {
  name: string
  price: number
  description: string
  file: {buffer: Buffer | null, mimeType: string}
  stock: number
}

export const AdminProductTemplate: React.FC = () => {
  const { open } = useAlert()

  const [addProductsState, setAddProductsState] = useState<AddProductsState>({
    name: '',
    price: 0,
    description: '',
    file: { buffer: null, mimeType: '' },
    stock: 0
  })
  const account = localStorageAdapter().get({ key: 'account' })
  const submitForm = async (e): Promise<void> => {
    e.preventDefault()
    const { statusCode, body } = await axiosAdapter({
      method: 'post',
      url: `${baseApiUrl}/products`,
      body: addProductsState,
      headers: { authorization: account?.token ?? '' }
    })
    if (statusCode === HttpStatusCode.noContent) {
      setAddProductsState({
        name: '',
        price: 0,
        description: '',
        file: { buffer: null, mimeType: '' },
        stock: 0
      })
      open({ is: 'success', message: 'Produto adicionado com sucesso!', timeVisibleInSeconds: 3 })
    } else if (statusCode === HttpStatusCode.serverError) {
      open({ is: 'danger', message: 'Erro ao adicionar produto!', timeVisibleInSeconds: 3 })
    } else {
      open({ is: 'danger', message: body.error, timeVisibleInSeconds: 3 })
    }
  }

  return (
    <BaseTemplate>

      <form onSubmit={submitForm}>
        <div className='flex'>
          <div className="w-6/12 p-4">
            <div>
              <div className='flex gap-4'>
                <InputText autoFocus labelText='Nome do produto' onInputChange={(v) => setAddProductsState((old) => ({ ...old, name: v }))} />
                <div className='w-3/12' >
                  <InputText type="number" labelText='Preco do produto' onInputChange={(v) => setAddProductsState((old) => ({ ...old, price: Number(v) }))} />
                </div>
                <div className='w-1/12' >
                  <InputText autoFocus type='number' labelText='Stoque' onInputChange={(v) => setAddProductsState((old) => ({ ...old, stock: Number(v) }))} />
                </div>
              </div>
              <div className='pt-5'>
                <InputText autoFocus labelText='Descrição' onInputChange={(v) => setAddProductsState((old) => ({ ...old, description: v }))} />
              </div>

              <div className='pt-5'>
                <InputFile autoFocus name='imageFile' labelText='Imagem' onInputChange={(v) => setAddProductsState((old) => ({ ...old, file: v }))} />
              </div>
            </div>
          </div>
        </div>
        <Button type='submit' >Enviar</Button>
      </form>
    </BaseTemplate>
  )
}
