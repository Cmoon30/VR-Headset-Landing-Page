import React from 'react'

function Navlink() {
   const links = ['Home', 'Shop', 'Blog', 'Contact'];

   return (
      <ul className="flex gap-1 h-fit">
         {links.map((link, index) => (
            <li className="cursor-pointer" key={index}>{link}</li>
         ))}
      </ul>
   )
}

export default Navlink
