'use client'
import React, { useState } from "react";

export default function MyProjects() {
    const projects = [
        {
          title: "Project 1 lots of stuff hahahahaha",
          image: "/project1.jpg",
        },
        {
          title: "Project 2 aksdgh jahsgdjhasdhjagsd",
          image: "/project2.jpg",
        },
        {
          title: "Project 3 ajsdhkjahsdkjahdjs",
          image: "/project3.jpg",
        },
        {
          title: "Project 4 aksdgh jahsgdjhasdhjagsd",
          image: "/project4.jpg",
        },
        {
          title: "Project 5 ajsdhkjahsdkjahdjs",
          image: "/project5.jpg",
        },
        {
          title: "Project 6 aksdgh jahsgdjhasdhjagsd",
          image: "/project6.jpg",
        },
        {
          title: "Project 7 ajsdhkjahsdkjahdjs",
          image: "/project7.jpg",
        },
        // Add more project objects as needed
      ];
    return (
        <div className="flex justify-center items-center">
            <ProjectCarousel projects={projects}/>
        </div>
    )
}


const ProjectCarousel = ({ projects }: {projects: {title: string, image: string}[]}) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const totalProjects = projects.length;

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  };

  const previousProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects
    );
  };

  return (
    <div className="relative flex justify-center items-center my-10 w-[80rem] h-[20rem] overflow-hidden">
      {projects.map((project, index) => {
        const isCurrent = index === currentProjectIndex;
        const distFromCurrent = Math.abs(currentProjectIndex - index);
        // larger the distance, more opaque it should be
        const translateX = isCurrent
          ? 0
          : index < currentProjectIndex 
          ? (index - currentProjectIndex) * 30 - (10 - distFromCurrent) * 3
          : (index - currentProjectIndex) * 30 + (10 - distFromCurrent) * 3;
        // const opacity = isCurrent ? 1 : 0.7;
        const zIndex = 10 - distFromCurrent;
        const size = 1 - (distFromCurrent * 0.2)
        return (
          <div
            key={index}
            className={`absolute inset-0 transform transition-transform duration-500 ease-in-out flex flex-row justify-center items-center w-2/5 border-[4px] p-8 border-black bg-white`}
            style={{
              transform: `translateX(${translateX + 74}%) scale(${size})`,
              zIndex: zIndex
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
      <button
        className="absolute top-1/2 -mt-4 left-4 bg-black bg-opacity-50 p-2 rounded-full text-white z-50"
        onClick={previousProject}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 -mt-4 right-4 bg-black bg-opacity-50 p-2 rounded-full text-white z-50"
        onClick={nextProject}
      >
        &gt;
      </button>
    </div>
  );
};