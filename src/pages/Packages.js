import Head from "next/head";
import Link from "next/link";
import Modal from "components/Modal";
import { Fragment, useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Packages = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Head>
                <title>Zephanious | Packages</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            {/* navigationBar */}
            <div>
                <Navbar />
            </div>

            {/* body contents */}
            <Fragment>
                <div className="pt-32 bg-gray-100 pb-32 px-4 md:px-0">
                    <div className="md:ml-20 text-3xl text-center font-light">
                        <h3>Our Packages</h3>
                    </div>
                    <div className="md:ml-20 text-xl text-center font-extralight">
                        <h2>Select the package of your favourite choice</h2>
                    </div>

                    {/* cards */}

                    <div className="flex flex-col md:flex-row justify-center md:space-x-10 md:mx-20 mt-12 space-y-10 md:space-y-0">

                        {/* cardOne */}
                        <div className="bg-white md:px-4 pt-5 pb-10 rounded-md w-full text-center shadow-lg transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                            <div className="text-xl uppercase">
                                <h3>Professional</h3>
                            </div>
                            <div className="mt-8 text-3xl font-light">
                                <h3>3 Months | Tsh 3,000</h3>
                            </div>
                            <div className="mt-8 text-start px-10 font-light">
                                <ol>
                                    <li>
                                        <input type={"checkbox"} className="" checked="true" /><span className="ml-2">Free Download</span>
                                    </li>
                                    <li>
                                        <input type={"checkbox"} className="mt-4" checked="true" /><span className="ml-2">Online Reading</span>
                                    </li>
                                    <li>
                                        <input type={"checkbox"} className="mt-4" checked="true" /><span className="ml-2">Questions and Answers</span>
                                    </li>
                                </ol>
                            </div>
                            <div className="mt-28">
                                <button className="bg-black text-white h-10 w-20 rounded-md" onClick={() => setShowModal(true)} >Get now</button>
                            </div>
                        </div>

                        {/* cardTwo */}
                        <div className="bg-white md:px-4 pt-5 pb-10 rounded-md w-full text-center shadow-lg transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                            <div className="text-xl uppercase">
                                <h3>Premium</h3>
                            </div>
                            <div className="mt-8 text-3xl font-light">
                                <h3>6 Months | Tsh 5,000</h3>
                            </div>
                            <div className="mt-8 text-start px-10 font-light">
                                <ol>
                                    <li>
                                        <input type={"checkbox"} className="" checked="true" /><span className="ml-2">Free Download</span>
                                    </li>
                                    <li>
                                        <input type={"checkbox"} className="mt-4" checked="true" /><span className="ml-2">Online Reading</span>
                                    </li>
                                    <li>
                                        <input type={"checkbox"} className="mt-4" checked="true" /><span className="ml-2">Solved Questions and Answers</span>
                                    </li>
                                
                                </ol>
                            </div>
                            
                            <div className="mt-28">
                                <button className="bg-black text-white h-10 w-20 rounded-md" onClick={() => setShowModal(true)}>Get now</button>
                            </div>
                            
                        </div>

                        {/* cardThree */}
                        <div className="bg-white md:px-4 pt-5 pb-10 rounded-md w-full text-center shadow-lg transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                            <div className="text-xl uppercase">
                                <h3>Diamond</h3>
                            </div>
                            <div className="mt-8 text-3xl font-light">
                                <h3>1 Year | Tsh 10,000</h3>
                            </div>
                            <div className="mt-8 text-start px-10 font-light">
                                <ol>
                                    <li>
                                        <input type={"checkbox"} className="" checked="true" /><span className="ml-2">Free Download</span>
                                    </li>
                                    <li>
                                        <input type={"checkbox"} className="mt-4" checked="true" /><span className="ml-2">Online Reading</span>
                                    </li>
                                    <li>
                                        <input type={"checkbox"} className="mt-4" checked="true" /><span className="ml-2">Solved Questions and Answers</span>
                                    </li>
                                    <li>
                                        <input type={"checkbox"} className="mt-4" checked="true" /><span className="ml-2">Challenged Questions</span>
                                    </li>
                                    <li>
                                        <input type={"checkbox"} className="mt-4" checked="true" /><span className="ml-2">Free Monthly Tests</span>
                                    </li>
                                
                                </ol>
                            </div>
                            <div className="mt-12">
                                <button className="bg-black text-white h-10 w-20 rounded-md" onClick={() => setShowModal(true)}>Get now</button>
                            </div>
                        </div>

                    </div>

                </div>
                <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
                    <div className="pt-4 mx-4">
                        <div className="mt-4">
                            <h3 className="text-center text-xl pt-4 text-white">Login</h3>
                        </div>
                        <div className="mt-3 px-4">
                            <input type={"text"} name="username" placeholder="Enter Username" className="rounded-md h-10 w-full focus:outline-none px-2" />
                        </div>
                        <div className="mt-5 px-4">
                            <input type={"text"} name="password" placeholder="Enter Password" className="rounded-md h-10 w-full focus:outline-none px-2"  />
                        </div>
                        <div className="text-end px-4">
                            <button type="submit" className="h-10 w-full bg-black text-white mt-6 rounded-md">Login</button>
                        </div>
                        <div className="text-center mt-6">
                            <h3>Have an account? <Link href={"./signup"}><span>Register</span></Link>  </h3>
                        </div>
                        <div className="text-center mt-1">
                            <h3>Forget Password?</h3>
                        </div>
                    </div>
                </Modal>
            </Fragment>

            {/* footer */}
            <div>
                <Footer />
            </div>
        </>
    );
}
export default Packages;