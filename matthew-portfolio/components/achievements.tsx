'use client'
import React from "react";
import ParallaxWindow from "./ParallaxWindow";

export default function MyAchievements() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">My Achievements</h1>
            <ParallaxWindow />
        </div>
    )
}