// ContextApiChatBot.js
"use client"
import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <ChatContext.Provider value={{ isOpen, toggleChat }}>
            {children}
        </ChatContext.Provider>
    );
};

// This is your custom hook
export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
};
