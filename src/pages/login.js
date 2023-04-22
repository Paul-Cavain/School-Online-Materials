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

                <div className="pt-32 md:pt-44 bg-gray-100 px-4 md:px-0">
                    <div className="flex flex-col md:flex-row justify-between md:mx-20">
                        <div className="text-3xl font-extralight">
                            <h1>Sign In To Your Account</h1>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Link href={"./signup"}>
                                <button type="button" name="button" className="bg-indigo-600 w-24 h-10 text-white rounded-md">Register</button>
                            </Link>
                        </div>
                    </div>

                    {/* who we are */}
                    <div className="mt-10 pb-20 md:pb-40 flex flex-col md:flex-row md:px-20 md:space-x-10 font-extralight">

                        {/* about form */}
                        <form action="" method="" className="bg-indigo-600 md:w-1/2 pb-3 rounded-md">
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
                        </form>

                        {/* column one */}
                        <div className="flex flex-col mt-12 md:mt-0">
                            <div className="bg-white w-full px-5 py-8 rounded-md shadow-lg transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                                <div className="flex flex-row space-x-3">
                                    <div>
                                        <PersonBadgeFill className="text-4xl text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl">24 Hours Srvices</h3>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p>We Applicate our students' desire for knowledge and provide litime access to education data</p>
                                </div>
                            </div>
                            <div className="bg-white w-full px-5 py-8 rounded-md shadow-lg mt-6 transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                                <div className="flex flex-row space-x-3">
                                    <div>
                                        <CurrencyExchange className="text-4xl text-indigo-600" />
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
                        <div className="flex flex-col mt-6 md:mt-0">
                            <div className="bg-white w-full px-5 py-8 rounded-md shadow-lg transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                                <div className="flex flex-row space-x-3">
                                    <div>
                                        <Messenger className="text-3xl text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl">Online Help</h3>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p>We Applicate our students' desire for knowledge and provide litime access to education data</p>
                                </div>
                            </div>
                            <div className="bg-white w-full px-5 py-8 rounded-md shadow-lg mt-6 transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                                <div className="flex flex-row space-x-3">
                                    <div>
                                        <TelephoneFill className="text-4xl text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl">Call +255 755 291 20</h3>
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

