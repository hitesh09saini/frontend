
import Image from "next/image"
import React from 'react'
import { Holtwood_One_SC } from "next/font/google";
import p1 from '/public/p-1.jpg'
import birds from '/public/birds.json'
import LottieArrow from "./LottieArrow";
import Button from "./Button";

const macondo = Holtwood_One_SC({
    subsets: ["latin"],
    weight: ['400']
});

const Hero = () => {
    const text = '< Fullstack />'
 
    

    return (
        <div className="hero min-h-screen box  relative  pt-[60px] flex justify-center items-center relative" >
            <h1 title="full-stack developer" className={`text-[10vw]   drop-shadow-2xl relative ${macondo.className}  `}><span className="text-[3vw] absolute top-0 left-[-30px] fullstack"> {text}</span>
                <span className="developer">D</span>
                <span className="developer">e</span>
                <span className="developer">v</span>
                <span className="developer">e</span>
                <span className="developer">l</span>
                <span className="developer">o</span>
                <span className="developer">p</span>
                <span className="developer">e</span>
                <span className="developer ">r
                </span>

            </h1>
            <LottieArrow animationData={birds} className={'absolute h-[100vh]  top-0 left-0  w-[100vw] z-50'} />

            {/* <Image src={my} className="absolute bottom-[50px] right-[10px]" width={100}/> */}
            <Image className="absolute   img rounded-xl left-[5%] bottom-[5%] max-sm:scale-50 " src={p1} alt="Logo" width={60} height={40}></Image>
            {/* <Image className="absolute z-40 img rounded-xl left-[5%] bottom-[20%] max-sm:scale-[0.3]" src={p4} alt="Logo" width={100} height={40}></Image> */}

            <Button  />
        </div>
    )
}

export default Hero


