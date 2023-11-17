'use client'
import React, { useState } from "react";


export default function AboutMe() {

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false)


    function AboutMeModal() {
        return (
            <div>
                {modalVisible &&
                    <div className="bg-black bg-opacity-60 w-screen h-screen z-[300] fixed top-0 flex flex-col items-center justify-center">
                        {/* Content */}
                        <div className="bg-white rounded-lg w-3/5 h-4/5 p-6 overflow-auto">
                            {/* Top Bar with Title and Close Button */}
                            <div className="bg-white w-full py-4 px-6 flex justify-between items-center">
                                <h2 className="text-2xl font-bold">About Me</h2>
                                <button onClick={closeModal} className="text-gray-600 hover:text-black focus:outline-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <hr className="border border-black mt-4 mb-8"/>
                            {/* Your neat-fonted content goes here */}
                            <div className="overflow-y-auto">
                                <p className="text-md p-4 text-gray-700 break-words">
                                    I have many hobbies outside of my academic life such as playing the violin and sports. I have been part of my school football team and table tennis club,
                                    I have been part of a London Volleyball Club and I have represented my county Barnet in swimming galas. I also have played a lot of squash and badminton on
                                    top of all that.
                                </p>
                                <p className="text-md p-4 text-gray-700 break-words">
                                    I am interested in problems which involve learning about new technologies. Particular cutting edge technologies are AI and serverless computing. I am currently working on
                                    a project which utilises machine learning to be able to draw in a 3 dimentional space using your webcam. You will be able to make hand guestures to signify when you are drawing, 
                                    rotating your drawing, moving your drawing in 3 dimentions and more. You will be able to view everything on the webcam which you are using to track you hand movements.
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }

    return (
        <div id="AboutMe" className="pt-[5rem] h-[40rem] w-screen bg-gradient-to-r from-black to-gray-700 grid grid-cols-2 justify-center items-center"> 
            <div className="text-white mx-16 p-16 flex flex-col gap-4">
                <h1 className="text-xl">
                    Hi there, I&apos;m
                </h1>
                <h1 className="text-xl">
                    <span className="text-5xl mr-4">Matthew Tate</span> and I am a  
                </h1>
                <h1 className="text-5xl">
                    Computing student at Imperial College London   
                </h1>
                <h1 onClick={openModal} className="my-4 border flex items-center justify-center py-1 w-[10rem] hover:cursor-pointer">
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

            <AboutMeModal />

        </div>
    )
}