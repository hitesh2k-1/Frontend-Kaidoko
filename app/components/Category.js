"use client";
import Image from 'next/image';
import React from 'react';

const Category = () => {
    const categories = [
        "Java Script",
        "Web Development",
        "Node.Js",
        "HTML & CSS",
        "Product Design",
        "React JS",
        "Unreal Engine",
        "Design Theory",
    ];

    return (
        <div className=" pt-2 pb-10 px-4 sm:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className='flex justify-between sm:items-center ' >
                <div className='text-start ' >
                <h2 className="sm:text-2xl font-semibold text-black  mb-2">Browse by Categories</h2>
                <p className="text-gray-600 text-sm sm:text-base mb-8">
                    Select the topics below to view corresponding courses.
                </p>
                </div>
                <Image className='sm:w-[120px] pb-4'  height={94} width={80} src="/images/robohead.svg" alt="" />
                </div>

                {/* Scrollable*/}
                <div className="overflow-x-auto pt-2 pb-10 max-w-full scrollbar-hide ">
                    <div className="grid grid-rows-2 grid-flow-col gap-4 max-h-[160px] ">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className="min-w-[150px] whitespace-nowrap text-center border-2 border-[#194F3D] bg-white font-medium py-2 rounded-lg hover:bg-[#ECF4EF] transition duration-300"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
