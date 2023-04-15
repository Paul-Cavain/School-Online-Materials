import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Person, CurrencyExchange, Messenger, People, Alarm, CalendarEvent, Chat, TelephoneFill, PersonBadgeFill, Facebook, Twitter, Linkedin, Youtube, Google,  } from "react-bootstrap-icons";

const about = ()=>{
    return(
        <div>
            <Head>
                <title>Zephanious | about</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            <div className="md:pt-44 bg-gray-100">
                <div className="md:ml-20 text-3xl font-extralight">
                    <h1>Who We Are</h1>
                </div>

                {/* who we are */}
                <div className="mt-10 flex flex-col md:flex-row md:px-20 space-x-10 font-extralight">
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

                </div>

                {/* percentages  */}
                <div className="flex flex-col md:flex-row mt-32 justify-center space-x-32 bg-white py-8 font-extralight">
                    {/* percent one */}
                    <div className="flex flex-col ">
                        <div>
                            <h3 className="text-6xl text-blue-500">100%</h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="text-xl px-2">SUCCESS RATE</h3>
                        </div>
                    </div>

                    {/* percent two */}
                    <div className="flex flex-col">
                        <div>
                            <h3 className="text-6xl text-blue-500 px-10">12+</h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="text-xl">YEARS OF SERVICES</h3>
                        </div>
                    </div>

                    {/* percent three */}
                    <div className="flex flex-col">
                        <div>
                            <h3 className="text-6xl text-blue-500">135+</h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="text-xl px-6">STUDENTS</h3>
                        </div>
                    </div>

                    {/* percent four */}
                    <div className="flex flex-col">
                        <div>
                            <h3 className="text-6xl text-blue-500 px-1">500+</h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="text-xl text-center">OUR COURSES</h3>
                        </div>
                    </div>
                </div>

                {/* few words about us */}
                <div className="mt-20 font-extralight">
                    <div>
                        <h3 className="text-center text-3xl font-extralight">A Few Words About Us</h3>
                    </div>
                    <div className="mt-6">
                        <p className="text-center">Every Member of Zephanious team believe strongly in the empowering of knowledge</p>
                    </div>

                    {/* first card */}
                    <div className="flex flex-col md:flex-row md:mx-20 space-x-4 mt-14">
                        <div className="bg-white rounded-md py-6 shadow-md border-2 border-blue-500">
                            <div className="px-32">
                                <People className="text-2xl text-blue-500" />
                            </div>
                            <div className="text-center mt-2">
                                <h3 className="uppercase">Professional staff</h3>
                            </div>
                            <div className="px-4 mt-3">
                                <p>We enjoy our work and working with the various skillsets and personalities within the team</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-md py-6 shadow-md border-2 border-blue-500">
                            <div className="px-32">
                                <Alarm className="text-2xl text-blue-500" />
                            </div>
                            <div className="text-center mt-2">
                                <h3 className="uppercase">lifetime access</h3>
                            </div>
                            <div className="px-4 mt-3">
                                <p>We appreciate our student desire for knowledge and provide litime access to education data </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-md py-6 shadow-md border-2 border-blue-500">
                            <div className="px-32">
                                <CalendarEvent className="text-2xl text-blue-500" />
                            </div>
                            <div className="text-center mt-2">
                                <h3 className="uppercase">clear timetable</h3>
                            </div>
                            <div className="px-4 mt-3">
                                <p>You receive a personal schedule according to your selected course by mail</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-md py-6 shadow-md border-2 border-blue-500">
                            <div className="px-32">
                                <Chat className="text-2xl text-blue-500" />
                            </div>
                            <div className="text-center mt-2">
                                <h3 className="uppercase">students community</h3>
                            </div>
                            <div className="px-4 mt-3">
                                <p>Student community is a place where our student can communicate with each other</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* We envision */}
                <div className="mt-32 bg-white py-20 font-extralight">
                    <div className="px-20">
                        <h3 className="text-center text-2xl font-extralight">We Envision A World Where Anyone, Anywhere Can Transform Their Life By Accessing The World's Best Learning Experience</h3>
                    </div>

                    <Link href="/contact">
                        <div className="text-center mt-10">
                            <button type="button" className="w-32 h-10 rounded-md uppercase bg-black text-white">Contact us</button>
                        </div>
                    </Link>
                </div>

                {/* specializations */}
                <div className="flex flex-col md:flex-row justify-center md:mx-20 space-x-12 mt-20 font-extralight">
                    <div className="w-1/2 mt-3">
                        <div>
                            <h3 className="text-3xl font-extralight">Specializations</h3>
                        </div>
                        <div className="mt-4">
                            <h3 className="uppercase text-md">Our programmes offer unconventional, but highly effective options to the traditional challenges.</h3>
                        </div>
                        <div className="mt-4">
                            <p>Zephanious's vision and guiding principle is to empower people trhough high quality knowledge and workplace skills training in different fields. As part of that vision, We are committed to being a catalyst for social change and we believe that the power of education can change people's lives for the better.</p>
                        </div>

                        <Link href="/courses">
                        <div className="mt-4">
                            <button type="button" className="text-white w-32 h-10 bg-black rounded-md uppercase">our courses</button>
                        </div>
                        </Link>
                    </div>

                    <div className="w-1/2 md:px-10">
                        <Image src={"/pexel.jpg"} width={500} height={100} alt="program specifications" />
                    </div>

                </div>

                {/* meet or teachers */}
                <div className="mt-28 font-extralight">
                    <div>
                        <h3 className="text-3xl text-center">Meet Our Teacher</h3>
                    </div>

                    {/* cards */}
                    
                    <div className="flex flex-col md:flex-row mx-20 space-x-4 mt-10">
                        <div className="flex flex-col bg-white px-2 py-2 rounded-sm shadow-md">
                            <div>
                                <Image src={"/pexels.jpg"} width={300} height={100} alt="head of technology" className="rounded-md" />
                            </div>
                            <div className="mt-3">
                                <h3 className="uppercase">Zephania Andrew</h3>
                            </div>
                            <div className="mt-1">
                                <h3>Zephanious CEO</h3>
                            </div>
                            <div className="mt-3">
                                <p>His passion is technology and web development. He is always looking for new approaches in online education</p>
                            </div>
                            <div className="flex flex-row text-lg mt-4 space-x-3">
                                <div>
                                    <Facebook className="text-blue-500"/>
                                </div>
                                <div>
                                    <Twitter className="text-blue-500"/>
                                </div>
                                <div>
                                    <Youtube className="text-blue-500"/>
                                </div>
                                <div>
                                    <Linkedin className="text-blue-500"/>
                                </div>
                                <div>
                                    <Google className="text-blue-500"/>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white px-2 py-2 rounded-sm shadow-md">
                            <div>
                                <Image src={"/pexels.jpg"} width={300} height={100} alt="head of technology" className="rounded-md" />
                            </div>
                            <div className="mt-3">
                                <h3 className="uppercase">Zephania Andrew</h3>
                            </div>
                            <div className="mt-1">
                                <h3>Zephanious CEO</h3>
                            </div>
                            <div className="mt-3">
                                <p>His passion is technology and web development. He is always looking for new approaches in online education</p>
                            </div>
                            <div className="flex flex-row text-lg mt-4 space-x-3">
                                <div>
                                    <Facebook className="text-blue-500"/>
                                </div>
                                <div>
                                    <Twitter className="text-blue-500"/>
                                </div>
                                <div>
                                    <Youtube className="text-blue-500"/>
                                </div>
                                <div>
                                    <Linkedin className="text-blue-500"/>
                                </div>
                                <div>
                                    <Google className="text-blue-500"/>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white px-2 py-2 rounded-sm shadow-md">
                            <div>
                                <Image src={"/pexels.jpg"} width={300} height={100} alt="head of technology" className="rounded-md" />
                            </div>
                            <div className="mt-3">
                                <h3 className="uppercase">Zephania Andrew</h3>
                            </div>
                            <div className="mt-1">
                                <h3>Zephanious CEO</h3>
                            </div>
                            <div className="mt-3">
                                <p>His passion is technology and web development. He is always looking for new approaches in online education</p>
                            </div>
                            <div className="flex flex-row text-lg mt-4 space-x-3">
                                <div>
                                    <Facebook className="text-blue-500"/>
                                </div>
                                <div>
                                    <Twitter className="text-blue-500"/>
                                </div>
                                <div>
                                    <Youtube className="text-blue-500"/>
                                </div>
                                <div>
                                    <Linkedin className="text-blue-500"/>
                                </div>
                                <div>
                                    <Google className="text-blue-500"/>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col bg-white px-2 py-2 rounded-sm shadow-md">
                            <div>
                                <Image src={"/pexels.jpg"} width={300} height={100} alt="head of technology" className="rounded-md" />
                            </div>
                            <div className="mt-3">
                                <h3 className="uppercase">Zephania Andrew</h3>
                            </div>
                            <div className="mt-1">
                                <h3>Zephanious CEO</h3>
                            </div>
                            <div className="mt-3">
                                <p>His passion is technology and web development. He is always looking for new approaches in online education</p>
                            </div>
                            <div className="flex flex-row text-lg mt-4 space-x-3">
                                <div>
                                    <Facebook className="text-blue-500"/>
                                </div>
                                <div>
                                    <Twitter className="text-blue-500"/>
                                </div>
                                <div>
                                    <Youtube className="text-blue-500"/>
                                </div>
                                <div>
                                    <Linkedin className="text-blue-500"/>
                                </div>
                                <div>
                                    <Google className="text-blue-500"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonies */}
                <div className="mt-32 pb-32 font-extralight">
                    <div>
                        <h3 className="text-3xl text-center">Testimonials</h3>
                    </div>
                    <div className="flex flex-col md:flex-row space-x-20 md:mx-20 mt-10">
                        <div className="flex flex-row space-x-5 px-4 py-8 bg-white rounded-md shadow-md md:pb-16">
                            <div className="relative overflow-hidden rounded-full ring-4 w-52 mt-6">
                                <Image objectFit="cover" src={"/pexel.jpg"} layout="fill" priority alt="first testmony" className="" />
                            </div>

                            <div>
                                <div>
                                    <p className="">Zephanious helped me to advance my professional learning. Zephanious provides a great avenue for self-growth</p>
                                </div>
                                <div className="mt-3">
                                    <h3 className="uppercase">paul cavain</h3>
                                </div>
                                <div>
                                    <h3 className="text-blue-500">Form Six Student</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row space-x-5 px-4 py-8 bg-white rounded-md shadow-md md:pb-16">
                            <div className="relative overflow-hidden rounded-full ring-4 w-52 mt-6">
                                <Image objectFit="cover" src={"/pexel.jpg"} layout="fill" priority alt="first testmony" className="" />
                            </div>

                            <div>
                                <div>
                                    <p className="">Zephanious helped me to advance my professional learning. Zephanious provides a great avenue for self-growth</p>
                                </div>
                                <div className="mt-3">
                                    <h3 className="uppercase">Seleman Manimba</h3>
                                </div>
                                <div>
                                    <h3 className="text-blue-500">Form Four Student</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row space-x-20 md:mx-20 mt-10">
                        <div className="flex flex-row space-x-5 px-4 py-8 bg-white rounded-md shadow-md md:pb-16">
                            <div className="relative overflow-hidden rounded-full ring-4 w-52 mt-6">
                                <Image objectFit="cover" src={"/pexel.jpg"} layout="fill" priority alt="first testmony" className="" />
                            </div>

                            <div>
                                <div>
                                    <p className="">Zephanious helped me to advance my professional learning. Zephanious provides a great avenue for self-growth</p>
                                </div>
                                <div className="mt-3">
                                    <h3 className="uppercase">Epamoo john</h3>
                                </div>
                                <div>
                                    <h3 className="text-blue-500">Form Five Student</h3>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row space-x-5 px-4 py-8 bg-white rounded-md shadow-md md:pb-16">
                            <div className="relative overflow-hidden rounded-full ring-4 w-52 mt-6">
                                <Image objectFit="cover" src={"/pexel.jpg"} layout="fill" priority alt="first testmony" className="" />
                            </div>

                            <div>
                                <div>
                                    <p className="">Zephanious helped me to advance my professional learning. Zephanious provides a great avenue for self-growth</p>
                                </div>
                                <div className="mt-3">
                                    <h3 className="uppercase">leyla rashid</h3>
                                </div>
                                <div>
                                    <h3 className="text-blue-500">Form Six Student</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    );
}
export default about;