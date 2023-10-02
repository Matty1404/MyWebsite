'use client'
import React from "react";
import {EduTimeline} from "./timeline";

export default function MyEducation() {
    return (
        <div id="MyEducation" className="flex flex-col justify-center items-center pt-[5rem] gap-4 p-16">
            <h1 className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My Education</h1>
            <br></br>
            <EduTimeline 
                title={`Imperial College London`} 
                dates={`October 2021 - Present`} 
                content={`First Class in both first year and second year. Over 95% in Computing Practical and Introduction to Computer Architecture. Here are a list of all the modules I have taken:`}
                modules={['Computing Practical', 'Calculus', 'Discrete Mathematics, Logic and Reasoning	', 'Graphs and Algorithms	', 
                'Introduction to Computer Architecture	', 'Introduction to Computer Systems	', 'Introduction to Databases	', 'Linear Algebra	', 'Algorithm Design and Analysis	', 
                'Compilers', 'Computational Techniques	', 'Models of Computation	', 'Networks and Communications	', 
                'Operating Systems	', 'Probability and Statistics	', 'Software Engineering Design	' ]}
            />
            <EduTimeline 
                title={`Mill Hill County High School`} 
                dates={`September 2015 - May 2021`} 
                content={`A level subjects taken:`}
                modules={['Maths - A*', 'Further Maths - A*', 'Computer Science - A*', 'Physics - A*']}
            />
        </div>
    )
}