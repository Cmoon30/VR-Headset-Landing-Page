import { HeaderTitle } from '../component/Logo'
import GradientTitle from '../component/GradientTitle';
import { aboutImage } from "../img/IndexImg"

const Paragraph = ({ parag }) => (
   <p>{parag}</p>
)

function About() {
   const paragraphs = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat",
   ];

   return (
      <div className="grid grid-cols-[1fr,1fr] gap-6 items-center px-7 py-6 overflow-hidden text-black">
         <img className="h-600 w-full rounded-xl" src={aboutImage} alt="bg" />

         <section className="flex flex-col gap-4 w-full">
            <HeaderTitle title={"About"} />

            <p className="text-5xl"><GradientTitle title={"VR Headset"} /> <br /> for enterprises</p>

            {paragraphs.map((parag, index) => (
               <Paragraph key={index} parag={parag} />
            ))}

            <button className="transition ease-in-out delay-150 hover:scale-110 px-4 py-1 w-fit bg-secondary text-white rounded-md hover:bg-secondary/85">Learn More</button>
         </section>
      </div>
   )
}

export default About
