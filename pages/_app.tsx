import type { AppProps } from 'next/app'

import 'styles/globals.css'

import { AlertProvider } from 'hooks/use-alert'
import { AccountProvider } from 'utils/factories/hooks/use-account'
import { CartProvider } from 'utils/factories/hooks/use-cart'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AccountProvider>
      <AlertProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </AlertProvider>
    </AccountProvider>
  )
}

export default MyApp
