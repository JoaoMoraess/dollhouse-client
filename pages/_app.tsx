import type { AppProps } from 'next/app'

import 'styles/globals.css'
import { CartProvider } from 'utils/factories/hooks/use-cart'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
