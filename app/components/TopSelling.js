"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const TopSelling = () => {
    // Data
    const courses = [
        {
            title: "Internet of Things and its Applications - Self Paced",
            rating: 4.0,
            students: 615,
            teacher: "Mrs.Anbumalar Pandian",
            price: 199,
            image: "/images/router.svg",
        },
        {
            title: "Internet of Things and its Applications - Self Paced",
            rating: 5.0,
            students: 6115,
            teacher: "Mrs.Anbumalar Pandian",
            price: 699,
            image: "/images/electric.svg",
        },
        {
            title: "Internet of Things and its Applications - Self Paced",
            rating: 3.0,
            students: 65,
            teacher: "Mrs.Anbumalar Pandian",
            price: 999,
            image: "/images/man.svg",
        },

    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === courses.length - 1 ? 0 : prevSlide + 1
        );
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? courses.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className=" sm:bg-white py-10 px-4 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-2xl sm:hidden font-semibold text-black mb-4">O-Level Courses</h2>
                <div className="sm:flex justify-between mt-8 my-4 hidden" >
                    <div>
                        <h2 className="text-2xl  font-semibold text-black mb-4">Top Selling in Technology</h2>
                    </div>
                    <div className=" flex gap-3 cursor-pointer">
                        <Image onClick={handlePrevSlide} height={36} width={36} src="/images/leftarrow.svg" alt="" />
                        <Image onClick={handleNextSlide} height={36} width={36} src="/images/rightarrow.svg" alt="" />
                    </div>
                </div>
                {/* Scroll */}
                <div className="relative overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-4 w-max md:w-[2000px] lg:w-[140%] xl:w-[120%] m-auto">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="w-[250px] md:w-full flex flex-col md:items-center md:flex-row  bg-white rounded-lg p-1 border-2 border-gray-300 cursor-pointer shadow-md"
                            ><div>
                                    <Image width={250} height={250}
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-24 md:h-[198px] md:w-[230px] object-cover object-left-top rounded-md mb-4 md:mb-0"
                                    />
                                </div>
                                <div className="px-2 pb-2 " >
                                    <h3 className="font-semibold text-sm md:text-xl w-10/12  mb-2">{course.title}</h3>
                                    <div className="flex gap-2 items-center">
                                        <div className="flex items-center mb-1">
                                            {/* Full Star */}
                                            {Array(Math.round(course.rating))
                                                .fill()
                                                .map((_, index) => (
                                                    <Image height={10} width={10}
                                                        key={index}
                                                        src="/images/star.svg"
                                                        alt="Full Star"
                                                        className="w-4 h-4"
                                                    />
                                                ))}

                                            {/* Empty Star */}
                                            {Array(5 - Math.round(course.rating))
                                                .fill()
                                                .map((_, index) => (
                                                    <Image height={10} width={10}
                                                        key={index}
                                                        src="/images/emptystar.svg"
                                                        alt="Empty Star"
                                                        className="w-4 h-4"
                                                    />
                                                ))}
                                        </div>

                                        <div className="mt-1" >
                                            <p className="text-gray-600 text-xs mb-2">
                                                {course.rating} by {course.students} students
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 font-semibold text-sm mb-2">
                                        Teacher: <span className="font-normal" > {course.teacher}</span>
                                    </p>
                                    <div className="flex justify-between  md:mt-5 items-center">
                                        <p className="text-lg md:text-3xl text-gray-700 font-semibold mx-1 ">₹{course.price}</p>
                                        <button className="text-xl">
                                            <FiArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-4">
                    {courses.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 mx-1 rounded-full ${index === currentSlide ? "bg-black" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopSelling;
