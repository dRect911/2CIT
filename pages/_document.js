import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/Navbar'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="w-full relative" >
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
