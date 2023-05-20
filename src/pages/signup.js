import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Script from 'next/script'
import { BookFill, BookmarkDashFill, CollectionFill, Messenger, Phone, TelephoneFill,  } from "react-bootstrap-icons";


const signup = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('');

    const handleOnChange = (value, country) => {
    setPhoneNumber(value);
    setCountryCode(country.dialCode);
  }
    return(
        <>
            <Head>
                <title>Zephanious | sign_up</title>
                <meta name="keywords" content="LearnNextJs" />
                <Script src="/validations/signinform.js"></Script>
            </Head>

            {/* navigationBar */}
            <div>
                <Navbar />
            </div>

            {/* body contents */}
            <div className="pt-32 px-4 md:px-0 md:pt-32 bg-gray-100">
                    <div className="md:ml-20 text-3xl font-extralight">
                        <h1>Create An Account</h1>
                    </div>

                    {/* who we are */}
                    <div className="mt-10 pb-40 flex flex-col md:flex-row md:px-20 md:space-x-10 font-extralight">

                        {/* about form */}
                        <div className="bg-indigo-600 md:w-1/2 pb-3 rounded-md">
                            <div className="mt-4">
                                <h3 className="text-center text-xl pt-4 text-white">Fill Your Credentials</h3>
                            </div>

                            <div className="mt-3 px-4">
                                <label className="text-white">First Name </label>
                                <input type={"text"} name="fname" placeholder="Enter First Name" className="rounded-md h-10 w-full focus:outline-none px-2" />
                            </div>
                            <div className="mt-3 px-4">
                                <label className="text-white">Last Name </label>
                                <input type={"text"} name="lname" placeholder="Enter Last Name" className="rounded-md h-10 w-full focus:outline-none px-2" />
                            </div>

                            <div className="flex flex-col md:flex-row mt-3 justify-between md:space-x-6 px-4 w-full">
                                <div className="w-full">
                                    <label className="text-white">Your Age </label>
                                    <input type={"number"} name="age" placeholder="Enter Your age" className="rounded-md h-10 w-full focus:outline-none px-2" />
                                </div>
                                <div className="w-full">
                                    <label for="gender" className="block text-white">Select gender</label>
                                    <select id="gender" className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block focus:outline-none w-full h-10 px-2">
                                        <option disabled selected>Select Your gender</option>
                                        <option value={"Male"}>Male</option>
                                        <option value={"Female"}>Female</option>
                                        <option value={"Other"}>Other</option>
                                    </select>
                                </div>

                            </div>

                            <div className="mt-3 px-4">
                                <label className="text-white">Parent Phone Number </label>
                                <PhoneInput

                                    country={'tz'}
                                    value={phoneNumber}
                                    onChange={handleOnChange}
                                    inputProps={{
                                    name: 'phone',
                                    required: true,
                                    style: { width: '100%', height: '40px' },
                                    }}
                                />
                                <input
                                    type="hidden"
                                    name="countryCode"
                                    value={countryCode}
                                    
                                />
                            </div>
                            <div className='mt-3 px-4'>
                                <label className="text-white">Student Phone Number(Optional) </label>
                                <PhoneInput

                                    country={'tz'}
                                    value={phoneNumber}
                                    onChange={handleOnChange}
                                    inputProps={{
                                    name: 'phone',
                                    required: true,
                                    style: { width: '100%', height: '40px' },
                                    }}
                                />
                                <input
                                    type="hidden"
                                    name="countryCode"
                                    value={countryCode}
                                    
                                />
                            </div>
                            
                            <div className="mt-3 px-4">
                                <label for="gender" className="block text-white">Select Package</label>
                                <select id="gender" className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block            focus:outline-none w-full h-10 px-2">
                                    <option disabled selected>Select Your Package Category</option>
                                    <option value={"Pro"} >Professional</option>
                                    <option value={"Premier"} >Premium</option>
                                    <option value={"Diamond"} >Diamond</option>
                                </select>
                            </div>
                            <div className="mt-5 px-4">
                                <label className="text-white">Create Password </label>
                                <input type={"text"} name="password" placeholder="Package Category" className="rounded-md h-10 w-full focus:outline-none px-2"  />
                            </div>
                            <div className="mt-5 px-4">
                                <label className="text-white">Confirm Password </label>
                                <input type={"text"} name="password" placeholder="Package Category" className="rounded-md h-10 w-full focus:outline-none px-2"  />
                            </div>
                            
                            
                            <div className="text-end px-4">
                                <button type="submit" className="h-10 w-full bg-black text-white mt-6 rounded-md">Register</button>
                            </div>
                            <div className="text-center mt-5">
                                <input type={"checkbox"} name={"remember"} className="mx-1"/>Remember Me!
                            </div>
                            <div className="text-center mt-1">
                                <h3>Have an account? <Link href={"./login"}><span>Login</span></Link>  </h3>
                            </div>
                            
                        </div>

                        <div className="mt-20 md:mt-0">
                            {/* column one */}
                            <div className="md:w-full">
                                <Image className="rounded-md md:rounded-sm opacity-1" src={"/pexel.jpg"} width={600} height={100} alt="landing image" />
                            </div>

                            {/* column two */}
                            <div className="flex flex-col mt-8 space-y-8 md:space-y-4">
                                <div className="bg-white w-full px-5 py-8 h-auto rounded-md shadow-lg transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                                    <div className="flex flex-row space-x-3">
                                        <div>
                                            <CollectionFill className="text-3xl text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl">Check On Our Packages</h3>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p>We offer efficient package to every economy level</p>
                                    </div>
                                    <div>
                                    <Link href={"./Packages"}>
                                        <h3 className="text-end text-lg hover:rounded-t-sm hover:text-blue-500">Check it</h3>
                                    </Link>
                                    </div>
                                </div>
                                <div className="bg-white w-full px-5 py-8 h-auto rounded-md shadow-lg transition duration-300 transform hover:shadow-blue-500 hover:shadow-md ">
                                    <div className="flex flex-row space-x-3">
                                        <div>
                                            <BookFill className="text-4xl text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl">Check On Our Courses</h3>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p>Become a professional from our efficient courses</p>
                                    </div>
                                    
                                    <div>
                                    <Link href={"./courses"}>
                                        <h3 className="text-end text-lg hover:rounded-t-sm hover:text-blue-500">Check it</h3>
                                    </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

            </div>

            {/* footer */}
            <div>
                <Footer />
            </div>

        </>

    );

}
export default signup;