import { MenuButton, Messenger, Person } from "react-bootstrap-icons";
import { AiFillBell } from "react-icons/ai";
import Sidebar from "components/Sidebar";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
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
      <Head>
        <title>Zephanious | Admin | Users</title>
        <meta name="keywords" content="LearnNextJs" />
      </Head>

      {/* admin navbar */}
      <div className="md:px-0 flex flex-row justify-start">
        <Sidebar />

        <div className="flex-1 border-1 bg-gray-200">

          {/* navbar */}
          <div className="">
            <nav className="flex flex-row justify-between bg-white py-5">
              <div className="text-3xl px-4">
                <ul>
                  <li>Dashboard</li>
                </ul>
              </div>
              <div className="mx-10">
                <ul className="flex flex-row space-x-3">
                  <li>
                    <MenuButton className="text-lg" />
                  </li>
                  <li>
                    <Messenger className="text-lg" />
                  </li>
                  <li>
                    <AiFillBell className="text-xl" />
                  </li>
                  <li>
                    <Person className="text-xl" />
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* bodycontents */}
          <div className="px-10 pt-10">
            <div className="text-xl">
              <h3>Lists of Registered Users</h3>
            </div>

            <div className="w-full mt-10 pb-10 overflow-y-auto max-h-80">
              <table className="w-full table-fixed border-collapse">
                <thead className="bg-blue-400 sticky top-0">
                  <tr className="text-white">
                    <th className="py-4 px-4 text-center border border-gray-400">UID</th>
                    <th className="py-4px-4 text-start border border-gray-400">First Name</th>
                    <th className="py-4 px-4 text-start border border-gray-400">Last Name</th>
                    <th className="py-4 px-4 text-start border border-gray-400">Gender</th>
                    <th className="py-4 px-4 text-start border border-gray-400">Academic Level</th>
                    <th className="py-4 px-4 text-start border border-gray-400">Packages</th>
                    <th className="py-4 px-4 text-center border border-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-600">
                  {Array.isArray(users) ? (
                    users.map((user, key) => (
                      <tr key={key} className="hover:bg-gray-500 text-white">
                        <td className="py-2 px-4 text-center border border-gray-400">{user.id}</td>
                        <td className="py-2 px-4 text-start border border-gray-400">{user.first_name}</td>
                        <td className="py-2 px-4 text-start border border-gray-400">{user.last_name}</td>
                        <td className="py-2 px-4 text-start border border-gray-400">{user.gender}</td>
                        <td className="py-2 px-4 text-start border border-gray-400">{user.Academic_Level}</td>
                        <td className="py-2 px-4 text-start border border-gray-400">{user.package}</td>
                        <td className="py-2 px-4 text-center border border-gray-400">
                          <div className="flex flex-row justify-center space-x-4">
                            <div>
                              <button type="submit" name="edit" className="text-blue-400 w-12 rounded-sm py-1">Edit</button>
                            </div>
                            <div>
                              <button type="submit" name="submit" className="text-red-400 w-14 rounded-sm py-1">Delete</button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="py-2 px-4 text-center">No users found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Users;
