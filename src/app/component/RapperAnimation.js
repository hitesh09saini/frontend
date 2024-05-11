"use client"
import React, { useEffect, useState } from 'react';
import animations from '../../utils/animations';
import LocomotiveScroll from 'locomotive-scroll';

function RapperAnimation() {
    const array = [
        "मैं एक योद्धा हूँ।",
        "আমি একজন যোদ্ধা।",
        "நான் ஒரு போராளி ஆகுகிறேன்।",
        "నేను ఒక యోధుడు.",
        "ನಾನು ಒಬ್ಬ ಯೋಧನಾಗಿದ್ದೇನೆ।",
        "ഞാൻ ഒരു യോധനാണ്।",
        "मी एक योधा आहे।",
        "હું એક યોદ્ધા છું।",
        "ਮੈਂ ਇੱਕ ਯੋਧਾ ਹਾਂ।",
        "মই এটা এটা।",
        "ମୁଁ ଏକ ଯୋଦ୍ଧା।",
        "म्हाणून एक योद्धा आसा।",
        "মন একত যোদ্ধা।",
        "मैं एक योध्याहूं।",
        "ᱢᱟᱢᱚᱱ ᱵᱟᱨ ᱨᱮᱨᱚᱢᱚᱱᱟᱱᱚᱨᱤᱱᱟᱜ।",
        "ꚆꙀ ꞒꙀꚃ ꞒꚩꚃꚐꚩꚂ।",
        "मं एक योद्धा छ।",
        "I am a warrior."
    ];
    
    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState("मैं एक योद्धा हूँ।");

    useEffect(() => {
        const scroll = new LocomotiveScroll({}); 
        const loadingInterval = setInterval(() => {
            if (index >= 18) {
                clearInterval(loadingInterval);
                animations();
            } else {
                setIndex(prevIndex => prevIndex + 1);
                setProgress(array[(index + 1) % array.length]);
            }
        }, 150);

        return () => {
            clearInterval(loadingInterval);
            scroll.destroy(); 
        };
    }, [progress]);

    return (
        <div >
            <div>
                <div id='banner-1' className='bg-[#090909] w-screen h-1/4 fixed top-0 left-0  z-50' />
                <div id='banner-2' className='bg-[#090909] w-screen h-1/4 fixed top-1/4 left-0  z-50 text-5xl text-white text-center'>
                    " अहमस्मि योधः। "
                </div>
                <div id='banner-3' className='bg-[#090909] progres w-screen h-1/4 fixed top-2/4 left-0  z-50 text-white flex justify-center items-center text-5xl '>
                    {progress}
                </div>
                <div id='banner-4' className='bg-[#090909] w-screen h-1/4 fixed top-3/4 left-0  z-50' />
            </div>
        </div>
    );
}

export default RapperAnimation;
