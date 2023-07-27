import axios from "axios";
import Head from "next/head";
import React, { useState, useEffect } from 'react';
import Sidebar from "components/Sidebar";
import { AiFillBell } from "react-icons/ai";
import { MenuButton, Messenger, Person } from "react-bootstrap-icons";

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
                    <div className="flex flex-row justify-center mt-32">
                        <form onSubmit={handleSubmit} className="bg-indigo-600 w-1/2 rounded-md">
                            <div className="text-xl text-white text-center pt-3">
                                <h3>Upload Courses</h3>
                            </div>
                            <div className="flex flex-col px-10 py-10 space-y-3">
                                <div className="flex flex-col w-full">
                                    <label for="email" className="text-white">Course Name</label>
                                    <select name="course_name" id="course_name" className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block focus:outline-none w-full h-10 px-2" onChange={handleChange}>
                                        <option disabled selected>Select Course Name</option>
                                        <option value={"Physics"}>Physics</option>
                                        <option value={"Biology"}>Biology</option>
                                        <option value={"Mathematics"}>Mathematics</option>
                                    </select>
                                </div>

                                <div className="flex flex-col w-full">
                                    <label for="email" className="text-white">Course Level</label>
                                    <select name="course_level" id="course_level" className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block focus:outline-none w-full h-10 px-2" onChange={handleChange}>
                                        <option disabled selected>Select Course Level</option>
                                        <option value={"O'Level"}>O'Level</option>
                                        <option value={"A'Level"}>A'Level</option>
                                    </select>
                                </div>

                                <div className="flex flex-col w-full">
                                    <label for="email" className="text-white">Form Level</label>
                                    <select name="form_level" id="form_level" className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block focus:outline-none w-full h-10 px-2" onChange={handleChange}>
                                        <option disabled selected>Select Form Level</option>
                                        <option value={"Form One"}>Form One</option>
                                        <option value={"Form Two"}>Form Two</option>
                                        <option value={"Form Three"}>Form Three</option>
                                        <option value={"Form Four"}>Form Four</option>
                                        <option value={"Form Five"}>Form Five</option>
                                        <option value={"Form Six"}>Form Six</option>
                                    </select>
                                </div>
                                <div className="flex flex-row">
                                    <div>
                                        <label for="image" className="text-white">Choose image</label>
                                        <input type="file" name="file" onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <label for="document" className="text-white">Choose Book</label>
                                        <input type="file" name="file" onChange={handleChange}/>
                                    </div>
                                </div>

                                
                                <div className="pt-4">
                                    <button type="submit" className="w-20 bg-black text-white w-full h-10 rounded-md">UPLOAD</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            
        </>
    );
}
export default OurCourses;