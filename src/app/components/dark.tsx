"use client"

import { useEffect, useState } from "react"

export default function DarkMode () {
    const [ isDark, setIsDark ] = useState(false);
    
    useEffect(()=> {
        const savedMode = localStorage.getItem("darkMode") === "true";
        setIsDark(savedMode);

        if(savedMode) {
            document.documentElement.classList.add("dark");
        }else {
            document.documentElement.classList.remove("dark");
        }
    }, [])

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark")
        localStorage.setItem("darkMode", (!isDark).toString())
    };

    return (
        <>
            <div className="p-2 flex items-center">
                <button
                    onClick={toggleDarkMode} aria-label="Toggle dark mode"
                    className="w-12 h-5 p-1 flex items-center bg-gray-300 dark:bg-gray-500 transition-all rounded-full"
                >
                    <div className={`w-4 h-4 p-1 rounded-full bg-white transform transition-all ${isDark? "translate-x-6": "-translate-x-0"}`}></div>
                </button>
                <p className="px-1">{isDark? "Light Mode" : "Dark Mode"}</p>
            </div>
        </>
    )
}