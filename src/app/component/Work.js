import React from 'react'
import { Inconsolata} from "next/font/google";
const Inconsola = Inconsolata({
  subsets: ["latin"],
  weight: ['400']
});

const Work = ({company, role, date}) => {
  return (
   <div className='mx-4  border border-black  border-0 border-b p-2 flex justify-between'>
      <div>
        <h1 className={`  font-bold tracking-[2px]`}>{company}</h1>
         <h3 className={`text-sm font-light ${Inconsola.className}`}>{role}</h3> 
      </div>
      <div>
        <p className={`text-sm font-light ${Inconsola.className}`}>{date}</p>
      </div>
   </div>
  )
}

export default Work