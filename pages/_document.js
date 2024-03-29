import { Html, Head, Main, NextScript } from 'next/document'
// import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { useState, useEffect } from 'react';

export default function Document() {
  const [currentSection, setCurrentSection] = useState("#home");

  /* console.log(currentSection);
  console.log('logged currentSection from _document.js'); */

 
  

  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="w-full relative scrollbar-hide" >
        <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
