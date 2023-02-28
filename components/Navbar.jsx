import React from 'react'
import { Search } from '@carbon/icons-react';

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full p-3 flex justify-end bg-transparent px-[240px] backdrop-blur-md z-50">
        <ul className="flex gap-6 items-center font-normal text-[18px] " >
            <li className="text-primary hover:text-primary-dark transition-all cursor-pointer " ><a href="#home">Accueil</a></li>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
            <li><a href="#section4">Section 4</a></li>
            {/* <li><Search className='h-[18px] ' size={32} /></li> */}
        </ul>
    </div>
  )
}

export default Navbar