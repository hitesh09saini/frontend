import React from 'react'
import Work from './Work'
const Experience = () => {
  return (
    <div className='min-h-[300px] mb-[100px] bg-[#EEE9EB] pt-8 relative p-6 flex flex-col gap-8'>
     <h1  className='text-4xl'>Work !</h1>
       <Work company="DevHub Tech." role="Software Engineer" date="Mar 2024 - Present" />
    </div>
  )
}

export default Experience