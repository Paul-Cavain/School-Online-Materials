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
                <div className="flex flex-col md:flex-row md:px-20 md:space-x-20 font-extralight">
                    <div className="md:w-1/2">
                        <Image className="rounded-sm opacity-1" src={"/pexel.jpg"} width={700} height={100} alt="landing image" />
                    </div>
                    <div className="md:w-1/2 md:pt-14 pt-5">
                        <div className="w-full text-center md:text-start">
                            <h3 className="md:text-4xl text-3xl">Develop your</h3>
                        </div>
                        <div className="text-center md:text-start">
                            <h3 className="md:text-4xl text-3xl">Mind and Skills</h3>
                        </div>
                        <div className="md:mt-8 mt-2">
                            <p className="">Want To Get Professional Knowledge In Fast Developing IT Sphere? If You Are Just An Amataur Who Is Willing To Get Professional Knowledge Check What We Prepared for you</p>
                        </div>

                        <div className="flex flex-col md:flex-row md:space-x-7 md:mt-10 mt-6 space-y-4 md:space-y-0 md:pb-0 pb-6">
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
                <div className="flex flex-col md:flex-row justify-center md:mx-20 px-4  md:mt-32 mt-10 md:space-x-20 md:space-y-0 space-y-4 md:py-0 py-6 bg-white shadow-lg rounded-lg md:rounded-none items-center md:h-56 font-extralight">
                    <div className="md:w-full">
                        <div className="text-start md:text-xl text-2xl">
                            <h3 className="">Head One</h3>
                        </div>
                        <div className="md:mt-0 mt-2">
                            <p>Zephanious involves the best industry leaders who share their experience knowledge and tips with our students</p>
                        </div>
                    </div>
                    <div className="md:w-full">
                        <div className="text-start md:text-xl text-2xl">
                            <h3>Head two</h3>
                        </div>
                        <div className="md:mt-0 mt-2">
                            <p>our staff consist of Professional experienced teachers who love what they do and use creative approach  in teaching</p>
                        </div>
                    </div>
                    <div className="md:w-full">
                        <div className="text-start md:text-xl text-2xl">
                            <h3>Head Three</h3>
                        </div>
                        <div className="md:mt-0 mt-2">
                            <p>Zephanious takes part in many IT educational contest. We won the national IT progress Awards 3 times </p>
                        </div>
                    </div>
                </div>

              

                {/* our courses */}
            
                <div className="md:mt-24 mt-14 font-extralight">
                    <div className="text-center">
                        <h3 className="text-3xl">Our courses</h3>
                    </div>
                    <div className="mt-10 mx-20">
                        <Tabs />
                    </div>
                    
                </div>

                {/* special program */}
                <div className="md:mt-28 mt-14 pb-32 font-extralight">
                    <div className="text-center">
                        <h3 className="text-3xl">Special Programs</h3>
                    </div>
                    <div>
                        <div className="flex flex-col md:flex-row md:space-y-0 space-y-6 justify-center md:space-x-12 md:mt-14 mt-16 md:px-0 px-10">
                            <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                <div className="px-2">
                                    <Image src={"/pexels.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
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
                                    <Image src={"/pexels.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
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
                                    <Image src={"/pexels.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
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
                                    <Image src={"/pexels.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                </div>
                                <div className="mt-4 px-2">
                                    <h3 className="uppercase">Mathematics</h3>
                                </div>
                                <div className="px-2">
                                    <h3>PHYSICS FOR ALL</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};