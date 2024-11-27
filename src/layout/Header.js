import React, { useState, useEffect } from "react";
import { HeaderLogo } from '../component/Logo'
import Navlink from '../component/Navlink'
import AuthCartPanel from '../component/AuthCartPanel'

function Header() {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);
   return (
      <nav
         className={`fixed transition ease-in-out delay-150 grid grid-cols-[1fr_350px_125px] items-center h-fit w-full px-4 py-2 z-50 text-white ${isScrolled ? "bg-black" : "bg-transparent"
            }`}
      >
         <HeaderLogo />
         <Navlink />
         <AuthCartPanel />
      </nav>
   )
}

export default Header
