'use client'
import React from "react";
import ParallaxWindow from "./ParallaxWindow";

export default function MyAchievements() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My Achievements</h1>
            <br></br>
            <div className="w-full grid grid-cols-2 gap-4 justify-center items-center px-8">
                <ParallaxWindow title="Institutional Awards" content={`I was awarded the Olav Beckmann Project Prize for for outstanding second year undergraduate laboratory work in the Department of Computing at Imperial College London.\n I was also awarded the computer science award for my outstanding work at Mill Hill County High School`} image="./awards.png"/>
                <ParallaxWindow title="Hackthon Winners" content="I participated in won ICHACK (one of the largest student run hackathon in Europe) in both the two different catagories that we applied to join" image="./hackathon.png"/>
                <ParallaxWindow title="Winner in Galas" content="I play a lot of sports, but in particular I have participated in and have won medals in many swimming Galas." image="./swimming.png"/>
                <ParallaxWindow title="Passed Grade 8 Violin" content="I achieved either a merit or destiction in all ABRSM Violin exams from grade 1 - 8. I have also had the privilage to play alongside the Royal Philoharmonic Orchestra on multiple occations" image="./violin.png"/>
            </div>
        </div>
    )
}