"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const BlendedLearning = () => {
    // Data
    const courses = [
        {
            title: "PG Program in Data Engineering",
            rating: 4.0,
            students: 615,
            teacher: "Mr. Balamurugan N & Harish R",
            price: 499,
            image: "/images/pg.png",
        },
        {
            title: "Certificate Course in AWS",
            rating: 5.0,
            students: 6115,
            teacher: "Mr. Yatish Kumar Appu RP (Cloud Computing)",
            price: 499,
            image: "/images/certificate.svg",
        },
        {
            title: "Certified Full Stack Web Developer Feb 2024 Summary",
            rating: 3.0,
            students: 65,
            teacher: "Mahalaskhmi P",
            price: 699,
            image: "/images/certified.png",
        },
        {
            title: "PG Program in Data Engineering",
            rating: 4.0,
            students: 615,
            teacher: "Mr. Balamurugan N & Harish R",
            price: 499,
            image: "/images/pg.svg",
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
        <div className=" py-12 px-4 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">

                <div className="flex justify-between my-4" >
                    <div>
                        <h2 className="text-2xl font-semibold text-black mb-4">Blended Learning</h2>
                    </div>
                    <div className=" items-center md:flex hidden gap-5" >
                        <p className="underline text-blue-400" >View All Courses</p>
                        <div className=" flex gap-3 cursor-pointer">
                            <Image className="transform hover:-translate-x-2 duration-300"  onClick={handlePrevSlide} height={36} width={36} src="/images/leftarrow.svg" alt="" />
                            <Image  className="transform hover:translate-x-2 duration-300" onClick={handleNextSlide} height={36} width={36} src="/images/rightarrow.svg" alt="" />
                        </div>
                    </div>
                </div>
                {/* Scroll */}
                <div className="relative overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 w-max lg:w-[135%]  m-auto">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="w-[250px] md:min-w-[360px] my-2 hover:shadow-md cursor-pointer flex flex-col  bg-white rounded-lg p-2 transform hover:-translate-y-2 duration-300 shadow-sm border-2 border-gray-300"><div>
                                    <Image width={250} height={250}
                                        src={course.image}
                                        alt={course.title}
                                        className=" h-24 md:h-[160px] md:w-[350px] object-cover rounded-md mb-4 " />
                                </div>
                                <div className="px-2 pb-2 " >
                                    <h3 className="font-semibold text-sm md:text-xl  mb-2">{course.title}</h3>
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
                                    <p className="text-gray-700 font-semibold mr-10 text-sm mb-2">
                                        Teacher: <span className="font-normal" > {course.teacher}</span>
                                    </p>
                                    <div className="flex justify-between md:mt-5 items-center">
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

export default BlendedLearning;
