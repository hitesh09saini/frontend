"use client"
import React, { useEffect, useRef, useState } from 'react';



const Cursor = () => {
  const cursorRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseDown = (e) => {
      if (e.button === 0) {
        setClicked(true);
        setTimeout(() => {
          setClicked(false);
        }, 200);
      }
    };
    


    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
     
    };
  }, []);

  return (
    <>
      <div
        style={{ left: `${position.x - 10}px`, top: `${position.y - 10}px` }}
        ref={cursorRef}
        className={`p-0  fixed overflow-hidden pointer-events-none z-50 rounded-full w-4 h-4 border  ${clicked ? "scale-150 border-[#6a0afa]" : `border-[#000000]`} `}
      >
       
      </div>
    </>
  );
};

export default Cursor;
