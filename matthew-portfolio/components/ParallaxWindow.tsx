import React, { useEffect, useRef, useState } from 'react';

const ParallaxWindow = () => {
  const [scrollY, setScrollY] = useState(0);
  
  const offsetRef = useRef<HTMLDivElement>(null)
  const [offsetHeight, setOffsetHeight] = useState(0)
  console.log(scrollY)
  console.log(offsetHeight)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setOffsetHeight(offsetRef.current !== null && offsetRef.current?.scrollTop !== undefined ? offsetRef.current?.scrollTop: 1)
  })

  return (
    <div className="relative h-[20rem] overflow-hidden">
      {/* Content */}
      <div ref={offsetRef} className="relative z-10 h-full flex items-center justify-center">
        <div className="p-8 rounded-lg shadow-lg border  border-black">
          <h1 className="text-3xl font-semibold">Scroll down to see the effect</h1>
          <p className="text-gray-700 mt-4">
            This is the content inside the parallax window.
          </p>
        </div>
      </div>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("./pintos.png")', // Replace with your background image URL
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      /> 
    </div>
  );
};

export default ParallaxWindow;
