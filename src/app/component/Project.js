import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Inconsolata } from "next/font/google";
const Inconsola = Inconsolata({
  subsets: ["latin"],
  weight: ['400']
});
const Project = ({ title, description, link, img }) => {
  const alphabetColors = {
    'a': '#CC0000', // red
    'b': '#000088', // blue
    'c': '#008000', // green
    'd': '#CCCC00', // yellow
    'e': '#CC7F00', // orange
    'f': '#660066', // purple
    'g': '#008888', // cyan
    'h': '#CC00CC', // magenta
    'i': '#005555', // teal
    'j': '#CC99AB', // pink
    'k': '#008000', // lime
    'l': '#802828', // brown
    'm': '#606000', // olive
    'n': '#000060', // navy
    'o': '#600000', // maroon
    'p': '#CC6F3F', // coral
    'q': '#320064', // indigo
    'r': '#2BB8A6', // turquoise
    's': '#CC9900', // gold
    't': '#AA55AA', // violet
    'u': '#808080', // silver
    'v': '#A445A5', // orchid
    'w': '#BB80BB', // plum
    'x': '#B56969', // salmon
    'y': '#AA8B66', // tan
    'z': '#6688AA'  // skyblue
  };


  const firstLetter = title.charAt(0).toLowerCase();
  const bgColor = alphabetColors[firstLetter];

  return (
    <div className='mx-4  border border-black  border-0 border-b-2 p-2 border-dashed flex justify-between'>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h1 className={`  font-bold tracking-[2px]`}>{title} &nbsp;  <i className="ri-arrow-right-up-line ri-arrow-right-line text-2xl"></i></h1>
        <p className={`text-sm font-light ${Inconsola.className}`}>{description}</p>
      </a>

      <div className={`w-[40px] h-[40px] text-white flex justify-center items-center rounded-full  bg-center bg-no-repeat bg-cover flex-shrink-0`} style={{ backgroundImage: `url(${img})`, backgroundColor: bgColor }}>
        {!img && (title.charAt(0))}
      </div>
    </div>
  )
}

export default Project
