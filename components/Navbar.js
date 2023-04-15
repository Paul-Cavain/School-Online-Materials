import Image from "next/image";
import Link from "next/link";
import React from "react";
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'
import { useState } from "react";

const Navbar = () =>{
    const [menuOpen, stMenuOpen] = useState(false)
    const handleNav = () =>{
        stMenuOpen(!menuOpen);
    }
    return(
        <nav className="fixed top-0 left-0 right-0 w-full h-20 shadow-xl bg-white z-10">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <div className="flex flex-row">
                    <div>
                        <Link href="/">
                            <h3 className="text-3xl">Zephanious</h3>
                        </Link>
                    </div>
                    <div>
                        <Link href="/Packages">
                            <button className="ml-10 h-10 w-32 rounded-md  text-lg bg-blue-500 text-white font-semibold">Our Packages</button>
                        </Link>
                    </div>
                </div>
                <div className="hidden sm:flex px-10">
                    <ul className="hidden sm:flex">
                        
                        <Link href="/">
                            <li className="ml-10 hover:border-b-4 text-lg">Home</li>
                        </Link>
                        <Link href="/about">
                            <li className="ml-10 hover:border-b-4 text-lg">About</li>
                        </Link>
                        
                        <Link href="/courses">
                            <li className="ml-10 hover:border-b-4 text-lg">Our Courses</li>
                        </Link>
                        <Link href="/Events">
                            <li className="ml-10 hover:border-b-4 text-lg">Events</li>
                        </Link>

                        <Link href="/contact">
                            <li className="ml-10 hover:border-b-4 text-lg">Contacts</li>
                        </Link>

                        <Link href="/login">
                            <li className="ml-10 hover:border-b-4 text-lg">Login</li>
                        </Link>
                        
                        
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer p-3">
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            {/* how it will loooks in a mobile  */}
            <div className={
                menuOpen
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"

            }>  
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={30} />
                    </div>
                </div>

                {/* sidebar menu in a mobile */}
                <div className="flex col py-4">
                    <ul>
                        <Link href="/">
                            <li
                                onClick={() => stMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Home
                            </li>
                        </Link>
                        <Link href="/about">
                            <li
                                onClick={() => stMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                About
                            </li>
                        </Link>
                        <Link href="/jobs">
                            <li
                                onClick={() => stMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Jobs
                            </li>
                        </Link>
                        <Link href="/employer">
                            <li
                                onClick={() => stMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Employer
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li
                                onClick={() => stMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>

                {/* social media icons */}
                <div className="flex flex-row justify-around pt-10 item-center">
                    <AiOutlineInstagram size={30} className="cursor-pointer" />
                    <AiOutlineFacebook size={30} className="cursor-pointer" />
                    <AiOutlineTwitter size={30} className="cursor-pointer" />
                </div>
            </div>
        </nav>
    );
}
export default Navbar;