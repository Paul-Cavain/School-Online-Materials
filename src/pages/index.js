import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Tabs from "components/tabs";

export default function Home(){
    return (
        <>
            <Head>
                <title>Zephanious | Home</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            <div className="md:pt-44 pt-36 px-4 md:px-0 bg-gray-100">

                {/* intro landing page */}
                <div className="flex flex-col md:flex-row md:px-20 md:space-x-20">
                    <div className="md:w-1/2">
                        <Image className="rounded-sm opacity-1" src={"/pexel.jpg"} width={700} height={100} alt="landing image" />
                    </div>
                    <div className="md:w-1/2 md:pt-14 pt-5">
                        <div className="w-full text-center md:text-start font-light">
                            <h3 className="md:text-4xl text-3xl">Develop your</h3>
                        </div>
                        <div className="text-center md:text-start font-light">
                            <h3 className="md:text-4xl text-3xl">Mind and Skills</h3>
                        </div>
                        <div className="md:mt-8 mt-2 font-light">
                            <p className="">Want To Get Professional Knowledge In Fast Developing IT Sphere? If You Are Just An Amature Who Is Willing To Get Professional Knowledge Check What We have Prepared for you</p>
                        </div>

                        <div className="flex md:flex-row md:mt-10 mt-6 space-x-10 md:space-x-12 md:pb-0 pb-6 justify-center md:justify-start">
                            <Link href={"./contact"}>
                            <div>
                                <button className="bg-black w-24 h-10 text-white rounded-md">Contact us</button>
                            </div>
                            </Link>

                            <Link href={"./courses"}>
                            <div>
                                <button className="bg-black w-28 h-10 text-white rounded-md">Our courses</button>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* cards in landing page */}
                <div className="flex flex-col md:flex-row justify-center md:mx-20 px-4  md:mt-32 mt-10 md:space-x-20 md:space-y-0 space-y-4 md:py-0 py-6 bg-white shadow-lg rounded-lg md:rounded-md items-center md:h-56 transition duration-300 transform hover:shadow-blue-500 hover:shadow-md ">
                    <div className="md:w-full ">
                        <div className="text-start md:text-xl text-2xl font-light">
                            <h3 className="">Industry Experience</h3>
                        </div>
                        <div className="md:mt-3 mt-2 font-light">
                            <p>Zephanious involves the best industry leaders who share their experience knowledge and tips with our students</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-6xl font-extralight text-indigo-600">|</h3>
                    </div>
                    <div className="md:w-full">
                        <div className="text-start md:text-xl text-2xl font-light">
                            <h3>Our Staff</h3>
                        </div>
                        <div className="md:mt-3 mt-2 font-light">
                            <p>our staff consist of Professional experienced teachers who love what they do and use creative approach  in teaching</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-6xl font-extralight text-indigo-600">|</h3>
                    </div>
                    <div className="md:w-full font-light">
                        <div className="text-start md:text-xl text-2xl">
                            <h3>Our Contents</h3>
                        </div>
                        <div className="md:mt-3 mt-2">
                            <p>Zephanious takes part in many IT educational contest. We won the national IT progress Awards 3 times </p>
                        </div>
                    </div>
                </div>

              

                {/* our courses */}
            
                <div className="md:mt-24 mt-14 font-light">
                    <div className="text-center">
                        <h3 className="text-3xl">Our courses</h3>
                    </div>
                    <div className="mt-10">
                        <Tabs />
                    </div>
                    
                </div>

                
            </div>
        </>
    );
};