import { HeaderTitle } from "../component/Logo";
import GradientTitle from "../component/GradientTitle";
import { bgFeatureOne, bgFeatureTwo, bgFeatureThree, bgFeatureFour, bgFeatureFive } from "../img/IndexImg"

const FeatureCard = ({ bgImg, title, subtitle, description }) => (
   <div className="relative row-span-1 col-span-1 rounded-lg overflow-hidden">
      <img className="absolute top-0 w-full brightness-25" src={bgImg} alt={title} />

      <section className="absolute flex flex-col justify-between top-0 z-10 px-4 py-3 w-full h-full text-white">
         <HeaderTitle title={title} />
         <div className="">
            <h4 className="text-2.5xl leading-none">{subtitle}</h4>
            <p className="">{description}</p>
         </div>
      </section>
   </div>
);

function Features() {
   return (
      <div className="grid grid-rows-[auto_500px_500px_500px] grid-cols-2 gap-5 w-full h-full px-7 pb-6 text-white">
         <div className="row-span-1 col-span-2 justify-items-center text-center bg-red">
            <p className="text-5xl w-fit text-black">Next-level <GradientTitle title={"features"} /> <br />and experiences</p>
         </div>

         <FeatureCard
            bgImg={bgFeatureOne}
            title="PREMIUM COMFORT"
            subtitle="The pinnacle of wearable tech innovation"
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
         />
         <FeatureCard
            bgImg={bgFeatureTwo}
            title="INFINITE DISPLAY"
            subtitle="Experience reality from a whole new perspective"
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
         />

         <div className="relative row-span-1 col-span-2 rounded-lg overflow-hidden">
            <img className="absolute top-0 w-full brightness-25" src={bgFeatureThree} alt="bgThree" />
            <section className="absolute flex flex-col justify-between h-full top-0 w-448 z-10 px-4 py-3 text-white">
               <HeaderTitle title={"MULTI-TASKING"} />

               <div>
                  <h4 className="row-span-1 col-span-2 text-4xl">Mastering multitasking is the new superpower</h4>
                  <p className="row-span-1 col-span-2">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.</p>
               </div>
            </section>
         </div>

         <FeatureCard
            bgImg={bgFeatureFour}
            title="TRACKING"
            subtitle="Precision Motion Tracking"
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
         />

         <FeatureCard
            bgImg={bgFeatureFive}
            title="HARDWARE"
            subtitle="Advanced Generation Hardware"
            description="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor."
         />
      </div>
   );
}

export default Features;
