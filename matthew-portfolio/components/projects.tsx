'use client'
import { AllProjects } from "@/projectDetails";
import React, { useState } from "react";
import ProjectInfo from "./projectInfo";

export default function MyProjects() {
    const projects = AllProjects
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <div>
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My Projects</h1>
            </div>
            <ProjectCarousel projects={projects}/>
        </div>
    )
}


const ProjectCarousel = ({ projects }: {projects: {title: string, image: string, group: boolean, description: string, tags: string[]}[]}) => {
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

  function handleClickProject(index: number) {
    if (currentProjectIndex !== index) {
      setCurrentProjectIndex(index);
    } else {
      // bring up modal
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative flex justify-center items-center my-10 w-3/4 h-[22rem] overflow-hidden">
        {projects.map((project, index) => {
          const isCurrent = index === currentProjectIndex;
          const distFromCurrent = Math.abs(currentProjectIndex - index);
          // larger the distance, more opaque it should be
          var tx = 0
          if (distFromCurrent > 3) {
            if (index < currentProjectIndex) {
              tx = -(index - currentProjectIndex) * 30 + (10 - distFromCurrent) * 3
            } else {
              tx = -(index - currentProjectIndex) * 30 - (10 - distFromCurrent) * 3
            }
          } else if (index !== currentProjectIndex) {
            if (index < currentProjectIndex) {
              tx = (index - currentProjectIndex) * 30 - (10 - distFromCurrent) * 3
            } else {
              tx = (index - currentProjectIndex) * 30 + (10 - distFromCurrent) * 3
            }
          }
          
          const distance = 0
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
            className={`absolute inset-0 transform transition-transform duration-500 ease-in-out flex flex-col gap-2 justify-center items-center w-2/5 hover:cursor-pointer`}
            style={{
              transform: `translateX(${tx + 75}%) scale(${size})`,
              zIndex: zIndex
            }}
            onClick={() => handleClickProject(index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[20rem] border-[4px] border-black"
                />
              <div className="flex flex-row">
                <h1 className="text-xl font-semibold">
                  {project.title} 
                </h1>
                {project.group && <span className="text-xs bg-blue-600 rounded-lg p-1 border border-black mx-2 flex items-center justify-center"
                  style={{
                    transform: `translateY(${-20}%)`,
                  }}>Group</span>}
              </div>
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
      <ProjectInfo {...projects[currentProjectIndex]}/>
    </div>
  );
};