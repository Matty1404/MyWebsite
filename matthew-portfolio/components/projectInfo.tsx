'use client'
import React from "react";

export default function ProjectInfo( {title, image, group, description, tags}: {title: string, image: string, group: boolean, description: string, tags: string[]} ) {
    return (
        <div className="flex flex-row justify-between my-32">
            <div className="w-3/5 p-8">
                <div className="flex flex-row gap-4">
                    <h1 className="text-4xl font-bold my-4">
                        {title}
                    </h1>
                    {tags.map((tag) => {
                        return (
                            <h1 className="text-xl font-semibold my-4 border border-blue-700 rounded-xl px-2 py-1 bg-blue-300 flex items-center justify-center">
                                {tag}
                            </h1>
                        )
                    })}
                </div>
                <div
                className="text-lg font-semibold"
                style={{whiteSpace: "pre-line"}}
                >
                    {description}
                </div>
            </div>
            <div className="p-8 flex items-center justify-center w-2/5">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[20rem] border border-black"
                    />
            </div>
        </div>
    )
}