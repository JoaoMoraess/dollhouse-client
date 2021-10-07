import { CartContext, CartContextDefaultValues } from 'hooks/use-cart'
import '../.jest/next-image.mock'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
}



export const decorators = [
  (Story, context) => (
    <CartContext.Provider
      value={{
        ...CartContextDefaultValues,
        ...(context?.args?.cartContextValue || {}),
        ...context.args
      }}>
      <Story />
    </CartContext.Provider>
  )
]