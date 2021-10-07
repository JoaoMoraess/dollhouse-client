import { CartProvider as Provider } from 'hooks/use-cart'
import { axiosAdapter } from 'utils/adapters/axios'
import { localStorageAdapter } from 'utils/adapters/local-storage'

export const CartProvider = Provider(axiosAdapter, localStorageAdapter)
