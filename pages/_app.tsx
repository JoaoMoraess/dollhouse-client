import type { AppProps } from 'next/app'

import 'application/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
