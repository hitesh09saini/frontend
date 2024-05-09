"use client"
import React from 'react'
import { useEffect } from 'react';
import animations from '../../utils/animations';
import LocomotiveScroll from 'locomotive-scroll';
const scroll = new LocomotiveScroll({
});


function RapperAnimation() {

    useEffect(() => {
        animations()
    }, [])

    return (
        <div>

            <div >
                <div id='banner-1' className='bg-black w-screen h-1/4 fixed top-0 left-0 bg-black z-50' />
                <div id='banner-2' className='bg-black w-screen h-1/4 fixed top-1/4 left-0 bg-black z-50' />
                <div id='banner-3' className='bg-black w-screen h-1/4  fixed top-2/4 left-0 bg-black z-50' />
                <div id='banner-4' className='bg-black w-screen h-1/4 fixed top-3/4 left-0 bg-black z-50' />
            </div>
            
        </div>
    )
}

export default RapperAnimation
