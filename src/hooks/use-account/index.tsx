import { createContext, useContext, useEffect, useState } from 'react'

import { LocalStorageAdapter } from 'utils/adapters/local-storage'

export type Account = {
  name: string,
  token: string,
}

export type AccountContextData = {
  account: Account | null,
  auth: ({ name, token }: Account) => void,
  logout: () => void,
}

export const AccountContextDefaultValues = {
  account: null,
  auth: () => {},
  logout: () => {}
}
export const AccountContext = createContext<AccountContextData>(
  AccountContextDefaultValues
)

export type Setup = (localStorageAdapter: LocalStorageAdapter) => Context

export type Context = (input: { children: React.ReactNode }) => JSX.Element

const AccountProvider: Setup = (localStorageAdapter) => ({ children }) => {
  const [accountState, setAccountState] = useState<Account | null>(null)

  useEffect(() => {
    const localAccount = localStorageAdapter().get({ key: 'account' })
    if (localAccount !== null || localAccount !== undefined) setAccountState(localAccount)
  }, [])

  const auth = ({ name, token }: Account): void => {
    localStorageAdapter().set({ key: 'account', value: { name, token } })
    setAccountState({ name, token })
  }

  const logout = (): void => {
    localStorageAdapter().set({ key: 'account', value: null })
    setAccountState(null)
  }

  return (
      <AccountContext.Provider
        value={{
          account: accountState,
          auth,
          logout
        }}>
        {children}
      </AccountContext.Provider>
  )
}

const useAccount = (): AccountContextData => useContext(AccountContext)

export { AccountProvider, useAccount }
