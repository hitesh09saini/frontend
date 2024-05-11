"use client"
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieArrow = ({ animationData, className }) => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: animationData,
      renderer: 'svg', 
      loop: 1,
      autoplay: true,
    });
  }, []);

  return <div ref={container} className={className} />;
};

export default LottieArrow;
