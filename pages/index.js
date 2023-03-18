import { ToolKit } from "@carbon/icons-react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [imgState, setImgState] = useState(40)
  const incImgPos = () => {
    setImgState(imgState + 50)
    console.log(imgState);
  }
  return (
    <>
      <Head>
        <title>2CIT</title>
        <meta
          name="description"
          content="Découvrez le Centre de Conception et d'Innovation Technologique. 2CIT dispose d'un personnel composé d'ingénieurs et de techniciens ayant fait leurs preuves dans diverses entreprises de la place."
        />
        <meta property="og:title" content="2CIT" />
        <meta
          property="og:description"
          content="Découvrez le Centre de Conception et d'Innovation Technologique. 2CIT dispose d'un personnel composé d'ingénieurs et de techniciens ayant fait leurs preuves dans diverses entreprises de la place."
        />
        <link rel="icon" href="/logo-2cit.png" />
      </Head>
      <main className="snap-mandatory snap-y scrollbar-hide">
        {/* hero section */}
        <div
          id="home"
          className="w-full h-screen group snap-center snap-always relative overflow-x-clip overflow-y-visible flex sm:flex-wrap lg:flex-nowrap justify-between items-center md:gap-[20px] px-4 text-center md:text-left lg:px-[100px] "
        >
          {/* headline div */}
          <div className=" w-1/2 transition-all">
            {/* lg:max-w-[600px] xl:max-w-none xl:min-w-[600px] */}
            <div>
              <h1 className="font-semibold text-[36px] md:text-[36px] xl:text-[52px] transition-all uppercase">
                Découvrez le Centre de Conception et d'Innovation Technologique
              </h1>

              <p className="text-[16px] md:text-[20px] xl:text-[22px] mt-[10px] mb-[30px] text-primary-dark transition-all ">
                2CIT dispose d'un personnel composé d'ingénieurs et de
                techniciens ayant fait leurs preuves dans diverses entreprises
                de la place.
              </p>

              <a
                href="#section1"
                onClick={incImgPos}
                className="bg-primary text-white border-2 border-primary hover:border-secondary hover:bg-white hover:text-secondary hover:-translate-y-1 px-[24px] py-[6px] mt-[30px] lg:text-[20px] font-bold rounded-full transition-all"
              >
                Découvrez nos services
              </a>
            </div>
          </div>

          {/* image here */}

          {/* <div className=" hidden lg:flex lg:h-[400px] xl:shrink-0 xl:h-[500px] transition-all" /> */}
          <div className=" w-1/2 transition-all" />

          <img
            src="/meca-industrielle-1.jpg"
            className={`absolute transition-all duration-500 top-[${imgState}vh] left-[55vw] h-[80vh] rounded-3xl ring-4 ring-offset-4 ring-secondary`}
          />
        </div>

        {/* services section */}
        <div
          id="section1"
          className="w-full h-screen snap-center snap-always bg-light px-4 lg:px-[100px] pt-24"
        >
          <h1 className="text-secondary w-1/2  font-semibold text-[36px] md:text-[36px] xl:text-[56px] transition-all uppercase">
            Nos services
          </h1>

          <div className="flex mt-10">
            {/* service card */}
            <div className="group relative flex gap-2 bg-secondary-light hover:bg-secondary text-secondary-dark hover:text-light border-2 border-secondary-dark rounded-xl p-2 transition-all">
              <div>
                <ToolKit size={24} />
              </div>
              <p className="text-xl">Mécanique industrielle</p>
            </div>
          </div>
        </div>

        {/* hero section */}
        <div
          id="section2"
          className="w-full h-screen snap-center snap-always "
        ></div>

        {/* hero section */}
        <div
          id="section3"
          className="w-full h-screen snap-center snap-always bg-secondary-light "
        ></div>
      </main>
    </>
  );
}
