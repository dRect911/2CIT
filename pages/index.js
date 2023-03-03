import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Head>
        <title>2CIT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="snap-mandatory snap-y">

        {/* hero section */}
        <div id="home" className="w-full h-screen snap-center snap-always relative overflow-x-clip overflow-y-visible flex sm:flex-wrap lg:flex-nowrap justify-between items-center md:gap-[20px] px-4 text-center md:text-left lg:px-[100px] " >

          {/* headline div */}
          <div className=" w-1/2 transition-all" >
            {/* lg:max-w-[600px] xl:max-w-none xl:min-w-[600px] */}
            <div>

              <h1 className="font-semibold text-[36px] md:text-[36px] xl:text-[52px] transition-all uppercase" >
                Découvrez le Centre de Conception et d'Innovation Technologique
              </h1>

              <p className="text-[16px] md:text-[20px] xl:text-[22px] mt-[10px] text-primary-dark transition-all " >
              2CIT dispose d'un personnel composé d'ingénieurs et de techniciens ayant fait leurs preuves dans diverses entreprises de la place.
              </p>

              <button href="#section1" className="bg-primary text-white border-2 border-primary hover:border-secondary hover:bg-white hover:text-secondary hover:-translate-y-1 px-[24px] py-[6px] mt-[30px] lg:text-[20px] font-bold rounded-full transition-all " >
                Découvrez nos services
        
              </button>

            </div>
          </div>

          {/* image here */}

          {/* <div className=" hidden lg:flex lg:h-[400px] xl:shrink-0 xl:h-[500px] transition-all" /> */}
          <div className=" w-1/2 transition-all" />

          <img src="/meca-industrielle-1.jpg" className="absolute top-[40vh] -right-[15vw] h-[80vh] rounded-3xl ring-4 ring-offset-4 ring-secondary " />

        </div>
        
        {/* serrvices section */}
        <div id="section1" className="w-full h-screen snap-center snap-always bg-primary-light " >

        </div>
        
        {/* hero section */}
        <div id="section2" className="w-full h-screen snap-center snap-always " >

        </div>
        
        {/* hero section */}
        <div id="section3" className="w-full h-screen snap-center snap-always bg-secondary-light " >

        </div>

      </main>
    </>
  )
}
