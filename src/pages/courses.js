import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Tabs from "components/tabs";
import Head from "next/head";
import Image from "next/image";
import { Person, CurrencyExchange, Messenger, TelephoneFill, PersonBadgeFill, } from "react-bootstrap-icons";


const talk = () => {
    return(
        <>
            <Head>
                <title>Zephanious | Our Courses</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            {/* //navigation bar */}
            <div>
                <Navbar />
            </div>

            {/* body contents */}
            <div className="pt-32  bg-gray-100">
                <div className="text-center font-light">
                    <h3 className="text-3xl">Our Courses</h3>
                </div>


                {/* dynamic tab */}
                <div className="mt-10 mx-20">
                    <Tabs />
                </div>

                {/* our courses */}
                

                {/* free trial */}
                <div className="mt-20 md:mt-40 flex flex-col md:flex-row md:px-20 md:pb-32 md:space-x-20 mx-4 md:mx-0">

                    {/* about form */}
                    <div className="bg-indigo-600 md:w-1/2 pb-3 rounded-md">
                        <div>
                            <h3 className="text-center text-xl pt-4 text-white font-extralight">Request an Estimate</h3>
                        </div>
                        <div className="mt-3 px-4">
                            <input type={"text"} name="username" placeholder="Your Name" className="rounded-md h-10 w-full focus:outline-none px-2" />
                        </div>
                        <div className="mt-5 px-4">
                            <input type={"text"} name="email" placeholder="Your Email" className="rounded-md h-10 w-full focus:outline-none px-2"  />
                        </div>
                        <div className="mt-5 px-4">
                            <textarea type={"text"} name="username" placeholder="Message" className="rounded-md h-20 w-full focus:outline-none px-2"  />
                        </div>
                        <div className="text-end px-4">
                            <button type="submit" className="h-10 w-20 bg-black text-white mt-3 ml-4 rounded-md">Send</button>
                        </div>
                    </div>

                    <div className="mt-14 md:mt-10 pb-20 md:pb-0">
                        <div className="font-light">
                            <h3 className="text-3xl">Get a Free Trial Session!</h3>
                        </div>
                    
                        <div className="mt-4 md:mt-6 font-light">
                            <h3 className="uppercase">Register now to see if our online courses are right for you without any obligation on your part!</h3>
                        </div>
                        <div className="flex flex-row space-x-2 md:space-x-10 mt-8 mx-4 md:mx-0 justify-center">
                            <div className="flex flex-col border-2 border-indigo-600 w-20 md:w-24 rounded-md">
                                <div className="px-3 md:px-5">
                                    <h3 className="text-5xl">00</h3>
                                </div>
                                <div className="px-5 md:px-7">
                                    <h3 className="uppercase">Days</h3>
                                </div>
                            </div>

                            <div className="flex flex-col border-2 border-indigo-600 w-20 md:w-24 rounded-md">
                                <div className="px-3 md:px-5">
                                    <h3 className="text-5xl">00</h3>
                                </div>
                                <div className="px-3 md:px-5">
                                    <h3 className="uppercase">hours</h3>
                                </div>
                            </div>

                            <div className="flex flex-col border-2 border-indigo-600 w-20 md:w-24 rounded-md">
                                <div className="px-3 md:px-5">
                                    <h3 className="text-5xl">00</h3>
                                </div>
                                <div className="px-1 md:px-3">
                                    <h3 className="uppercase">minutes</h3>
                                </div>
                            </div>

                            <div className="flex flex-col border-2 border-indigo-600 w-20 md:w-24 rounded-md">
                                <div className="px-3 md:px-5">
                                    <h3 className="text-5xl">00</h3>
                                </div>
                                <div className="px-1 md:px-3">
                                    <h3 className="uppercase">seconds</h3>
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

export default talk;