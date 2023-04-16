import React from "react";
import Image from "next/image";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
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
          
          <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-6 shadow-md rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">

                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="flex flex-col md:flex-row md:space-y-0 space-y-6 justify-center md:space-x-8 mt-16 md:px-0 px-10">
                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexel.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3>PHYSICS</h3>
                                  </div>
                                  <div className=" px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3 className="uppercase">Mathematics</h3>
                                  </div>
                                  <div className="px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels1.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3 className="uppercase">Mathematics</h3>
                                  </div>
                                  <div className="px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md transition duration-300 transform hover:shadow-blue-500 hover:shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels2.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3 className="uppercase">Mathematics</h3>
                                  </div>
                                  <div className="px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>
                  </div>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="flex flex-col md:flex-row md:space-y-0 space-y-6 justify-center md:space-x-8 mt-16 md:px-0 px-10">
                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3>PHYSICS</h3>
                                  </div>
                                  <div className=" px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels4.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3 className="uppercase">Mathematics</h3>
                                  </div>
                                  <div className="px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels1.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3 className="uppercase">Mathematics</h3>
                                  </div>
                                  <div className="px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels3.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3 className="uppercase">Mathematics</h3>
                                  </div>
                                  <div className="px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>
                  </div>
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="flex flex-col md:flex-row md:space-y-0 space-y-6 justify-center md:space-x-8 mt-16 md:px-0 px-10">
                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3>PHYSICS</h3>
                                  </div>
                                  <div className=" px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3 className="uppercase">Mathematics</h3>
                                  </div>
                                  <div className="px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3 className="uppercase">Mathematics</h3>
                                  </div>
                                  <div className="px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3 className="uppercase">Mathematics</h3>
                                  </div>
                                  <div className="px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>
                  </div>
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                <div className="flex flex-col md:flex-row md:space-y-0 space-y-6 justify-center md:space-x-8 mt-16 md:px-0 px-10">
                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3>PHYSICS</h3>
                                  </div>
                                  <div className=" px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels4.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3 className="uppercase">Mathematics</h3>
                                  </div>
                                  <div className="px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels1.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3 className="uppercase">Mathematics</h3>
                                  </div>
                                  <div className="px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
                    </div>

                    <div className="bg-white h-auto w-64 py-2 pb-4 shadow-md">
                                  <div className="px-2">
                                      <Image src={"/pexels3.jpg"} width={250} height={100} alt="landing image" className="rounded-md" />
                                  </div>
                                  <div className="mt-4 px-2">
                                      <h3 className="uppercase">Mathematics</h3>
                                  </div>
                                  <div className="px-2">
                                      <h3>PHYSICS FOR ALL</h3>
                                  </div>
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