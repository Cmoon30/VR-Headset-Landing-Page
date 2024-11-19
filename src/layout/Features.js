import React from 'react';
import logo from "../img/logo.png";
import bgOne from "../img/features-bg_one.png";
import bgTwo from "../img/features-bg_two.png";
import bgThree from "../img/features-bg_three.png";
import bgFour from "../img/features-bg_four.png";
import bgFive from "../img/features-bg_five.png";

const FeatureCard = ({ bgImg, title, subtitle, description }) => (
   <div className="relative row-span-1 col-span-1 rounded-lg overflow-hidden">
      <img className="absolute top-0 w-full brightness-50" src={bgImg} alt={title} />
      <section className="absolute grid grid-rows-[315px,auto,auto] grid-cols-[auto,1fr] gap-1 top-0 z-10 px-4 py-3 w-full text-white">
         <img className="row-span-1 col-span-1 h-4" src={logo} alt="logo" />
         <h3 className="row-span-1 col-span-1">{title}</h3>
         <h4 className="row-span-1 col-span-2 text-4xl">{subtitle}</h4>
         <p className="row-span-1 col-span-2">{description}</p>
      </section>
   </div>
);

function Features() {
   return (
      <div className="grid grid-rows-[auto_500px_500px_500px] grid-cols-2 gap-5 w-full h-full px-7 pb-6 text-white">
         <div className="row-span-1 col-span-2 justify-items-center text-center bg-red">
            <p className="text-5xl w-fit text-black">Next-level <span className="bg-gradient-to-r to-primary from-secondary bg-clip-text text-transparent">features</span> <br />and experiences</p>
         </div>

         <FeatureCard
            bgImg={bgOne}
            title="PREMIUM COMFORT"
            subtitle="The pinnacle of wearable tech innovation"
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
         />
         <FeatureCard
            bgImg={bgTwo}
            title="INFINITE DISPLAY"
            subtitle="Experience reality from a whole new perspective"
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
         />
         <div className="relative row-span-1 col-span-2 rounded-lg overflow-hidden">
            <img className="absolute top-0 w-full brightness-50" src={bgThree} alt="bgThree" />
            <section className="absolute grid grid-rows-[315px,auto,auto] grid-cols-[auto,1fr] gap-1 top-0 w-448 z-10 px-4 py-3 text-white">
               <img className="h-4" src={logo} alt="logo" />
               <h3 className="row-span-1 col-span-1">MULTI-TASKING</h3>
               <h4 className="row-span-1 col-span-2 text-4xl">Mastering multitasking is the new superpower</h4>
               <p className="row-span-1 col-span-2">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.</p>
            </section>
         </div>

         <FeatureCard
            bgImg={bgFour}
            title="TRACKING"
            subtitle="Precision Motion Tracking"
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
         />
         <FeatureCard
            bgImg={bgFive}
            title="HARDWARE"
            subtitle="The pinnacle of wearable tech innovation"
            description="Advanced Generation Hardware"
         />
      </div>
   );
}

export default Features;
