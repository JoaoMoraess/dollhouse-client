import { AccountProvider as Provider } from 'hooks/use-account'
import { localStorageAdapter } from 'utils/adapters/local-storage'

export const AccountProvider = Provider(localStorageAdapter)
