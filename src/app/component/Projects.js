import React from 'react';
import Project from './Project';

const projects = [
    {
        title: 'DevHub Tech Website',
        description: 'This project, I designed the UI and UX, implemented effective coding, and gave my best to optimize the user experience.',
        link: 'https://devhubtech.com/index.html'
    },
    {
        title: 'Electra Optima',
        description: 'I am an electrical engineer. When I was studying in college, I conceived the idea for this project, which assists in auditing electricity.',
        link: 'https://electra-optima.vercel.app/'
    },
    {
        title: 'Tetris Game',
        description: 'This is for enjoyment; I am remembering my childhood handheld phone games, and then I made Tetris.',
        link: 'https://hitesh09saini.github.io/Tetris/'
    },
    {
        title: 'Old Portfolio',
        description: 'That is my college-time portfolio; you can see my projects here.',
        link: 'https://hitesh-saini.vercel.app/'
    },
    {
        title: 'Task Board',
        description: 'This project manages my tasks and incorporates some new technologies. It\'s really helpful.',
        link: 'https://task-board-front.vercel.app/'
    },
   
];

const Projects = () => {
    return (
        <div className=' mb-[100px] bg-[#EEE9EB] pt-8 relative p-6 flex flex-col gap-8'>
            <h1 className='text-4xl'>PROJECTS !</h1>
            {projects.map((project, index) => (
                <Project key={index} title={project.title} description={project.description} link={project.link} />
            ))}
        </div>
    );
};

export default Projects;
