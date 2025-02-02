import Footer from '@/components/common/footer'
import Header from '@/components/common/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
 
  return(
  <div className="">
        <Header  />
    <Component {...pageProps} />
    <Footer />
  </div>
  )
}
