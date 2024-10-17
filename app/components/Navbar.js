import Image from 'next/image'
import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
    return (
        <div className='flex justify-between mx-5 sm:mx-10  my-4'>
            <div className='flex gap-4 items-center '>
                <Image className='cursor-pointer sm:w-20 ' height={53} width={38} src="/images/logo.svg" alt="" />
                <div className='hidden lg:flex items-center cursor-pointer gap-1'>
                    Courses
                    <FaAngleDown />

                </div>
                <div className='lg:flex  hidden items-center cursor-pointer gap-1'>
                    My Learnings
                    <FaAngleDown />
                </div>
            </div>

            <div className='flex items-center gap-4 md:gap-2' >
                <div className=" lg:flex hidden items-center m-auto border rounded-full border-gray-500 bg-white">
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
                <button className='hidden md:block border-[#F4B955] text-lg shadow-xl font-semibold border-2 rounded-full px-8 py-2 transition-transform duration-300 transform hover:scale-105 ' >Login</button>
                <button className='hidden md:block bg-[#F4B955] text-lg font-semibold shadow-xl border-2 rounded-full px-8 py-2 transition-transform duration-300 transform hover:scale-105' >Register</button>
                 <Image className='lg:hidden sm:w-12 cursor-pointer' width={31} height={31} src="/images/chatbot.svg" alt="" />
                 <span className='md:hidden text-2xl cursor-pointer ' ><RxHamburgerMenu/></span> 

            </div>
        </div>
    )
}

export default Navbar
