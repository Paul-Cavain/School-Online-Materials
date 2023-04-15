import Navbar from "components/Navbar";
import Head from "next/head";
import Image from "next/image";
import { Person, CurrencyExchange, Messenger, TelephoneFill, PersonBadgeFill, } from "react-bootstrap-icons";


const talk = () => {
    return(
        <>
            <Head>
                <title>Satify | Our Courses</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>
            <div className="pt-32 font-extralight bg-gray-100">
                <div className="text-center">
                    <h3 className="text-3xl">Our Courses</h3>
                </div>


                {/* dynamic tab */}
                <div className="mt-10">
                    <ol className="flex flex-col-2 md:flex-row justify-start md:mx-20 bg-gray-200 font-semibold h-10">
                        <li>
                            <button className="w-32 h-10 bg-white">All Courses</button>
                        </li>
                        <li>
                            <button className="w-32 h-10">Physics</button>
                        </li>
                        <li>
                            <button className="w-32 h-10">Mathematics</button>
                        </li>
                        <li>
                            <button className="w-32 h-10">Biology</button>
                        </li>
                    </ol>
                </div>

                {/* our courses */}
                <div className="flex flex-col md:flex-row justify-center md:space-x-14 md:mt-10">
                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                        <div className="px-2">
                            <Image src={"/pexels1.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                        </div>
                        <div className="mt-4 px-2">
                            <h3>PHYSICS</h3>
                        </div>
                        <div className=" px-2">
                            <h3>PHYSICS FOR ALL</h3>
                        </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                        <div className="px-2">
                            <Image src={"/pexels4.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                        </div>
                        <div className="mt-4 px-2">
                            <h3 className="uppercase">Mathematics</h3>
                        </div>
                        <div className="px-2">
                            <h3>PHYSICS FOR ALL</h3>
                        </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                        <div className="px-2">
                            <Image src={"/pexels3.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                        </div>
                        <div className="mt-4 px-2">
                            <h3 className="uppercase">Mathematics</h3>
                        </div>
                        <div className="px-2">
                            <h3>PHYSICS FOR ALL</h3>
                        </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                        <div className="px-2">
                            <Image src={"/pexels4.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                        </div>
                        <div className="mt-4 px-2">
                            <h3 className="uppercase">Mathematics</h3>
                        </div>
                        <div className="px-2">
                            <h3>PHYSICS FOR ALL</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:space-x-14 md:mt-10">
                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                        <div className="px-2">
                            <Image src={"/pexels4.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                        </div>
                        <div className="mt-4 px-2">
                            <h3 className="uppercase">Mathematics</h3>
                        </div>
                        <div className="px-2">
                            <h3>PHYSICS FOR ALL</h3>
                        </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                        <div className="px-2">
                            <Image src={"/pexels2.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                        </div>
                        <div className="mt-4 px-2">
                            <h3 className="uppercase">Mathematics</h3>
                        </div>
                        <div className="px-2">
                            <h3>PHYSICS FOR ALL</h3>
                        </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                        <div className="px-2">
                            <Image src={"/pexels1.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                        </div>
                        <div className="mt-4 px-2">
                            <h3 className="uppercase">Mathematics</h3>
                        </div>
                        <div className="px-2">
                            <h3>PHYSICS FOR ALL</h3>
                        </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                        <div className="px-2">
                            <Image src={"/pexels3.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                        </div>
                        <div className="mt-4 px-2">
                            <h3 className="uppercase">Mathematics</h3>
                        </div>
                        <div className="px-2">
                            <h3>PHYSICS FOR ALL</h3>
                        </div>
                    </div>
                </div>

                {/* free trial */}
                <div className="mt-40 flex flex-col md:flex-row md:px-20 md:pb-32 space-x-20 font-extralight">

                    {/* about form */}
                    <div className="bg-blue-500 w-1/2 pb-3 rounded-md">
                        <div>
                            <h3 className="text-center text-xl pt-4 text-white">Request an Estimate</h3>
                        </div>
                        <div className="mt-3 px-4">
                            <input type={"text"} name="username" placeholder="Your Name" className="rounded-md h-10 w-full" />
                        </div>
                        <div className="mt-5 px-4">
                            <input type={"text"} name="email" placeholder="Your Email" className="rounded-md h-10 w-full"  />
                        </div>
                        <div className="mt-5 px-4">
                            <textarea type={"text"} name="username" placeholder="Message" className="rounded-md h-20 w-full"  />
                        </div>
                        <div className="text-end px-4">
                            <button type="submit" className="h-10 w-20 bg-black text-white mt-3 ml-4 rounded-md">Send</button>
                        </div>
                    </div>

                    <div className="md:mt-10">
                        <div>
                            <h3 className="text-3xl">Get a Free Trial Session!</h3>
                        </div>
                    
                        <div className="md:mt-6">
                            <h3 className="uppercase">Register now to see if our online courses are right for you without any obligation on your part!</h3>
                        </div>
                        <div className="flex flex-row space-x-10 mt-8">
                            <div className="flex flex-col border-2 border-blue-500 w-24 rounded-md">
                                <div className="px-5">
                                    <h3 className="text-5xl">00</h3>
                                </div>
                                <div className="px-7">
                                    <h3 className="uppercase">Days</h3>
                                </div>
                            </div>

                            <div className="flex flex-col border-2 border-blue-500 w-24 rounded-md">
                                <div className="px-5">
                                    <h3 className="text-5xl">00</h3>
                                </div>
                                <div className="px-5">
                                    <h3 className="uppercase">hours</h3>
                                </div>
                            </div>

                            <div className="flex flex-col border-2 border-blue-500 w-24 rounded-md">
                                <div className="px-5">
                                    <h3 className="text-5xl">00</h3>
                                </div>
                                <div className="px-3">
                                    <h3 className="uppercase">minutes</h3>
                                </div>
                            </div>

                            <div className="flex flex-col border-2 border-blue-500 w-24 rounded-md">
                                <div className="px-5">
                                    <h3 className="text-5xl">00</h3>
                                </div>
                                <div className="px-3">
                                    <h3 className="uppercase">seconds</h3>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}

export default talk;