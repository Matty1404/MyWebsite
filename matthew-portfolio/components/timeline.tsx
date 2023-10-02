// components/Timeline.tsx
import React from 'react';

const Timeline = ({title, dates, content}: {title: string, dates: string, content: string}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-4">
        <div className="flex">
          <div className="w-20 text-center">{dates}</div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 whitespace-pre">
              {content}
            </p>
          </div>
        </div>
        {/* Add more timeline events here */}
      </div>
    </div>
  );
};

export default Timeline;
