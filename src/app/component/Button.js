"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import wave from '/public/music.gif';
import ReactAudioPlayer from 'react-audio-player';
import img1 from '/public/assets/img-1.jpg';
import img2 from '/public/assets/img-2.jpg';
import img3 from '/public/assets/img-3.png';
import img4 from '/public/assets/img-4.jpg';
const Button = () => {
    const ref = useRef(null);
    const [index, setIndex] = useState(0);
    const [hidden, setHidden] = useState(false);
    const array = [
         img2, img3, img4, img1,
    ];

    function handleClick() {
        ref.current.audioEl.current.play()
    }

    function onImg() {
        const loadingInterval = setInterval(() => {
            if (index >= 18) {
                clearInterval(loadingInterval);
                animations();
            } else {
                setIndex((prevIndex) => (prevIndex + 1) % array.length);
            }
        }, 400);

        return () => {
            clearInterval(loadingInterval);
        };
    }

    return (
        <div onClick={handleClick} onMouseLeave={() => { setHidden(false) }} onMouseEnter={() => { setHidden(true), onImg() }} className="absolute z-50 max-sm:bottom-0 bottom-[20px] right-[20px] flex items-center max-sm:scale-50 gap-4 cursor-pointer">
            <Image src={wave} alt="song" />
            <ReactAudioPlayer
                ref={ref}
                loop
                preload='none'
                volume={0.4}
                src='/assets/song.mp3'
                autoPlay
            />


            <div className={`absoute top-0 rounded w-[60px] h-[60px] overflow-hidden  ${!hidden && 'hidden'}`}>
                <Image src={array[index]} alt="img-song" className='h-[60px] w-[60px] transition-all duration-500 ease-in-out' />
            </div>

        </div>
    );
}

export default Button;
