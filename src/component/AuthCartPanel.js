import React from 'react'
import { LuShoppingBag } from "react-icons/lu";

function AuthCartPanel() {
   const auths = ["Login", "Signup"]

   return (
      <div className="flex items-center h-fit gap-0.5">
         {auths.map((auth, index) => (
            <>
               <p className="cursor-pointer transition ease-in-out hover:text-secondary" key={index}>{auth}
               </p>
               {index < auths.length - 1 && (
                  <span>/</span>
               )}
            </>
         ))}

         <LuShoppingBag className="cursor-pointer text-xl ml-0.5" />
      </div>
   )
}

export default AuthCartPanel
