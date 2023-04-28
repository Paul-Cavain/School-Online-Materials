import Navbar from "components/Navbar";
import Head from "next/head";
import { Facebook, Instagram, Linkedin, TelephoneFill, Twitter } from "react-bootstrap-icons";
import { AiOutlineCompass, AiOutlineMail } from "react-icons/ai";

const contact = ()=>{
    return(
        <>
            <div>
                <Head>
                    <title>Zephanious | Contact</title>
                    <meta name="keywords" content="LearnNextJs" />
                </Head>
                <section className="bg-gray-100 pt-32">
                    <div className="text-center">
                        <h3 className="text-3xl font-light">Contact Us</h3>
                    </div>
                    <div className="text-center mt-2 font-light">
                        <p>Any question or remark? Just write us a message</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-20 mt-14 pb-32">

                        {/* contact contents */}
                        <div className="bg-white px-8 md:px-14 py-8 rounded-l-md shadow-lg shadow-t-2xl">
                            <div className="text-2xl">
                                <h3>Contact Information</h3>
                            </div>
                            <div className="mt-2 font-light">
                                <p>Fill up the form and our Team will get back to you within 24 hours.</p>
                            </div>
                            <div className="flex flex-row space-x-4 mt-12">
                                <div>
                                    <TelephoneFill className="text-2xl text-indigo-600" />
                                </div>
                                <div className="text-black font-light">
                                    <h3>+255755291920</h3>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-4 mt-4">
                                <div>
                                    <AiOutlineMail className="text-3xl text-indigo-600" />
                                </div>
                                <div className="text-black font-light">
                                    <h3>paulcavain02@gmail.com</h3>
                                </div>
                            </div>
                            <div className="flex flex-row space-x-4 mt-4">
                                <div>
                                    <AiOutlineCompass className="text-3xl text-indigo-600" />
                                </div>
                                <div className="text-black font-light">
                                    <h3>Tabora Municipal- Tanzania</h3>
                                </div>
                            </div>

                            <div className="space-x-4 flex flex-row mt-28">
                                <div>
                                    <Twitter className="text-indigo-600 text-lg hover:text-xl hover:text-black cursor-pointer" />
                                </div>
                                <div>
                                    <Linkedin className="text-indigo-600 text-lg hover:text-xl hover:text-black cursor-pointer" />
                                </div>
                                <div>
                                    <Instagram className="text-indigo-600 text-lg hover:text-xl hover:text-black cursor-pointer" />
                                </div>
                                <div>
                                    <Facebook className="text-indigo-600 text-lg hover:text-xl hover:text-black cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        {/* contact form */}
                        <div className="bg-indigo-600 md:w-3/4 px-8 md:px-12 py-8 rounded-r-md">

                            <div className="flex flex-col">
                                <div className="flex flex-col md:flex-row md:space-x-4">
                                    <div className="w-full">
                                        <label className="text-white">First Name</label>
                                        <input type={"text"} name="fname" placeholder="Your First Name" className="w-full h-10 focus:outline-none px-2 rounded-md" />
                                    </div>
                                    <div className="w-full">
                                        <label className="text-white">Last Name</label>
                                        <input type={"text"} name="lname" placeholder="Your Last Name" className="w-full h-10 focus:outline-none px-2 rounded-md" />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
                                    <div className="w-full">
                                        <label className="text-white">E-Mail</label>
                                        <input type={"text"} name="mail" placeholder="Enter Your mail" className="w-full h-10 focus:outline-none px-2 rounded-md" />
                                    </div>
                                    <div className="w-full">
                                        <label className="text-white">Phone number</label>
                                        <input type={"text"} name="phone" placeholder="Your Phone number" className="w-full h-10 focus:outline-none px-2 rounded-md" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-white">
                                <h3>What does your question based?</h3>
                            </div>
                            <div className="flex flex-row md:space-x-8 mt-2 text-gray-700">
                                <div>
                                    <input type={"radio"} name="Physics" /><span className="ml-1">Physics</span>
                                </div>
                                <div>
                                    <input type={"radio"} name="Biology" /><span className="ml-1">Biology</span>
                                </div>
                                <div>
                                    <input type={"radio"} name="Chemistry" /><span className="ml-1">Chemistry</span>
                                </div>
                                <div>
                                    <input type={"radio"} name="Other" /><span className="ml-1">Other</span>
                                </div>
                            </div>

                            <div className="flex flex-col mt-4">
                                <label className="text-white">Message</label>
                                <textarea name="message" placeholder="Write your message here!!" className="w-full h-20 rounded-md focus:outline-none px-2" />
                            </div>
                            <div className="text-end mt-4">
                                <button type="submit" name="submit" className="w-32 h-10 bg-black text-white rounded-md" onClick={() => alert("Message send successfull")}>Send Message</button>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default contact;