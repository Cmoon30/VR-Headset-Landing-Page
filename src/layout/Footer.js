import React from 'react'
import { HeaderLogo } from '../component/Logo'
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";

function Footer() {
   const Links = [
      ["Home", "ABOUT", "OUR STORY", "OUR TEAM", "BLOG"],
      ["NEWS", "DELIVERY", "PAYMENTS", "CONTACT"],
   ];

   const SocialIcon = [BiLogoFacebook, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube];

   const Footer = ["Privacy Policy", "Contact", "Terms and Conditions"];

   return (
      <div className="grid grid-rows-[1fr,auto] grid-cols-[1fr,auto] border-t-1 border-b-1 mb-6">
         <section className="row-span-1 col-span-1 grid grid-rows-3 gap-1 w-290 px-7 py-7">
            <HeaderLogo className="row-span-1 col-span-1" />
            <p className="row-span-1 col-span-1">Lorem ipsum dolor sit amet nulla adipiscing elit.</p>
            <div className="flex gap-2 ">
               {SocialIcon.map((Icon, i) => (
                  <Icon key={i} className="row-span-1 col-span-1 text-5xl p-2 border-1 rounded-md" />
               ))}
            </div>
         </section>

         <section className="row-span-1 col-span-1 grid grid-cols-2 gap-9 px-6 py-7">
            {Links.map((group, i) => (
               <div className="flex flex-col gap-1" key={i}>
                  {group.map((link, j) => (
                     <p className="hover:underline hover:cursor-pointer" key={j}>{link}</p>
                  ))}
               </div>
            ))}
         </section>
         <section className="row-span-1 col-span-2 grid grid-cols-[1fr,auto,auto,auto,auto,auto] gap-1 px-7 py-4 border-t-1">
            <p>Copyright &copy; 2024 VR. All rights reserved</p>
            {Footer.map((text, i) => (
               <span className="hover:underline hover:cursor-pointer" key={i}>
                  {i > 0 && <i className="select-none">/</i>} {text}
               </span>
            ))}
         </section>
      </div >
   )
}

export default Footer
