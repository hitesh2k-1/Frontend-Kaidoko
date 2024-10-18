"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

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

    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) observer.unobserve(imageRef.current);
        };
    }, []);

    return (
        <div className="pt-2 pb-10 px-4 sm:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className='flex justify-between sm:items-center'>
                    <div className='text-start'>
                        <h2 className="sm:text-2xl text-lg font-semibold text-black mb-2">
                            Browse by Categories
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-8">
                            Select the topics below to view corresponding courses.
                        </p>
                    </div>
                    <div 
                        ref={imageRef} 
                        className={` pb-4 transition-transform duration-1000 ease-in-out ${isVisible ? 'transform opacity-100' : 'transform opacity-0 translate-y-40'}`}
                    >
                        <Image  height={110} width={90} src="/images/robohead.svg" alt="" />
                    </div>
                </div>

                {/* Scrollable */}
                <div className="overflow-x-auto pt-2 pb-10 max-w-full scrollbar-hide">
                    <div className="grid grid-rows-2 grid-flow-col gap-4 max-h-[160px]">
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
