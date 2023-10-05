import { MenuButton, Messenger, Person } from "react-bootstrap-icons";
import { AiFillBell } from "react-icons/ai";
import Sidebar from "components/Sidebar";
import Head from "next/head";
import Event_Tabs from "components/Event_Tabs";

const Events = () => {
    return(
        <>
            <Head>
                <title>Zephanious | Admin | Events</title>
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
                    <div className="px-10 pt-10">

                        <div>
                            <Event_Tabs />
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    );
}
export default Events;