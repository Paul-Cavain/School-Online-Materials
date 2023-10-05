import axios from "axios";
import Head from "next/head";
import React, { useState, useEffect } from 'react';
import Sidebar from "components/Sidebar";
import { AiFillBell } from "react-icons/ai";
import { MenuButton, Messenger, Person } from "react-bootstrap-icons";
import Course_Tabs from "components/Course_Tab";

const OurCourses = () => {
    const [inputs, setInputs] = useState({});
    const [users, setUsers] = useState({});

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs( values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) =>{
        event.preventDefault();

        axios.post('http://localhost:80/api/user/save', inputs).then(function(response){
            console.log(response.data);
        });
       
    }
    useEffect(() => {
        getUsers();
      }, []);
    
      function getUsers() {
        axios.get('http://localhost:80/api/user').then(function(response){
          console.log(response.data);
          setUsers(response.data);
        });
      }

    return(
        <>
            <Head>
                <title>Zephanious | Admin | Courses</title>
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
                    <div className="flex flex-row justify-center mt-14">
                        <Course_Tabs />
                    </div>

                </div>
            </div>
            
        </>
    );
}
export default OurCourses;