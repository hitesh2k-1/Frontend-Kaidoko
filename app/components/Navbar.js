"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    // mobile menu visiblity
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle hamburger
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='relative'>
            <div className='flex sticky bg-white p-3 sm:px-10 w-full top-0 z-20 justify-between'>
                <div className='flex gap-4 items-center'>
                    <Image className='cursor-pointer sm:w-20' height={53} width={38} src="/images/logo.svg" alt="" />
                    <div className='hidden lg:flex items-center cursor-pointer gap-1'>
                        Courses
                        <FaAngleDown />
                    </div>
                    <div className='lg:flex hidden items-center cursor-pointer gap-1'>
                        My Learnings
                        <FaAngleDown />
                    </div>
                </div>

                <div className='flex items-center gap-4 md:gap-2'>
                    <div className="lg:flex hidden items-center m-auto border rounded-full border-gray-500 bg-white">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for a course or category"
                                className="pl-10 pr-4 py-1 rounded-full outline-none w-80 placeholder-gray-400"
                            />
                            <span className="absolute left-3 top-2 text-gray-400 cursor-pointer">
                                <FaSearch />
                            </span>
                        </div>
                    </div>
                    <button className='hidden md:block border-[#F4B955] text-lg shadow-xl font-semibold border-2 rounded-full px-8 py-2 transition-transform duration-300  hover:scale-105'>
                        Login
                    </button>
                    <button className='hidden md:block bg-[#F4B955] text-lg font-semibold shadow-xl border-2 rounded-full px-8 py-2 transition-transform duration-300  hover:scale-105'>
                        Register
                    </button>
                    <Image className='lg:hidden sm:w-12 cursor-pointer' width={31} height={31} src="/images/chatbot.png" alt="" />
                    <span onClick={toggleMenu} className='md:hidden text-2xl cursor-pointer'>
                    {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                    </span>
                </div>
            </div>

         {/* Mobile Menu  */}
            {menuOpen && (
                <div className='absolute top-full left-0 w-full bg-white shadow-lg z-20 '>
                    <ul className='flex flex-col items-start px-4 py-2 '>
                        <li className='w-full p-2 my-2 hover:bg-gray-100 rounded-2xl cursor-pointer flex items-center justify-between'>
                            Courses <FaAngleDown />
                        </li>
                        <li className='w-full p-2 my-2 hover:bg-gray-100 rounded-2xl cursor-pointer flex items-center justify-between'>
                            My Learnings <FaAngleDown />
                        </li>
                        <div className='flex items-center justify-between'>
                        <li className=' p-2 transition-transform duration-300  hover:scale-110 cursor-pointer'>
                            <button className='w-full  text-left border-[#F4B955] text-lg font-semibold border-2 rounded-full px-8 p-1'>
                                Login
                            </button>
                        </li>
                        <li className=' p-2 transition-transform duration-300  hover:scale-110 cursor-pointer'>
                            <button className='w-full  text-left bg-[#F4B955] text-lg font-semibold border-2 border-[#F4B955] rounded-full px-6 py-1'>
                                Register
                            </button>
                        </li>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
