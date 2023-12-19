"use client";
import { useTheme } from '@/context/themeContext';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const ThemeSwitch = () => {

  const { bgTheme, toggleTheme } = useTheme();

  return (
    <button 
    className='fixed bottom-5 right-5 bg-gray-950 text-gray-200 dark:bg-white dark:text-gray-800 w-[3rem] h-[3rem] bg-opacity-80 border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all'
    onClick={toggleTheme}
    >
      {
        bgTheme === "light" ? <BsMoon /> : <BsSun /> 
      }      
    </button>
  )
}

export default ThemeSwitch;