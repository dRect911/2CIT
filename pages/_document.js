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
      <Head>
        <meta name="description" content="Découvrez le Centre de Conception et d'Innovation Technologique. 2CIT dispose d'un personnel composé d'ingénieurs et de techniciens ayant fait leurs preuves dans diverses entreprises de la place." />
      </Head>
      <body className="w-full relative" >
        <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
