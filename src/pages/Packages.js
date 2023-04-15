import Head from "next/head";
import Link from "next/link";

const Packages = () => {
    return (
        <>
            <Head>
                <title>Zephanious | Packages</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            <div className="pt-32 bg-gray-100 pb-32">
                <div className="md:ml-20 text-3xl font-extralight">
                    <h3>Our Packages</h3>
                </div>
                <div className="md:ml-20 text-xl font-extralight">
                    <h2>Select the package of your favourite choice</h2>
                </div>

                {/* cards */}

                
                <div className="flex flex-col md:flex-row justify-center space-x-10 md:mx-20 mt-12">

                    {/* cardOne */}
                    <div className="bg-white md:px-4 pt-5 pb-10 rounded-md w-full text-center shadow-lg transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                        <div className="text-xl uppercase">
                            <h3>Professional</h3>
                        </div>
                        <div className="mt-8 text-3xl font-extralight">
                            <h3>3 Months | Tsh 3,000</h3>
                        </div>
                        <div className="mt-8 text-start px-10">
                            <ol>
                                <li>
                                    <input type={"checkbox"} className="" checked="true" />Free Download
                                </li>
                                <li>
                                    <input type={"checkbox"} className="mt-4" checked="true" />Online Reading
                                </li>
                                <li>
                                    <input type={"checkbox"} className="mt-4" checked="true" />Questions and Answers
                                </li>
                            
                            </ol>
                        </div>
                        <div className="mt-28">
                            <Link href={"./login"}>
                                <button className="bg-black text-white h-10 w-20 rounded-md">Get now</button>
                            </Link>
                        </div>
                    </div>

                    {/* cardTwo */}
                    <div className="bg-white md:px-4 pt-5 pb-10 rounded-md w-full text-center shadow-lg transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                        <div className="text-xl uppercase">
                            <h3>Premium</h3>
                        </div>
                        <div className="mt-8 text-3xl font-extralight">
                            <h3>6 Months | Tsh 5,000</h3>
                        </div>
                        <div className="mt-8 text-start px-10">
                            <ol>
                                <li>
                                    <input type={"checkbox"} className="" checked="true" />Free Download
                                </li>
                                <li>
                                    <input type={"checkbox"} className="mt-4" checked="true" />Online Reading
                                </li>
                                <li>
                                    <input type={"checkbox"} className="mt-4" checked="true" />Solved Questions and Answers
                                </li>
                            
                            </ol>
                        </div>
                        
                        <div className="mt-28">
                            <Link href={"./login"}>
                                <button className="bg-black text-white h-10 w-20 rounded-md">Get now</button>
                            </Link>
                        </div>
                        
                    </div>

                    {/* cardThree */}
                    <div className="bg-white md:px-4 pt-5 pb-10 rounded-md w-full text-center shadow-lg transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                        <div className="text-xl uppercase">
                            <h3>Diamond</h3>
                        </div>
                        <div className="mt-8 text-3xl font-extralight">
                            <h3>1 Year | Tsh 10,000</h3>
                        </div>
                        <div className="mt-8 text-start px-10">
                            <ol>
                                <li>
                                    <input type={"checkbox"} className="" checked="true" />Free Download
                                </li>
                                <li>
                                    <input type={"checkbox"} className="mt-4" checked="true" />Online Reading
                                </li>
                                <li>
                                    <input type={"checkbox"} className="mt-4" checked="true" />Solved Questions and Answers
                                </li>
                                <li>
                                    <input type={"checkbox"} className="mt-4" checked="true" />Challenged Questions
                                </li>
                                <li>
                                    <input type={"checkbox"} className="mt-4" checked="true" />Free Monthly Tests
                                </li>
                            
                            </ol>
                        </div>
                        <div className="mt-12">
                            <Link href={"./login"}>
                                <button className="bg-black text-white h-10 w-20 rounded-md">Get now</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>


        </>
    );
}
export default Packages;