import AboutTitle from "../component/AboutTitle"
import aboutImage from "../img/about-bg.png"

function About() {
   return (
      <div className="grid grid-cols-[1fr,1fr] gap-6 items-center px-7 py-6 overflow-hidden border text-black">
         <img className="h-600 w-full rounded-xl" src={aboutImage} alt="bg" />

         <section className="flex flex-col gap-4 w-full">
            <AboutTitle />

            <p className="text-5xl"><span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">VR Headset</span> <br /> for enterprises</p>

            <p className="text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>

            <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>

            <button className="px-4 py-1 w-fit bg-secondary text-white rounded-md hover:bg-secondary/85">Learn More</button>
         </section>
      </div>
   )
}

export default About
