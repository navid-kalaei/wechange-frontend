import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import ThemeProvider from '../containers/ThemeProvider'


export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <ThemeProvider>
      {
        getLayout(
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Component {...pageProps} />,
        )
      }
    </ThemeProvider>
  )
}

export default App
