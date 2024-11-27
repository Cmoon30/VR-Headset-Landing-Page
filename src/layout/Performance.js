import React from 'react';
import GradientTitle from '../component/GradientTitle';
import { HeaderTitle } from '../component/Logo';
import { bgPeroformance, performanceEyeIcon, performanceHd, performancePlatform, performanceWifi } from '../img/IndexImg';

const DescriptionTitle = ({ src, description }) => (
   <div className="flex flex-col items-center">
      <img className="select-none w-7" src={src} alt="icon" />
      <span>{description}</span>
   </div>
);

const Table = ({ title, data }) => (
   <>
      <thead className="text-lg">
         <tr className="border-b">
            <th className="py-2 text-left" scope="col">{title}</th>
         </tr>
      </thead>
      <tbody>
         {data.map(({ key, value }, index) => (
            <tr className="border-b-1.5 last:border-b-0 whitespace-nowrap" key={index}>
               <td className="p-1 w-1/2">{key}</td>
               <td>{value}</td>
            </tr>
         ))}
      </tbody>
   </>
);

const Performance = () => {
   const connectTableData = [
      { key: 'Bluetooth', value: 'Version 5.3' },
      { key: 'Wi-Fi', value: 'Dual-Band Wi-Fi (2.4 & 5 GHz)' },
      { key: 'Wireless Powerlink', value: 'Up to 24 bit / 96 kHz' },
      { key: 'Physical Connections', value: 'Ethernet, Power Link, USB-C' },
      { key: 'Streaming Services', value: 'AirPlay, Spotify, TIDAL, Deezer, QPlay' },
   ];

   const audioTableData = [
      { key: 'Amplifier', value: '1 x 50 W class D' },
      { key: 'Maximum SPL', value: '104 dB' },
      { key: 'Bass Capability', value: '90 dB' },
      { key: 'Adjustable EQ', value: 'Bass, Treble, Loudness' },
      { key: 'Advanced Features', value: 'Active Room Compensation' },
   ];

   return (
      <>
         <div className="relative h-500">
            <img className="absolute top-0 brightness-25 h-full" src={bgPeroformance} alt="bg" />
            <section className="absolute top-0 z-10 flex flex-col justify-center items-center gap-1 w-full h-full text-white">
               <HeaderTitle title="PERFORMANCE" />
               <p className="text-4xl mt-3">
                  Revolutionizing <GradientTitle title="VR Excellence" />
               </p>

               <div className="flex gap-6 mt-10">
                  {[performancePlatform, performanceHd, performanceWifi, performanceEyeIcon].map((src, i) => (
                     <DescriptionTitle
                        key={i}
                        src={src}
                        description={['Powerful Platform', 'High-resolution Display', 'Wireless Connectivity', 'Eye Tracking'][i]}
                     />
                  ))}
               </div>
            </section>
         </div>

         <div className="px-7 py-6 text-black flex justify-between">
            <section className="flex flex-col items-center w-1/3">
               <HeaderTitle title="PERFORMANCE" />
               <h2 className="text-4xl mt-2">Tech Specs</h2>
            </section>

            <div className="w-2/4">
               <table className="table-auto w-full">
                  <Table title="Connectivity" data={connectTableData} />
                  <Table title="Audio" data={audioTableData} />
               </table>

               <section className="text-end w-full">
                  <span className="text-secondary animation ease-in-out font-semibold cursor-pointer hover:underline">View More</span>
               </section>
            </div>

         </div>
      </>
   );
};

export default Performance;
