import React from 'react'
import { Search } from '@carbon/icons-react';

const Navbar = ( {currentSection, setCurrentSection} ) => {

  /* console.log(currentSection);
  console.log('logged currentSection from Navbar.jsx'); */

  const testLog = () => console.log('test from testLog');
    

  return (
    <div className="group fixed top-0 w-full p-[6px] flex justify-between bg-transparent hover:bg-light/25 hover:backdrop-blur-md px-[240px]  z-50">
        {/* <div className="rounded-full p-[1px] " >

        </div> */}
        <img src="/logo-2cit.png" className="opacity-0 group-hover:opacity-100 h-12 rounded-full transition-all" />
        <div className="flex gap-4 px-1 items-center group-hover:bg-light/25 rounded-full font-normal text-[18px] transition-all " >
            <a href="#home" className="text-dark hover:text-primary-dark transition-all cursor-pointer p-3 hover:bg-primary-light/50 rounded-full "  >Accueil</a>
            <a href="#section1" className="text-dark hover:text-primary-dark transition-all cursor-pointer p-3 hover:bg-primary-light/50 rounded-full " >Nos services</a>
            <a href="#section2" className="text-dark hover:text-primary-dark transition-all cursor-pointer p-3 hover:bg-primary-light/50 rounded-full " >Section 2</a>
            <a href="#section3" className="text-dark hover:text-primary-dark transition-all cursor-pointer p-3 hover:bg-primary-light/50 rounded-full " >Section 3</a>
            <a href="#contacts" className="text-dark hover:text-primary-dark transition-all cursor-pointer p-3 hover:bg-primary-light/50 rounded-full " onClick={testLog} >Contacts</a>

            {/* onClick={()=>{ console.log(currentSection) } } */}
            {/* <li><Search className='h-[18px] ' size={32} /></li> */}
        </div>
    </div>
  )
}

export default Navbar