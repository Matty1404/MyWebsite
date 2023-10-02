// components/ParallaxScroll.js
import React, { useEffect, useRef } from 'react';

const ParallaxScroll = ({title, content, image}: {title: string, content: string, image: string}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallax = parallaxRef.current;

    const handleScroll = () => {
      if (parallax && divRef && divRef.current) {
        const scrollY = window.scrollY;

        const rect = divRef.current.getBoundingClientRect()
        if (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
          console.log("in view")
          parallax.style.transform = `translateY(-${(scrollY - rect.top - window.innerHeight + rect.height / 2) * 0.1}px)`; // Adjust the speed as needed
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={divRef} className="relative h-[20rem] w-fill border border-black rounded shadow-2xl overflow-hidden bg-black">
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-center h-[35rem] w-full overflow-auto bg-no-repeat"
        style={{
          backgroundImage: `url("${image}")`,
          opacity: 0.5
        }}
      ></div>
      <div className="relative z-20 flex flex-col justify-start items-start p-8 gap-4">
        <h1 className="text-4xl font-bold text-white">
          {title}
        </h1>
        <p className='font-bold text-xl text-white whitespace-pre-line'>
          {content}
        </p>
        
      </div>
    </div>
  );
};

export default ParallaxScroll;
