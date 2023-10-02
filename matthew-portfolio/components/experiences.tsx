'use client'
import React from "react";
import Timeline from "./timeline";

export default function MyExperiences() {
    return (
        <div className="flex flex-col justify-center items-center my-10 gap-2">
            <h1 className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My Experiences</h1>
            <br></br>
            <Timeline title={`Tutor`} dates={`Sept 2019 - Present`} content={`North Finchley Tutors - I work as a teaching assistant, teacher, and I help manage the other teaching assistant. I take on a lot of responsibilities such as making sure kids are understanding the content, making sure they understand the mistakes they made in their homework, and also communication with their parents to highlight where their child excels in and what subjects needs more work on. I also privately tutor maths and violin`}/>
            <Timeline title={`Software Engineer Intern`} dates={`July 2023 - September 2023`} content={`Terra (YC W21) - I worked as a full stack engineer working with many different teams, as well as managing my own team. I worked on a creating a brand new dashboard, creating a steps challenge (which also involved communication with MIT and Harvard representatives) and customer insights`}/>
            <Timeline title={`Software Engineer Work Experience`} dates={`July 2022`} content={`FirstBaseIT Limited - I spent a week learning about and testing API's, as well as learning about security of the company.`}/>
            <Timeline title={`PWC Technology Insight Week`} dates={`May 2020`} content={`PWC - I partook in an insight week learning all about applications of technology at PWC`}/>
        </div>
    )
}