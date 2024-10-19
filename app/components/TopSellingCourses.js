"use client";
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState, useEffect, useRef } from 'react';

const TopSellingCourses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [loadedNotes, setLoadedNotes] = useState(false);
    const [loadedNotebook, setLoadedNotebook] = useState(false);
    const notesRef = useRef(null);
    const notebookRef = useRef(null);

    const courses = [
        {
            id: 1,
            title: 'Bitcoin Technology and Application',
            imgSrc: '/images/bitcoin.png',
            details: 'Discover the essentials of computing with our Course on Computer Concepts. From hardware to programming languages, delve into the fundamentals and unlock the keys to navigating the digital world confidently.',
            teacher: 'Mr. Bhanu',
            price: '₹599'
        },
        {
            id: 2,
            title: 'Course on Computer Concepts',
            imgSrc: '/images/course.png',
            details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos perspiciatis voluptatum voluptatem. Ipsum quia repellendus facilis earum, quibusdam dolor ab voluptatem quaerat corrupti!',
            teacher: 'Mrs. Bhawna',
            price: '₹499'
        },
        {
            id: 3,
            title: 'Data Analytics & Machine Learning (Python)',
            imgSrc: '/images/data.png',
            details: 'Delve into the fundamentals and unlock the keys to navigating the digital world confidently into the fundamentals and unlock the keys to navigating the digital world confidently.',
            teacher: 'Mr. Singh',
            price: '₹699'
        }
    ];

    const toggleCourse = (id) => {
        if (selectedCourse === id) {
            setSelectedCourse(null);
        } else {
            setSelectedCourse(id);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === notesRef.current) {
                        setLoadedNotes(true);
                    }
                    if (entry.target === notebookRef.current) {
                        setLoadedNotebook(true);
                    }
                }
            });
        });

        if (notesRef.current) {
            observer.observe(notesRef.current);
        }
        if (notebookRef.current) {
            observer.observe(notebookRef.current);
        }

        return () => {
            if (notesRef.current) {
                observer.unobserve(notesRef.current);
            }
            if (notebookRef.current) {
                observer.unobserve(notebookRef.current);
            }
        };
    }, []);

    const selectedCourseData = courses.find(course => course.id === selectedCourse);

    return (
        <div className="relative bg-gradient-to-r from-[#094C3D] to-[#116955] mb-10 sm:mb-20 rounded-3xl shadow-md sm:p-8 p-4 text-white max-w-[92vw] mx-auto">
            <Image ref={notesRef} className={`absolute top-[-20px] right-10 sm:right-16 sm:w-36 transition-transform duration-1000 ${loadedNotes ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"}`} height={60} width={80} src="/images/notes.svg" alt="" />
            <div className="flex gap-10 items-center mb-4">
                <h2 className="sm:text-3xl text-xl p-4">Top Selling Courses</h2>
                <div className="items-center text-[#F4B955] gap-2 border-b hidden lg:flex border-[#F4B955]">
                    <span className='cursor-pointer'>View All Courses</span>
                    <FaArrowRightLong />
                </div>
            </div>

            <div className='flex gap-10 lg:gap-20 justify-between'>
                {/*Left side Courses List */}
                <div className="w-full">
                    {courses.map((course) => (
                        <div key={course.id} className="w-full mb-2">
                            <div
                                className="flex justify-between items-center lg:max-w-[600px] hover:bg-[#A3E47B33] rounded-t-lg lg:rounded-lg cursor-pointer" onClick={() => toggleCourse(course.id)}>
                                <div className="flex items-center p-4">
                                    <Image src={course.imgSrc} alt={course.title} width={50} height={50} className="rounded-lg" />
                                    <span className="ml-4 sm:text-lg font-medium">{course.title}</span>
                                </div>
                                <div className="pr-4 lg:hidden" onClick={() => toggleCourse(course.id)}>
                                    {selectedCourse === course.id ? <SlArrowUp /> : <SlArrowDown />}
                                </div>
                            </div>

                            <div className={`overflow-hidden transition-all lg:hidden duration-500 ${selectedCourse === course.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-4 bg-[#A3E47B33] rounded-b-lg">
                                    <button className='border px-4 py-1 rounded-full my-2 text-sm'>Best Seller</button>
                                    <p>{course.details}</p>
                                    <p className="mt-2 font-semibold">Teacher: {course.teacher}</p>
                                    <div className="flex items-center mb-4">
                                        <div className='flex items-center gap-2'>
                                            <span><Image height={10} width={60} src="/images/stars.svg" alt="Stars Rating" /></span>
                                            <span className="font-semibold font-lg"> 4.5 by 1,724 students</span>
                                        </div>
                                    </div>
                                    <p className="text-2xl font-semibold mt-4">
                                        {course.price} <span className="text-sm font-thin text-gray-200">(inclusive of taxes)</span>
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

                {/* Right Side*/}
                {selectedCourseData && (
                    <div className='hidden lg:block m-auto '>
                        <h3 className="text-lg mr-20 mb-4">
                            {selectedCourseData.details}
                        </h3>

                        <p className="text-lg mb-2"><strong>Teacher:</strong> {selectedCourseData.teacher}</p>
                        <div className="flex items-center mb-4">
                            <div className='flex items-center gap-2'>
                                <span><Image height={14} width={85} src="/images/stars.svg" alt="Stars Rating" /></span>
                                <span className="font-semibold font-lg"> 4.5 by 1,724 students</span>
                            </div>
                        </div>

                        <p className="text-3xl font-semibold">{selectedCourseData.price} <span className="text-base text-gray-300 font-normal">(inclusive of taxes)</span></p>

                        <div className="mt-4 flex gap-6">
                            <div className="flex items-center text-[#F4B955] gap-2 border-b border-[#F4B955]">
                                <span className='cursor-pointer'>View Details</span>
                                <FaArrowRightLong />
                            </div>
                            <div className="flex items-center text-[#F4B955] gap-2 border-b border-[#F4B955]">
                                <span className='cursor-pointer'>Wishlist Course</span>
                                <FaArrowRightLong />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Section */}
            <div className="bg-[#ECF8DF] relative rounded-lg p-4 sm:p-6 mt-10 lg:mt-32 flex lg:justify-between items-center">
                <div className='flex items-center'>
                    <Image ref={notebookRef} className={'absolute bottom-0 lg:left-10 sm:right-8 right-2 sm:w-[300px]'} src="/images/semiircle.svg" alt="Quiz Icon" width={158} height={92} />
                    <Image className={`absolute bottom-3 sm:bottom-5 lg:bottom-8 sm:right-20 lg:left-36 right-6 sm:w-[150px] transition-transform duration-1000 ${loadedNotebook ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"}`} src="/images/notebook.svg" alt="Notebook Icon" width={110} height={70} />
                </div>
                <div className="flex lg:flex-row lg:justify-end items-start flex-col xl:gap-20 gap-4 xl:mx-10 lg:items-center">
                    <h4 className="md:text-xl lg:text-2xl z-10 sm:text-base text-sm sm:font-semibold w-5/6 sm:w-3/5 text-black">Take a practice Quiz designed to sharpen your skills</h4>
                    <button className='flex items-center z-10 bg-[#F4B955] text-black sm:font-semibold text-sm sm:text-base px-4 py-2 rounded-full gap-2 transform transition hover:-translate-y-2 duration-300'>
                        Take Quiz
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopSellingCourses;
