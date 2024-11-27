import React from 'react'

function Navlink() {
   const links = ['Home', 'Shop', 'Blog', 'Contact'];

   return (
      <ul className="flex gap-1 h-fit">
         {links.map((link, index) => (
            <li className="cursor-pointer transition ease-in-out hover:text-secondary" key={index}>{link}</li>
         ))}
      </ul>
   )
}

export default Navlink
