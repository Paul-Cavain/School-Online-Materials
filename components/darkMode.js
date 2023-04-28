"use client"
import React from 'react'
import { useTheme } from "next-themes";
import { AiOutlineSound } from 'react-icons/ai';


const darkMode = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-indigo-600 dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'>
            <AiOutlineSound size={80} />
        </button>
    )
}

export default darkMode;