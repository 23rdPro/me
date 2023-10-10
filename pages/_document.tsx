import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" /> */}
          {/* <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="%PUBLIC_URL%/apple-icon.png"
          /> */}
          {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
          <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/compiled-tailwind.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
