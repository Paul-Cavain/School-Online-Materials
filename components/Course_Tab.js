import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from 'react';

const Course_Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);

  const [users, setUsers] = useState({});

  useEffect(() => {
      getUsers();
  }, []);
  
  function getUsers() {
      axios.get('http://localhost:80/api/user').then(function(response){
        console.log(response.data);
        setUsers(response.data);
      });
  }
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full">
          <ul
            className="flex flex-col md:flex-row pt-3 pb-4 md:mb-0 list-none md:mx-20"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-indigo-600"
                    : "text-indigo-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Upload Course
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-indigo-600"
                    : "text-indigo-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                View Course Uploaded
              </a>
            </li>

          </ul>
          
          <div className="relative flex flex-col w-full md:mb-4 mb-3 rounded">
            <div className="flex-auto md:px-4">
              <div className="tab-content tab-space">

                {/* Upload Course */}
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="justify-center mt-8">

                    <div className="flex justify-center py-2 pb-4">
                        <form className="bg-indigo-600 w-3/4 rounded-md">
                            <div className="text-xl text-white text-center pt-3">
                                <h3>Upload Courses</h3>
                            </div>
                            <div className="flex flex-col px-10 py-10 space-y-3">
                                <div className="flex flex-col w-full">
                                    <label for="email" className="text-white">Course Name</label>
                                    <select name="course_name" id="course_name" className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block focus:outline-none w-full h-10 px-2">
                                        <option disabled selected>Select Course Name</option>
                                        <option value={"Physics"}>Physics</option>
                                        <option value={"Biology"}>Biology</option>
                                        <option value={"Mathematics"}>Mathematics</option>
                                    </select>
                                </div>

                                <div className="flex flex-col w-full">
                                    <label for="email" className="text-white">Course Level</label>
                                    <select name="course_level" id="course_level" className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block focus:outline-none w-full h-10 px-2">
                                        <option disabled selected>Select Course Level</option>
                                        <option value={"O'Level"}>O'Level</option>
                                        <option value={"A'Level"}>A'Level</option>
                                    </select>
                                </div>

                                <div className="flex flex-col w-full">
                                    <label for="email" className="text-white">Form Level</label>
                                    <select name="form_level" id="form_level" className="border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block focus:outline-none w-full h-10 px-2" >
                                        <option disabled selected>Select Form Level</option>
                                        <option value={"Form One"}>Form One</option>
                                        <option value={"Form Two"}>Form Two</option>
                                        <option value={"Form Three"}>Form Three</option>
                                        <option value={"Form Four"}>Form Four</option>
                                        <option value={"Form Five"}>Form Five</option>
                                        <option value={"Form Six"}>Form Six</option>
                                    </select>
                                </div>
                                <div className="flex flex-row pt-6 justify-center md:space-x-6">
                                    <div className="flex flex-col w-full ">
                                        <label for="image" className="text-white">Choose image</label>
                                        <input type="file" name="form_control" className="h-10 rounded-md bg-white" />
                                    </div>
                                    <div className="flex flex-col w-full ">
                                        <label for="document" className="text-white">Choose Book</label>
                                        <input type="file" name="form_control" className="h-10 rounded-md bg-white" />
                                    </div>
                                </div>

                                
                                <div className="pt-4">
                                    <button type="submit" className="bg-black text-white w-full h-10 rounded-md">UPLOAD</button>
                                </div>
                            </div>
                        </form>           
                    </div>

                  </div>
                </div>

                {/* View Course Uploaded */}
                <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                  <div className="justify-center mt-8">

                    <div className="grid grid-cols-4 gap-3 py-2 pb-4 bg-gray-100 mx-16">
                      {Array.isArray(users) ? (
                        users.map((user, key) => (
                          <ul key={key} className="">

                            <Link href={"{user.book_pdf}"}>
                              <div className="bg-white h-auto w-full rounded-md py-2 pb-4 shadow-md transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                                <div className="px-2">
                                    {user.book_image}
                                </div>
                                <div className="mt-4 px-2">
                                    <h3 className="uppercase">{user.course_name}</h3>
                                </div>
                                <div className="px-2">
                                    <h3>{user.course_level}</h3>
                                </div>
                                <div className="px-2">
                                    <h3>{user.form_level}</h3>
                                </div>
                              </div>
                            </Link>
                            </ul>
                            ))
                            ) : (
                            <ul>
                                <li colSpan="6" className="py-2 px-4 text-center">No such book found.</li>
                            </ul>
                        )}            
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
};

export default Course_Tabs;