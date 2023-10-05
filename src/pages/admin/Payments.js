import { MenuButton, Messenger, Person } from "react-bootstrap-icons";
import { AiFillBell } from "react-icons/ai";
import Sidebar from "components/Sidebar";
import Head from "next/head";

const Payments = () => {
    return(
        <>
            <Head>
                <title>Zephanious | Admin | Payments</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            {/* admin navbar */}
            <div className="md:px-0 flex flex-row justify-start">
                <Sidebar />

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
                    <div className="px-10 pt-20">

                        <div>
                            <h3 className="text-2xl text-center">Set An Amount Per Package</h3>

                            <div className="flex justify-center mt-6">
                                <form className="bg-indigo-600 md:w-3/4 rounded-md p-6">
   
                                    <div className="w-full px-4 mt-4">
                                        <label for="gender" className="block text-white">Select Package</label>
                                        <select name="package" id="gender" className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block focus:outline-none w-full h-10 px-2" >
                                            <option disabled selected>Select Package</option>
                                            <option value={"professional"}>Professional | 3 Months</option>
                                            <option value={"Premium"}>Premium | 6 Months</option>
                                            <option value={"Diamond"}>Diamond | 1 Year</option>
                                        </select>
                                    </div>


                                    <div className="mt-6 px-4">
                                        <label className="text-white">Enter Amount </label>
                                        <input type="number" name="fname" placeholder="Enter Amount Of Selected Package" className="rounded-md h-10 w-full focus:outline-none px-2" />
                                    </div>

                                    <div className="text-end px-4 mt-4 pb-6">
                                        <button type="submit" className="h-10 w-full bg-black text-white mt-6 rounded-md">Confirm</button>
                                    </div>
    
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    );
}
export default Payments;