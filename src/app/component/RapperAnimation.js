"use client"

import React, { useEffect, useState } from 'react';
import animations from '../../utils/animations';
import LocomotiveScroll from 'locomotive-scroll';


const scroll = new LocomotiveScroll({});

function RapperAnimation() {
    const [progress, setProgress] = useState(0);

   
 

    useEffect(() => {
        const loadingInterval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(loadingInterval);
                animations();
            } else {
                setProgress(prevProgress => prevProgress + 1);
            }
        }, 50);

        return () => clearInterval(loadingInterval);
    }, [progress]);

    return (
        <div>
            <div>
                <div id='banner-1' className='bg-black w-screen h-1/4 fixed top-0 left-0 bg-black z-50' />
                <div id='banner-2' className='bg-black w-screen h-1/4 fixed top-1/4 left-0 bg-black z-50 text-3xl text-white text-center'>
                    Hi, I am Hitesh 👋
                </div>
                <div id='banner-3' className='bg-black w-screen h-1/4 fixed top-2/4 left-0 bg-black z-50 text-white flex justify-center items-center text-5xl'>
                    {progress} %
                </div>
                <div id='banner-4' className='bg-black w-screen h-1/4 fixed top-3/4 left-0 bg-black z-50' />
            </div>
        </div>
    );
}

export default RapperAnimation;
