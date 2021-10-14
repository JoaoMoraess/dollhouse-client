import type { AppProps } from 'next/app'

import 'styles/globals.css'

import { AlertProvider } from 'hooks/use-alert'
import { CartProvider } from 'utils/factories/hooks/use-cart'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AlertProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AlertProvider>
  )
}

export default MyApp
