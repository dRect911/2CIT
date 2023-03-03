import React from 'react'
import { Search } from '@carbon/icons-react';

const Navbar = ( {currentSection, setCurrentSection} ) => {

  /* console.log(currentSection);
  console.log('logged currentSection from Navbar.jsx'); */

  const testLog = () => console.log('test from testLog');
    

  return (
    <div className="fixed top-0 w-full p-2 flex justify-between bg-transparent px-[240px] backdrop-blur-md z-50">
        {/* <div className="rounded-full p-[1px] " >

        </div> */}
        <img src="/logo-2cit.png" className="h-12 rounded-full" />
        <div className="flex gap-6 items-center font-normal text-[18px] " >
            <a href="#home" className="text-dark hover:text-primary-dark transition-all cursor-pointer "  >Accueil</a>
            <a href="#section1" className="text-dark hover:text-primary-dark transition-all cursor-pointer " >Nos services</a>
            <a href="#section2" className="text-dark hover:text-primary-dark transition-all cursor-pointer " >Nos domaines</a>
            <a href="#section3" className="text-dark hover:text-primary-dark transition-all cursor-pointer " >Section 3</a>
            <a href="#section4" className="text-dark hover:text-primary-dark transition-all cursor-pointer " onClick={testLog} >Contacts</a>

            {/* onClick={()=>{ console.log(currentSection) } } */}
            {/* <li><Search className='h-[18px] ' size={32} /></li> */}
        </div>
    </div>
  )
}

export default Navbar