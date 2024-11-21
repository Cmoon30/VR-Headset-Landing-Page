import React from 'react'
import GradientTitle from './GradientTitle'

export const HeroMidCard = () => {
   return (
      <section className="absolute bottom-1/4 left-20 z-20 flex flex-col gap-2 w-1/3.5">
         <h2 className="text-6xl"><GradientTitle title={"Expand"} /> <br /> your world</h2>

         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>

         <p>starting at <br /> <span className="text-secondary text-4xl">$699.99</span></p>
      </section>
   )
}
