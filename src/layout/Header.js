import React from 'react'
import { HeaderLogo } from '../component/Logo'
import Navlink from '../component/Navlink'
import AuthCartPanel from '../component/AuthCartPanel'

function Header() {
   return (
      <nav className="fixed grid grid-cols-[1fr_350px_125px] items-center h-fit w-full px-4 py-2 z-50 text-white">
         <HeaderLogo />
         <Navlink />
         <AuthCartPanel />
      </nav>
   )
}

export default Header
