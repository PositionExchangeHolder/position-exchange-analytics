import StoreProvider from '@/components/app/StoreProvider'
import ContainerLayout from '@/components/layout/ContainerLayout'
import HeaderLayout from '@/components/layout/HeaderLayout'
import { ExternalProvider, Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Router } from 'next/router'
import { useEffect, useState } from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'
import '../styles/globals.css'

function getLibrary(provider: ExternalProvider) {
  return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setProgress(true)
    })

    Router.events.on('routeChangeComplete', () => {
      setProgress(false)
    })
  }, [])

  return (
    <StoreProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ThemeProvider
          defaultTheme="dark"
          enableSystem={true}
          attribute="class"
        >
          <div className="dark:bg-primary bg-light-primary flex w-full min-h-screen">
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
            </Head>
            <div className="w-full pb-20 ">
              <HeaderLayout />
              <ContainerLayout>
                {progress && <TopBarProgress />}
                <Component {...pageProps} />
              </ContainerLayout>
            </div>
          </div>
        </ThemeProvider>
      </Web3ReactProvider>
    </StoreProvider>
  )
}

export default MyApp
