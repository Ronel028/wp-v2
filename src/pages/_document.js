import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <meta name="description" content="A frontend developer, after graduating with a Bachelor of Science
              in Information Technology, taught myself frontend development.
              Currently, I have 9 months of experience, mainly using the TALL
              Stack (Tailwind, Alpine.js, Laravel, and Livewire). Additionally,
              I have experience in freelance as frontend developer, mostly
              develop thesis/capstone projects." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
