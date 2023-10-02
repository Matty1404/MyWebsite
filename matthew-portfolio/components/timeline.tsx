// components/Timeline.tsx
import React from 'react';

export const Timeline = ({title, dates, content}: {title: string, dates: string, content: string}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-[60rem] transform transition-transform duration-500 ease-in-out hover:scale-105">
      <div className="space-y-4">
        <div className="flex">
          <div className="min-w-[6rem] text-left mr-4">{dates}</div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 break-words">
              {content}
            </p>
          </div>
        </div>        
      </div>
    </div>
  );
};

export const EduTimeline = ({title, dates, content, modules}: {title: string, dates: string, content: string, modules: string[]}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-[60rem] transform transition-transform duration-500 ease-in-out hover:scale-105">
      <div className="space-y-4">
        <div className="flex">
          <div className="min-w-[6rem] max-w-[6rem] text-left mr-4">{dates}</div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 break-words">{content}</p>
            <ul className="list-disc pl-4">
              {modules.map((module, index) => {
                return (
                  <li key={index}>
                    <p className="text-gray-600 break-words">
                      {module}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};