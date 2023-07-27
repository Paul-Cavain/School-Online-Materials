import React from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from 'react';

const Tabs = () => {
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
                All Courses
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
                Physics
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-indigo-600"
                    : "text-indigo-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Chemistry
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-indigo-600"
                    : "text-indigo-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Biology
              </a>
            </li>

          </ul>
          
          <div className="relative flex flex-col bg-gray-100 w-full md:mb-4 mb-3 shadow-md rounded">
            <div className="flex-auto md:px-4 md:py-5">
              <div className="tab-content tab-space">

                {/* all courses */}
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="justify-center mt-16">

                    <div className="grid grid-cols-4 space-x-2 space-y-4 py-2 pb-4 bg-gray-100 mx-16">
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

                {/* physics cousses */}
                <div className={openTab === 2 ? "block" : "hidden"} id="link1">
                  <div className="justify-center mt-16">

                    <div className="grid grid-cols-4 space-x-2 space-y-4 py-2 pb-4 bg-gray-100 mx-16">
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

                {/* Chemistry courses */}
                <div className={openTab === 3 ? "block" : "hidden"} id="link1">
                  <div className="justify-center mt-16">

                    <div className="grid grid-cols-4 space-x-2 space-y-4 py-2 pb-4 bg-gray-100 mx-16">
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

                {/* Biology courses */}
                <div className={openTab === 4 ? "block" : "hidden"} id="link1">
                  <div className="justify-center mt-16">

                    <div className="grid grid-cols-4 space-x-2 space-y-4 py-2 pb-4 bg-gray-100 mx-16">
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

export default Tabs;