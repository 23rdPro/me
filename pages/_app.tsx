// import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from 'next/app'
import Head from "next/head";

config.autoAddCss = false; 

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Component {...pageProps} />
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Portfolio- Olumide Bakare.. with create-next-app" />
      <title>Olumide Bakare | Full-Stack Engineer</title>
    </Head>
  </>
  )
}
