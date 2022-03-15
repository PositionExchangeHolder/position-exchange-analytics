import HeaderLayout from '@/components/layout/HeaderLayout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderLayout>
      <Component {...pageProps} />
    </HeaderLayout>
  )
}

export default MyApp
