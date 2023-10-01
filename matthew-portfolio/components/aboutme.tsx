'use client'
import React from "react";

export default function AboutMe() {
    return (
        <div className="h-[40rem] w-screen bg-gradient-to-r from-black to-gray-700 grid grid-cols-2 justify-center items-center">
            <div className="text-white mx-16 p-16 flex flex-col gap-4">
                <h1 className="text-xl">
                    Hi there, I'm
                </h1>
                <h1 className="text-xl">
                    <span className="text-5xl mr-4">Matthew Tate</span> and I am a  
                </h1>
                <h1 className="text-5xl">
                    Computing student at Imperial College London
                </h1>
                <h1 className="my-4 border flex items-center justify-center py-1 w-[10rem] hover:cursor-pointer">
                    More about me
                </h1>
            </div>
            <div className="">
            <img
                src="./word-cloud3.png"
                alt="word cloud"
                className="w-4/5 h-4/5 "
                />
            </div>

        </div>
    )
}