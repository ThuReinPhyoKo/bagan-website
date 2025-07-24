'use client'
import Link from 'next/link'
import { useState , useEffect } from "react"
import DarkMode from './dark';
 

export default function Nav() {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ isScroll, setIsScroll ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <nav className={`w-full h-14 text-white fixed p-2  z-50 top-0 left-0 transition-all duration-300 ${isScroll ? "bg-black bg-opacity-60" : ""}`}>
                <div className="flex w-full md:w-3/4 mx-auto">
                    <button type='button' className='md:hidden inline-flex items-center justify-center w-10 h-10 p-2 rounded-lg bg-white text-black' onClick={() => setIsOpen(!isOpen)}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-4">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 6h10" /><path d="M4 12h16" /><path d="M7 12h13" /><path d="M7 18h10" />
                        </svg>
                    </button>
                    <div  className={`${isOpen? 'block':'hidden'} md:block md:bg-transparent w-auto bg-black/80 nav-links rounded-lg transition duration-100 ease-in-out`}>
                        <ul className='flex flex-col md:flex-row md:items-center'>
                            <li className='block font-medium p-2 border-b border-slate-500 hover:bg-sky-800 md:border-0 md:hover:bg-transparent'><Link href='/' className='navigator'>Home</Link></li>
                            <li className='block font-medium p-2 border-b border-slate-500 md:border-0 md:hover:bg-transparent'><Link href='/History' className='navigator'>History</Link></li>
                            <li className='block font-medium p-2 border-b border-slate-500 md:border-0 md:hover:bg-transparent'><Link href='/Architecture' className='navigator'>Architecture</Link></li>
                            <li className='block font-medium p-2 border-b border-slate-500 md:border-0 md:hover:bg-transparent'><Link href='/Culture' className='navigator'>Culture</Link></li>
                            <DarkMode />
                        </ul>
                    </div>
                    <div className="logo font-semibold p-2 ml-auto">Ryan.dev</div>
                </div>
            </nav>
        </>
    )
}