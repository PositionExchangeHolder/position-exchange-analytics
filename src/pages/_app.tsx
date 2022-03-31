import ContainerLayout from '@/components/layout/ContainerLayout'
import HeaderLayout from '@/components/layout/HeaderLayout'
import Loading from '@/components/loading/Loading'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Router } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(false)
  const [loading, setLoading] = useState(false)

  const onStartLoading = useCallback(() => {
    setLoading(true)
  }, [])

  const onStopLoading = useCallback(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setProgress(true)
      onStartLoading()
    })

    Router.events.on('routeChangeComplete', () => {
      setProgress(false)
      onStopLoading()
    })
    Router.events.on('routeChangeError', onStopLoading)
    return () => {
      Router.events.off('routeChangeStart', onStartLoading)
      Router.events.off('routeChangeComplete', onStopLoading)
      Router.events.off('routeChangeError', onStopLoading)
    }
  }, [])
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
      {loading && <Loading />}
    </div>
  )
}

export default MyApp
