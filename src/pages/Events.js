import Image from "next/image";


const Events = () => {
    return(
        <>
            <div className="pt-32 bg-gray-100 pb-32">
                <div className="font-extralight text-center">
                    <h3 className="text-2xl">Upcomming Events</h3>
                </div>

                {/* eventOne */}
                <section className="flex flex-col md:flex-row justify-center space-x-8 mx-20 mt-14">

                    <div className="w-3/4 h-auto">
                        <Image src={"/pexels.jpg"} width={400} height={100} alt="upcomming event one" className="rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-blue-500">
                            <h3>16 May 2023</h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="text-xl">Chapter Four On Interactive Strategies For Engaging With Art</h3>
                        </div>
                        <div className="font-extralight">
                            <h3>Haneg Park Setagayaku, Setagaya 154-0017 Japan + Google Map</h3>
                        </div>
                        <hr className="mt-3" />
                        <div className="mt-3">
                            <p>Art can be a powerful catalyst for building skills and understanding a range of subjects. Intended for primary and secondary teachers of all disciplines, Art and Activity builds upon the inquiry-based approaches of Art and Inquiry.</p>
                        </div>
                        <div className="mt-8">
                            <button type="button" name="button" className="w-28 rounded-md h-10 bg-black text-white">Read More</button>
                        </div>
                    </div>
                </section>

                {/* eventOne */}
                <section className="flex flex-col md:flex-row justify-center space-x-8 mx-20 mt-14">

                    <div className="w-3/4 h-auto">
                        <Image src={"/pexels1.jpg"} width={400} height={100} alt="upcomming event one" className="rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-blue-500">
                            <h3>16 May 2023</h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="text-xl">Chapter Four On Interactive Strategies For Engaging With Art</h3>
                        </div>
                        <div className="font-extralight">
                            <h3>Haneg Park Setagayaku, Setagaya 154-0017 Japan + Google Map</h3>
                        </div>
                        <hr className="mt-3" />
                        <div className="mt-3">
                            <p>Art can be a powerful catalyst for building skills and understanding a range of subjects. Intended for primary and secondary teachers of all disciplines, Art and Activity builds upon the inquiry-based approaches of Art and Inquiry.</p>
                        </div>
                        <div className="mt-8">
                            <button type="button" name="button" className="w-28 rounded-md h-10 bg-black text-white">Read More</button>
                        </div>
                    </div>
                </section>

                {/* eventOne */}
                <section className="flex flex-col md:flex-row justify-center space-x-8 mx-20 mt-14">

                    <div className="w-3/4 h-auto">
                        <Image src={"/pexels4.jpg"} width={400} height={100} alt="upcomming event one" className="rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-blue-500">
                            <h3>16 May 2023</h3>
                        </div>
                        <div className="mt-2">
                            <h3 className="text-xl">Chapter Four On Interactive Strategies For Engaging With Art</h3>
                        </div>
                        <div className="font-extralight">
                            <h3>Haneg Park Setagayaku, Setagaya 154-0017 Japan + Google Map</h3>
                        </div>
                        <hr className="mt-3" />
                        <div className="mt-3">
                            <p>Art can be a powerful catalyst for building skills and understanding a range of subjects. Intended for primary and secondary teachers of all disciplines, Art and Activity builds upon the inquiry-based approaches of Art and Inquiry.</p>
                        </div>
                        <div className="mt-8">
                            <button type="button" name="button" className="w-28 rounded-md h-10 bg-black text-white">Read More</button>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}
export default Events;