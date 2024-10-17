"use client";
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState } from 'react';

const TopSellingCourses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const courses = [
        {
            id: 1,
            title: 'Bitcoin Technology and Application',
            imgSrc: '/images/bitcoin.svg',
            details: 'Discover the essentials of computing with our Course on Computer Concepts. From hardware to programming languages, delve into the fundamentals and unlock the keys to navigating the digital world confidently.'
        },
        {
            id: 2,
            title: 'Course on Computer Concepts',
            imgSrc: '/images/course.svg',
            details: 'Discover the essentials of computing with our Course on Computer Concepts. From hardware to programming languages, delve into the fundamentals and unlock the keys to navigating the digital world confidently.'
        },
        {
            id: 3,
            title: 'Data Analytics & Machine Learning (Python)',
            imgSrc: '/images/data.svg',
            details: 'Discover the essentials of computing with our Course on Computer Concepts. From hardware to programming languages, delve into the fundamentals and unlock the keys to navigating the digital world confidently.'
        }
    ];

    const toggleCourse = (id) => {
        if (selectedCourse === id) {
            setSelectedCourse(null);
        } else {
            setSelectedCourse(id);
        }
    };

    return (
        <div className="bg-gradient-to-r from-[#094C3D] to-[#116955] mb-10 sm:mb-20 rounded-3xl shadow-md sm:p-8 p-4 text-white max-w-[92vw] mx-auto">

            <div className="flex gap-10 items-center mb-4">
                <h2 className="sm:text-3xl text-xl p-4">Top Selling Courses</h2>
                <div className="items-center text-[#F4B955] gap-2 border-b hidden lg:flex border-[#F4B955]">
                    <span>View All Courses</span>
                    <FaArrowRightLong />
                </div>
            </div>

            <div className='flex gap-10 lg:gap-20 justify-between'>
                {/* Courses List */}
                <div className="w-full">
                    {courses.map((course) => (
                        <div key={course.id} className="w-full mb-2 ">
                            <div
                                className="flex justify-between items-center hover:bg-[#A3E47B33] rounded-t-lg lg:rounded-lg  cursor-pointer">
                                <div className="flex items-center p-4 ">
                                    <Image src={course.imgSrc} alt={course.title} width={50} height={50} className="rounded-lg" />
                                    <span className="ml-4 sm:text-lg font-medium">{course.title}</span>
                                </div>
                                <div className="pr-4 lg:hidden " onClick={() => toggleCourse(course.id)}>
                                    {selectedCourse === course.id ? <SlArrowUp /> : <SlArrowDown />}
                                </div>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-500 ${selectedCourse === course.id ? 'max-h-[500px] opacity-100 ' : 'max-h-0 opacity-0'}`}>
                                <div className="p-4 bg-[#A3E47B33] rounded-b-lg">
                                    <button className='border px-4 py-1 rounded-full my-2 text-sm' >BestSeller</button>
                                    <p>{course.details}</p>
                                    <p className="mt-2 font-semibold ">Teacher: Mrs. Bhawna</p>
                                    <div className="flex items-center mb-4">
                                        <div className='flex items-center gap-2'>
                                            <span><Image height={10} width={60} src="/images/stars.svg" alt="Stars Rating" /></span>
                                            <span className="font-semibold font-lg">  4.5 by 1,724 students</span>
                                        </div>
                                    </div>
                                    <p className="text-2xl font-semibold mt-4">
                                        ₹599 <span className="text-sm font-thin text-gray-200">(inclusive of taxes)</span>
                                    </p>
                                    <div className="mt-4 flex gap-6">
                                        <div className="flex items-center text-[#F4B955] gap-2 border-b border-[#F4B955]">
                                            <span>View Details</span>
                                            <FaArrowRightLong />
                                        </div>
                                        <div className="flex items-center text-[#F4B955] gap-2 border-b border-[#F4B955]">
                                            <span>Wishlist Course</span>
                                            <FaArrowRightLong />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className='hidden lg:block'>
                    <h3 className="text-lg mr-20 mb-4">
                        Discover the essentials of computing with our Course on Computer Concepts. From hardware to programming languages, delve into the fundamentals and unlock the keys to navigating the digital world confidently.
                    </h3>

                    <p className="text-lg mb-2"><strong>Teacher:</strong> Mrs. Bhawna</p>
                    <div className="flex items-center mb-4">
                        <div className='flex items-center gap-2'>
                            <span><Image height={14} width={85} src="/images/stars.svg" alt="Stars Rating" /></span>
                            <span className="font-semibold font-lg">  4.5 by 1,724 students</span>
                        </div>
                    </div>

                    <p className="text-3xl font-semibold">₹599 <span className="text-base text-gray-300 font-normal">(inclusive of taxes)</span></p>

                    <div className="mt-4 flex gap-6">
                        <div className="flex items-center text-[#F4B955] gap-2 border-b border-[#F4B955]">
                            <span>View Details</span>
                            <FaArrowRightLong />
                        </div>
                        <div className="flex items-center text-[#F4B955] gap-2 border-b border-[#F4B955]">
                            <span>Wishlist Course</span>
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#ECF8DF] relative rounded-lg p-4 sm:p-6 mt-10 lg:mt-32 flex lg:justify-between items-center">
                <div className='flex items-center'>
                    <Image className='absolute bottom-0 lg:left-10 sm:right-8 right-2 sm:w-[300px]' src="/images/semiircle.svg" alt="Quiz Icon" width={158} height={92} />
                    <Image className='absolute bottom-3 sm:bottom-5 lg:bottom-8 sm:right-20 lg:left-36 right-6 sm:w-[150px]' src="/images/notebook.svg" alt="Notebook Icon" width={110} height={70} />
                </div>
                <div className="flex lg:flex-row lg:justify-end items-start flex-col xl:gap-20 gap-4 xl:mx-10 lg:items-center">
                    <h4 className="md:text-xl lg:text-2xl z-10 sm:text-base text-sm sm:font-semibold w-5/6 sm:w-3/5 text-black">Take a practice Quiz designed to sharpen your skills</h4>
                    <button className='flex items-center z-10 bg-[#F4B955] text-black sm:font-semibold text-sm sm:text-base px-4 py-2 rounded-full gap-2'>
                        Take Quiz
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

        </div>
    );
};

export default TopSellingCourses;
