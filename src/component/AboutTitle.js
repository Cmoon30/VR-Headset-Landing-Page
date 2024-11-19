import React from 'react'
import logo from "../img/logo.png"

const AboutTitle = () => {
   return (
      <div className="flex gap-1 items-center">
         <img className="h-4 select-none" src={logo} alt="logo" />
         <h2 className="text-lg">About</h2>
      </div>
   )
}

export default AboutTitle
