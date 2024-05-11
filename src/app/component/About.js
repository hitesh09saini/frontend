
import React from 'react'
import p5 from '/public/p-5.png'
import LottieArrow from "./LottieArrow";
import arrow from '/public/arrow.json'
import birds from '/public/birds.json'
const About = () => {
  return (
    <div className='min-h-screen bg-[#EEE9EB] pt-8 relative ' >
      <div className="w-full">
        <div className="relative flex overflow-x-hidden bg-[#FDBC17] rotate-3 z-30  shadow-xl">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4 text-4xl">&copy; Hitesh Folio</span>
            <span className="mx-4 text-4xl">&copy; Hitesh Folio</span>
            <span className="mx-4 text-4xl">&copy; Hitesh Folio</span>
            <span className="mx-4 text-4xl">&copy; Hitesh Folio</span>
            <span className="mx-4 text-4xl">&copy; Hitesh Folio</span>
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <span className="mx-4 text-4xl">&copy; Hitesh Folio</span>
            <span className="mx-4 text-4xl">&copy; Hitesh Folio</span>
            <span className="mx-4 text-4xl">&copy; Hitesh Folio</span>
            <span className="mx-4 text-4xl">&copy; Hitesh Folio</span>
            <span className="mx-4 text-4xl">&copy; Hitesh Folio</span>
          </div>
        </div>
        <div className="relative flex overflow-x-hidden bg-[#FDBC17] -rotate-6 z-30  shadow-xl">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4 text-4xl">&#x2022;Hitesh Folio</span>
            <span className="mx-4 text-4xl">&#x2022;Hitesh Folio</span>
            <span className="mx-4 text-4xl">&#x2022;Hitesh Folio</span>
            <span className="mx-4 text-4xl">&#x2022;Hitesh Folio</span>
            <span className="mx-4 text-4xl">&#x2022;Hitesh Folio</span>
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <span className="mx-4 text-4xl">&#x2022; Hitesh Folio</span>
            <span className="mx-4 text-4xl">&#x2022;Hitesh Folio</span>
            <span className="mx-4 text-4xl">&#x2022;Hitesh Folio</span>
            <span className="mx-4 text-4xl">&#x2022;Hitesh Folio</span>
            <span className="mx-4 text-4xl">&#x2022;Hitesh Folio</span>
          </div>
        </div>
      
      </div>
      <LottieArrow animationData={birds} className={'absolute top-0 left-0  w-[100vw] z-50'} />

      <div className='max-md:hidden  absolute top-0 right-0 h-[45vh] w-full border-dashed border-indigo-900 border-0 border-b-2'>

      </div>

      <div className='bg-red-400 dp sm:w-[400px] relative h-[45vh] bg-cover bg-center ' style={{ backgroundImage: `url(${p5.src})` }}>
        <LottieArrow animationData={arrow} className={'absolute bottom-[-100px] left-0 max-sm:hidden w-[25vw]'} />
        
      </div>
   
      <div className="text-center px-4 py-8">
        <h1 className="text-5xl font-bold">Nice to meet you !</h1>
        <p className="mt-4">
          My name is Hitesh Saini, a Software Engineer. Our journey started when I was pursuing my B.Tech in Electrical Engineering from 2020 to 2024, during my 3rd year, where I explored solving coding problems on various platforms. I believe in embracing all that life has to offer. <span className='text-red-800 suggestion' >I suggest you explore yourself.</span>
        </p>
      </div>



    </div>
  )
}

export default About
