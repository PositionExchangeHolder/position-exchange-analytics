import HeaderLayout from '@/components/layout/HeaderLayout'
import ContainerLayout from '@/components/layout/ContainerLayout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContainerLayout>
      <HeaderLayout />
      <Component {...pageProps} />
    </ContainerLayout>
  )
}

export default MyApp
