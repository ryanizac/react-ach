import App from 'next/app'
import type { AppContext, AppProps } from 'next/app'
import { ContextProvider } from '@/contexts/UserContext'
import Template from '@/components/Template'

import '@public/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Template>
        <Component {...pageProps} />
      </Template>
    </ContextProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}
