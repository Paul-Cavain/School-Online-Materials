import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "components/Sidebar";
import Image from "next/image";
import { MenuButton, Messenger, Person, ThreeDots } from "react-bootstrap-icons";
import { AiFillBell, AiOutlineSecurityScan, AiOutlineSync } from "react-icons/ai";


const HomeAdmin = () => {
    const [users, setUsers] = useState({});
    useEffect(() =>{
        getUsers();
    }, []);

    function getUsers(){
            axios.get('http://localhost:80/api/user').then(function(response){
            console.log(response.data);
            setUsers(response.data);
        });
    }

    
    return (
        <>
            <Head>
                <title>Zephanious | Admin | Home</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            {/* admin navbar */}
            <div className="md:px-0 flex flex-row justify-start">
                <div>
                    <Sidebar />
                </div>

                <div className="flex-1 border-1 bg-gray-200">

                    {/* navbar */}
                    <div className="">
                        <nav className="flex flex-row justify-between bg-white py-5">
                            <dvi className="text-3xl px-4">
                                <ul>
                                    <li>Dashboard</li>
                                </ul>
                            </dvi>
                            <div className="mx-10">
                                <ul className="flex flex-row space-x-3">
                                    <li>
                                        <MenuButton className="text-lg"/>
                                    </li>
                                    <li>
                                        <Messenger className="text-lg"/>
                                    </li>
                                    <li>
                                        <AiFillBell className="text-xl"/>
                                    </li>
                                    <li>
                                        <Person className="text-xl"/>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    
                    {/* bodycontents */}
                    <div className="px-10">
                        <div>

                            {/* first row cards */}
                            <div className="flex flex-row space-x-10 mt-6">

                                {/* left first row card */}
                                <div className="bg-blue-400 w-1/2 rounded-md h-auto">
                                    <div className="flex flex-row justify-between mx-4 pt-3">
                                        <div className="w-full">
                                            <h3 className="text-xl text-white">Registered Users</h3>

                                            {/* Total registere Students */}
                                            <div className="flex flex-row justify-between mt-10">
                                                <div className="text-xl">
                                                    <h3>Total users Registered</h3>
                                                </div>
                                                <div className="text-xl">
                                                    <h3>209</h3>
                                                </div> 
                                            </div>

                                            {/* o'level and a'level users */}
                                            <div className="flex flex-col mt-4 space-y-1">
                                                <div className="flex flex-row w-full justify-between">
                                                    <div>
                                                        <h3 className="text-lg">O'Level Student Registered</h3>
                                                    </div>
                                                    <div>
                                                        <h3>103</h3>
                                                    </div>
                                                </div>

                                                <div className="flex flex-row w-full justify-between">
                                                    <div>
                                                        <h3 className="text-lg">A'Level Student Registered</h3>
                                                    </div>
                                                        <div>
                                                        <h3>076</h3>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="flex flex-row space-x-2 text-xl text-white">
                                            <AiOutlineSync />
                                            <ThreeDots />
                                        </div>
                                    </div>
                                </div>

                                {/* right first row card */}
                                <div className="flex flex-row space-x-10 w-1/2">

                                    {/* rightcard01 */}
                                    <div className="bg-gray-400 w-1/2 rounded-md pt-3">
                                        <div className="flex flex-row w-full justify-between px-4">
                                            <div>
                                                <h3 className="text-xl text-white">Packages</h3>
                                            </div>
                                            <div>
                                                <h3 className="text-xl text-white">3</h3>
                                            </div>
                                        </div>

                                        {/* packages users categories */}
                                        <div className="flex flex-col w-full mt-6 space-y-2">
                                            <div className="flex flex-row px-4 justify-between text-xl">
                                                <div>
                                                    <h3>Premium</h3>
                                                </div>
                                                <div>
                                                    <span>31</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row px-4 justify-between text-xl">
                                                <div>
                                                    <h3>Diamond</h3>
                                                </div>
                                                <div>
                                                    <span>54</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row px-4 justify-between text-xl">
                                                <div>
                                                    <h3>Professional</h3>
                                                </div>
                                                <div>
                                                    <span>98</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* rightcard02 */}
                                    <div className="bg-white w-1/2 rounded-md">
                                        <div className="mx-4 pt-2">
                                            <h3 className="text-xl">Payments</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            
        </>
    );
}
export default HomeAdmin;
