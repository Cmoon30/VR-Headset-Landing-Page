import React from 'react'
import Navlink from '../component/Navlink'
import AuthCartPanel from '../component/AuthCartPanel'
import Logo from "../../src/img/logo.png"

function Header() {
   return (
      <nav className="fixed grid grid-cols-[1fr_350px_125px] items-center h-fit w-full px-4 py-2 z-50 text-white">
         <img className="h-10 select-none" src={Logo} alt="logo" />

         <Navlink />
         <AuthCartPanel />
      </nav>
   )
}

export default Header
