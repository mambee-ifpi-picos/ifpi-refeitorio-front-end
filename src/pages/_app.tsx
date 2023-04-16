import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { GlobalContextProvider } from '../store/globalContext'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

export default MyApp
