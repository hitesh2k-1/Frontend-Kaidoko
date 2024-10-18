"use client";
import { useState } from 'react';
import Image from 'next/image';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Bot Icon */}
            <button
                onClick={toggleChat}
                className=" transform hover:-translate-y-3 duration-500"
            >
                <Image
                    src="/images/chatbot.svg"
                    alt="Chatbot"
                    width={60}
                    height={60}
                    className=""
                />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white w-60 sm:w-96 h-[400px] sm:h-[450px] rounded-xl shadow-lg overflow-scroll scrollbar-hide">
                    <div className="bg-gradient-to-r from-[#094C3D] to-[#116955] text-white rounded-t-lg p-4 flex justify-between items-center">
                        <h2 className="text-xl ">GenAI Chatbot</h2>
                        <button
                            onClick={toggleChat}
                            className="text-white hover:text-gray-200 text-xl ">
                            X
                        </button>
                    </div>
                    <div className="p-4 space-y-4 text-sm sm:textbase ">
                        {/*Message*/}
                        <div className="flex items-start">
                            <Image
                                src="/images/chatbot.svg"
                                alt="Bot"
                                width={40}
                                height={40}
                                className="w-8 h-8 mr-2"
                            />
                            <div className="bg-[#ECF8DF] text-black p-3 rounded-lg rounded-tl-none shadow-lg w-2/3">
                                <p>Welcome to the NIELIT website. How can I assist you today?</p>
                            </div>
                        </div>
                        {/* User's message */}
                        <div className='flex justify-end' >
                            <div className="bg-[#FFDCA2] w-2/3 text-black p-3 rounded-lg rounded-tr-none shadow-lg">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</p>
                        </div>
                        </div>
                        <div className='flex justify-end' >
                            <div className="bg-[#FFDCA2] w-2/3 text-black p-3 rounded-tr-none shadow-lg rounded-lg">
                                <p> ut labore et dolore magna aliqua?</p>
                        </div>
                        </div>                       
                    </div>
                    <div className="p-4 rounded-b-lg">
                        <div className="flex items-center bg-white rounded-full border border-gray-300 px-4 py-2">
                            <input
                                type="text"
                                placeholder="Write your message here..."
                                className="flex-1 outline-none bg-transparent text-sm"
                            />
                            <button className="ml-2 text-green-500 hover:text-green-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 12h14M12 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
