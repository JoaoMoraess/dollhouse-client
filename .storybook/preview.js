import { CartContext, CartContextDefaultValues } from 'hooks/use-cart'
import {AlertContext, AlertContextDefaultValues} from 'hooks/use-alert'
import {AccountContext, AccountContextDefaultValues} from 'hooks/use-account'
import '../.jest/next-image.mock'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
}

export const decorators = [
  (Story, context) => (
    <AccountContext.Provider value={{
      ...AccountContextDefaultValues,
      ...(context?.args?.alertContextValue || {}),
        ...context.args
    }}>
      <AlertContext.Provider
        value={{
          ...AlertContextDefaultValues,
          ...(context?.args?.alertContextValue || {}),
          ...context.args
        }}>
        <CartContext.Provider
          value={{
            ...CartContextDefaultValues,
            ...(context?.args?.cartContextValue || {}),
            ...context.args
          }}>
          <Story />
        </CartContext.Provider>
      </AlertContext.Provider>
    </AccountContext.Provider>
  )
]