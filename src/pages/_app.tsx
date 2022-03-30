import ContainerLayout from '@/components/layout/ContainerLayout'
import HeaderLayout from '@/components/layout/HeaderLayout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Router } from 'next/router'
import { useState } from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(false)

  Router.events.on('routeChangeStart', () => {
    setProgress(true)
    //function will fired when route change started
  })

  Router.events.on('routeChangeComplete', () => {
    setProgress(false)
    //function will fired when route change ended
  })

  return (
    <div className="bg-primary flex w-full min-h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="w-full pb-20">
        <HeaderLayout />
        <ContainerLayout>
          {progress && <TopBarProgress />}
          <Component {...pageProps} />
        </ContainerLayout>
      </div>
    </div>
  )
}

export default MyApp
