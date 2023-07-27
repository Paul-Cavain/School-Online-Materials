import Image from "next/image";
import Link from "next/link";
import React from "react";
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineWhatsApp} from 'react-icons/ai';
import { Person  } from "react-bootstrap-icons";
import { useState } from "react";

const NavbarAdmin = () =>{
    const [menuOpen, stMenuOpen] = useState(false)
    const handleNav = () =>{
        stMenuOpen(!menuOpen);
    }

    return(
        <nav className="fixed top-0 left-0 right-0 w-full h-20 shadow-xl bg-white z-10">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <div className="flex flex-row md:space-x-12 space-x-0">
                    <div>
                        <Link href="/">
                            <h3 className="text-3xl">Zephanious</h3>
                        </Link>
                    </div>
                    <div className="">
                        <Link href="/Packages">
                            <button className="h-10 w-32 rounded-md  text-lg bg-indigo-600 text-white font-semibold invisible md:visible">Our Packages</button>
                        </Link>
                    </div>
                </div>
                <div className="hidden sm:flex px-10">
                    <ul className="hidden sm:flex space-x-8">
                        
                        <Link href="/">
                            <li className="hover:border-b-4 text-lg">Home</li>
                        </Link>

                        <Link href="/login">
                            <li className="hover:border-b-4 text-lg">Login</li>
                        </Link>
                        <Link href="#">
                            <Person className="text-3xl"/>
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
                <div className="flex flex-row space-x-8 w-full justify-between">
                    <div>
                        <h3 className="text-2xl">Zephanious</h3>
                    </div>
                    <div onClick={handleNav} className="cursor-pointer bg-indigo-600 rounded-full text-white">
                        <AiOutlineClose size={30} />
                    </div>
                </div>
                <hr className="mt-4" />

                {/* sidebar menu in a mobile */}
                <div className="flex col py-2">
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
                        <Link href="/courses">
                            <li
                                onClick={() => stMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Our Courses
                            </li>
                        </Link>
                        <Link href="/Events">
                            <li
                                onClick={() => stMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Events
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li
                                onClick={() => stMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Contacts
                            </li>
                        </Link>
                        <Link href="/login">
                            <li
                                onClick={() => stMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Login
                            </li>
                        </Link>

                        <Link href="/Packages">
                            <li
                                onClick={() => stMenuOpen(false)}
                                className="h-10 py-2 px-4 mt-2 cursor-pointer bg-indigo-600  rounded-md text-white"
                            >
                                Our Packages
                            </li>
                        </Link>

                    </ul>
                </div>
                <hr className="mt-3" />

                {/* social media icons */}
                <div className="flex flex-row justify-start pt-10 item-center text-indigo-600 space-x-2">
                    <AiOutlineInstagram className="cursor-pointer text-xl hover:text-2xl hover:text-black" />
                    <AiOutlineFacebook className="cursor-pointer text-xl hover:text-2xl hover:text-black" />
                    <AiOutlineTwitter className="cursor-pointer text-xl hover:text-2xl hover:text-black" />
                    <AiOutlineLinkedin className="cursor-pointer text-xl hover:text-2xl hover:text-black" />
                    <AiOutlineWhatsApp className="cursor-pointer text-xl hover:text-2xl hover:text-black" />
                </div>
            </div>
        </nav>
    );
}
export default NavbarAdmin;