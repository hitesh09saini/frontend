import React from 'react'
import Project from './Project'
const Projects = () => {

    
    return (
        <div className=' mb-[100px] bg-[#EEE9EB] pt-8 relative p-6 flex flex-col gap-8' >
           <h1 className='text-4xl'>PROJECTS,</h1>
            <Project title={'Project 1'} discription={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti repellendus praesentium voluptatibus.'} link={'https://www.google.com/'} />
            <Project title={'Project 1'} discription={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti repellendus praesentium voluptatibus.'} link={'https://www.google.com/'} />
            <Project title={'Project 1'} discription={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti repellendus praesentium voluptatibus.'} link={'https://www.google.com/'} />
            <Project title={'Project 1'} discription={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti repellendus praesentium voluptatibus.'} link={'https://www.google.com/'} />

        </div>
    )
}
export default Projects