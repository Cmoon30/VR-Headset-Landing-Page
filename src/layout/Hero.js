import React from 'react'
import { HeroMidCard } from '../component/Card'
import { HeroBackground } from "../img/IndexImg"

function Hero() {
   return (
      <div className="relative text-white h-550">
         <img className="h-550 w-full" src={HeroBackground} alt="bg" />

         <HeroMidCard />

         <section className="absolute top-0 z-10 h-550 w-full brightness-50 bg-primary/40">
         </section>

         <section className="absolute bottom-n5 right-10">
            <h2 className="text-xxl text-transparent text-stroke tracking-wide leading-none">
               VR
            </h2>
         </section>
      </div>
   )
}

export default Hero
