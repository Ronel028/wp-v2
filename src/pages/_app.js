import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ronel Florida | Web Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
