import HeaderLayout from '@/components/layout/HeaderLayout'
import ContainerLayout from '@/components/layout/ContainerLayout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <HeaderLayout />
      <ContainerLayout>
        <Component {...pageProps} />
      </ContainerLayout>
    </div>
  )
}

export default MyApp
