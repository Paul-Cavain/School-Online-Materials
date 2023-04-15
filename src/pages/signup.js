import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { BookFill, BookmarkDashFill, CollectionFill, Messenger, TelephoneFill,  } from "react-bootstrap-icons";

const signup = () => {
    return(
        <>
            <Head>
                <title>Satify | sign_up</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>
            <div className="md:pt-32 bg-gray-100">
                    <div className="md:ml-20 text-3xl font-extralight">
                        <h1>Create An Account</h1>
                    </div>

                    {/* who we are */}
                    <div className="mt-10 pb-40 flex flex-col md:flex-row md:px-20 space-x-10 font-extralight">

                        {/* about form */}
                        <div className="bg-blue-500 w-1/2 pb-3 rounded-md">
                            <div className="mt-4">
                                <h3 className="text-center text-xl pt-4 text-white">Fill Your Credentials</h3>
                            </div>

                            <div className="mt-3 px-4">
                                <label className="text-white">First Name </label>
                                <input type={"text"} name="fname" placeholder="Enter First Name" className="rounded-md h-10 w-full" />
                            </div>
                            <div className="mt-3 px-4">
                            <label className="text-white">Last Name </label>
                                <input type={"text"} name="lname" placeholder="Enter Last Name" className="rounded-md h-10 w-full" />
                            </div>
                            <div className="mt-3 px-4">
                            <label className="text-white">Student Phone Number (Optional) </label>
                                <input type={"text"} name="student_phone" placeholder="Enter Student Phone Number" className="rounded-md h-10 w-full" />
                            </div>
                            <div className="mt-3 px-4">
                            <label className="text-white">Parent Phone Number </label>
                                <input type={"text"} name="parent_phone" placeholder="Enter Parent Phone Number" className="rounded-md h-10 w-full" />
                            </div>
                            <div className="mt-5 px-4">
                            <label className="text-white">Select Package </label>
                                <input type={"text"} name="package" placeholder="Package Category" className="rounded-md h-10 w-full"  />
                            </div>
                            <div className="mt-5 px-4">
                            <label className="text-white">Create Password </label>
                                <input type={"text"} name="password" placeholder="Package Category" className="rounded-md h-10 w-full"  />
                            </div>
                            <div className="mt-5 px-4">
                            <label className="text-white">Confirm Password </label>
                                <input type={"text"} name="password" placeholder="Package Category" className="rounded-md h-10 w-full"  />
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

                        <div className="">
                            {/* column one */}
                            <div className="md:w-full hover:animate-bounce">
                                <Image className="rounded-sm opacity-1" src={"/pexel.jpg"} width={600} height={100} alt="landing image" />
                            </div>

                            {/* column two */}
                            <div className="flex flex-col mt-8 space-y-4">
                                <div className="bg-white w-full px-5 py-8 h-auto rounded-md shadow-lg transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                                    <div className="flex flex-row space-x-3">
                                        <div>
                                            <CollectionFill className="text-3xl text-blue-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl">Check On Our Packages</h3>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p>We offer efficient package to every economy level</p>
                                    </div>
                                    <Link href={"./Packages"}>
                                        <div>
                                            <h3 className="text-end hover:rounded-t-sm hover:text-blue-500">Check it</h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className="bg-white w-full px-5 py-8 h-auto rounded-md shadow-lg transition duration-300 transform hover:shadow-blue-500 hover:shadow-md ">
                                    <div className="flex flex-row space-x-3">
                                        <div>
                                            <BookFill className="text-4xl text-blue-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl">Check On Our Courses</h3>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p>Become a professional from our efficient courses</p>
                                    </div>
                                    <Link href={"./courses"}>
                                        <div>
                                            <h3 className="text-end hover:rounded-t-sm hover:text-blue-500">Check it</h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </>

    );
}
export default signup;