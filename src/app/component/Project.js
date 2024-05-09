import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Inconsolata} from "next/font/google";
const Inconsola = Inconsolata({
  subsets: ["latin"],
  weight: ['400']
});
const Project = ({ title, discription, link, img }) => {
  
  const alphabetColors = {
    'a': '#FF0000', // red
    'b': '#0000FF', // blue
    'c': '#00FF00', // green
    'd': '#FFFF00', // yellow
    'e': '#FFA500', // orange
    'f': '#800080', // purple
    'g': '#00FFFF', // cyan
    'h': '#FF00FF', // magenta
    'i': '#008080', // teal
    'j': '#FFC0CB', // pink
    'k': '#00FF00', // lime
    'l': '#A52A2A', // brown
    'm': '#808000', // olive
    'n': '#000080', // navy
    'o': '#800000', // maroon
    'p': '#FF7F50', // coral
    'q': '#4B0082', // indigo
    'r': '#40E0D0', // turquoise
    's': '#FFD700', // gold
    't': '#EE82EE', // violet
    'u': '#C0C0C0', // silver
    'v': '#DA70D6', // orchid
    'w': '#DDA0DD', // plum
    'x': '#FA8072', // salmon
    'y': '#D2B48C', // tan
    'z': '#87CEEB'  // skyblue
  };
  
  const firstLetter = title.charAt(0).toLowerCase();
  const bgColor = alphabetColors[firstLetter];

  return (
    <div className='mx-4  border border-black  border-0 border-b-2 p-2 border-dashed flex justify-between'>
      <div >
        <a href={link} target="_blank" rel="noopener noreferrer"> <h1 className={`  font-bold tracking-[2px]`}>{title} &nbsp;  <i className="ri-arrow-right-up-line ri-arrow-right-line text-2xl"></i></h1></a>
        <p className={`text-sm font-light ${Inconsola.className}`}>{discription}</p>
      </div>
     
       <div className={`w-[40px] h-[40px] text-white flex justify-center items-center rounded-full  bg-center bg-no-repeat bg-cover flex-shrink-0`} style={{ backgroundImage: `url(${img})`,backgroundColor: bgColor}}>
        {!img&&(title.charAt(0))}
       </div>
    </div>
  )
}

export default Project
