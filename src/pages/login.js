import Navbar from "components/Navbar";
import Image from 'next/image'
import Link from "next/link";
import Head from "next/head";
import { CurrencyExchange, Messenger, TelephoneFill, PersonBadgeFill,  } from "react-bootstrap-icons";

const login = ()=>{
    return(
        <>
            <div>
                <Head>
                    <title>Zephanious | Login</title>
                    <meta name="keywords" content="LearnNextJs" />
                </Head>

                <div className="md:pt-44 bg-gray-100">
                    <div className="md:ml-20 text-3xl font-extralight">
                        <h1>Sign In To Your Account</h1>
                    </div>

                    {/* who we are */}
                    <div className="mt-10 pb-40 flex flex-col md:flex-row md:px-20 space-x-10 font-extralight">

                        {/* about form */}
                        <div className="bg-blue-500 w-1/2 pb-3 rounded-md">
                            <div className="mt-4">
                                <h3 className="text-center text-xl pt-4 text-white">Login</h3>
                            </div>
                            <div className="mt-3 px-4">
                                <input type={"text"} name="username" placeholder="Enter Username" className="rounded-md h-10 w-full focus:outline-none" />
                            </div>
                            <div className="mt-5 px-4">
                                <input type={"text"} name="password" placeholder="Enter Password" className="rounded-md h-10 w-full focus:outline-none"  />
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

                        {/* column one */}
                        <div className="flex flex-col">
                            <div className="bg-white w-full px-5 py-8 rounded-md shadow-lg ">
                                <div className="flex flex-row space-x-3">
                                    <div>
                                        <PersonBadgeFill className="text-4xl text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl">24 Hours Srvices</h3>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p>We Applicate our students' desire for knowledge and provide litime access to education data</p>
                                </div>
                            </div>
                            <div className="bg-white w-full px-5 py-8 rounded-md shadow-lg mt-6">
                                <div className="flex flex-row space-x-3">
                                    <div>
                                        <CurrencyExchange className="text-4xl text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl">Online Payment</h3>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p>We Applicate our students' desire for knowledge and provide litime access to education data</p>
                                </div>
                            </div>
                        </div>

                        {/* column two */}
                        <div className="flex flex-col">
                            <div className="bg-white w-full px-5 py-8 rounded-md shadow-lg">
                                <div className="flex flex-row space-x-3">
                                    <div>
                                        <Messenger className="text-3xl text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl">Online Help</h3>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p>We Applicate our students' desire for knowledge and provide litime access to education data</p>
                                </div>
                            </div>
                            <div className="bg-white w-full px-5 py-8 rounded-md shadow-lg mt-6">
                                <div className="flex flex-row space-x-3">
                                    <div>
                                        <TelephoneFill className="text-4xl text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl">Call +1 800 559 6580</h3>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p>We Applicate our students' desire for knowledge and provide litime access to education data</p>
                                </div>
                            </div>
                        </div>

                        

                    </div>

                </div>
            </div>
        </>
    );
}
export default login;

