import React from 'react'
import Image from 'next/image'
import qr from '/public/qr.jpg'
import { Inconsolata } from "next/font/google";
const Inconsola = Inconsolata({
  subsets: ["latin"],
  weight: ['400']
});

const Footer = () => {
  return (
    <div className='min-h-[300px] bg-[#EEE9EB] pt-8 relative  flex flex-col gap-8 '>
      <div className='min-h-[300px] border border-black bg-[#d6d2d4] rounded-t-full border-0 border-t-2 overflow-hidden border-dashed pt-8 relative p-6 flex flex-col gap-8'>
        <div className='min-h-[200px] w-full border border-black border-0 border-b border-dashed flex flex-col items-center gap-6  px-8 '>
          <footer className='text-4xl text-center'>
            LETS WORK TOGETHER !
          </footer>
          <div className='w-9/12 sm:flex justify-between items-center'>
            <div className={`flex flex-col  ${Inconsola.className}`}>
              <a href="https://www.linkedin.com/in/hitesh-saini09/" target="_blank" rel="noopener noreferrer">LINKEDIN<i className="ri-arrow-right-up-line ri-arrow-right-line text-2xl"></i></a>
              <a href="https://www.instagram.com/hiteshsaini__09/" target="_blank" rel="noopener noreferrer">INSTAGRAN<i className="ri-arrow-right-up-line ri-arrow-right-line text-2xl"></i></a>
              <a href="https://github.com/hitesh09saini" target="_blank" rel="noopener noreferrer">GITHUB<i className="ri-arrow-right-up-line ri-arrow-right-line text-2xl"></i></a>
            </div>

            <a href="mailto:hitesh9694saini@gmail" target="_blank" rel="noopener noreferrer" className='sm:text-3xl text-gray-500'>hitesh9694saini@gmail.com</a>
          </div>
        </div>
          <a  className={`  ${Inconsola.className}`} href="https://www.google.com/maps/place/Mahwa,+Rajasthan+321608/@27.0388324,76.95027,13.03z/data=!4m6!3m5!1s0x39724411e60e0143:0xdbbeb549b294918b!8m2!3d27.046209!4d76.9260755!16zL20vMGY1Z3lx?entry=ttu" target="_blank" rel="noopener noreferrer">
            <b>Hometown:</b> MAHWA, DAUSA, RAJASTHAN
          </a>
        
      </div>
    </div>
  )
}

export default Footer