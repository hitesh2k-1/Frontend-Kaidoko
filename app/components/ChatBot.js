"use client";
import { useState } from "react";
import Image from "next/image";
import Draggable from "react-draggable";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Bot Icon */}
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className=" transform hover:-translate-y-3 duration-500"
                >
                    <Image
                        src="/images/chatbot.png"
                        alt="Chatbot"
                        width={50}
                        height={50}
                        className="sm:w-16 sm:h-16"
                    />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <Draggable cancel=".no-drag">
                <div className="bg-white w-80 sm:w-96 h-[400px] sm:h-[450px] rounded-xl shadow-lg overflow-scroll scrollbar-hide">
                        <div>
                            <div className="bg-gradient-to-r from-[#094C3D] to-[#116955] text-white rounded-t-lg p-4 flex justify-between items-center cursor-pointer">
                                <h2 className="text-xl">GenAI Chatbot</h2>
                                <button
                                    onClick={toggleChat}
                                    className="text-white no-drag hover:text-gray-200 hover:text-xl text-lg "
                                >
                                    X
                                </button>
                            </div>
                        </div>
                        <div className="p-4 space-y-4 text-sm sm:text-base no-drag">
                            {/* Bot's Message */}
                            <div className="flex items-start">
                                <Image
                                    src="/images/chatbot.png"
                                    alt="Bot"
                                    width={40}
                                    height={40}
                                    className="sm:w-8 sm:h-8 mr-2"
                                />
                                <div className="bg-[#ECF8DF] text-black p-3 rounded-lg rounded-tl-none shadow-lg w-4/5">
                                    <p>Welcome to the NIELIT website. How can I assist you today?</p>
                                </div>
                            </div>
                            {/* User's Message */}
                            <div className="flex justify-end">
                                <div className="bg-[#FFDCA2] w-4/5 text-black p-3 rounded-lg rounded-tr-none shadow-lg">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</p>
                                </div>
                            </div>
                        </div>
                        <div className=" no-drag p-4 absolute bottom-0 bg-white rounded-xl w-full">
                            <div className="flex gap-3 flex-col items-start bg-white rounded-xl border border-gray-300 px-4 py-2">
                                <div className="w-full">
                                    <input
                                        type="text"
                                        placeholder="Write your message here..."
                                        className="text-sm w-full outline-none"
                                    />
                                </div>
                                <div className="inline-flex justify-between w-full">
                                    <div className="flex gap-2 cursor-pointer">
                                        <Image height={28} width={28} src="/images/addfile.svg" alt="" />
                                        <Image height={28} width={28} src="/images/audio.svg" alt="" />
                                    </div>
                                    <div className="cursor-pointer">
                                        <Image height={28} width={28} src="/images/send.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Draggable>
            )}
        </div>
    );
};

export default ChatBot;
