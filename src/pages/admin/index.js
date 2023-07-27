import Head from "next/head";
import Link from "next/link";

const IndexAdmin = () => {
    return(
        <>
            <Head>
                <title>Zephanious | Admin | Login</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>

            <div className="bg-gray-200 pb-60">

                {/* navbar */}
                <div className="bg-white h-16">
                    <nav className="pt-3">
                        <h3 className="text-2xl px-2">Zephanious Admin</h3>
                    </nav>
                </div>

                {/* admin login contents */}
                <div className="flex flex-row justify-center mt-48">
                    <form method="POST" action="" className="bg-indigo-600 w-1/2 rounded-md">
                        <div className="text-xl text-white text-center pt-3">
                            <h3>Admin SignUp</h3>
                        </div>
                        <div className="flex flex-col px-10 py-10 space-y-3">
                            <div className="flex flex-col w-full">
                                <label for="email" className="text-white">Admin Email</label>
                                <input type="text" name="email" placeholder="Enter email" className="w-full h-10 px-4 rounded-md focus:outline-none"/>
                            </div>

                            <div className="flex flex-col w-full">
                                <label for="password" className="text-white">Admin Password</label>
                                <input type="text" name="email" placeholder="Enter Password" className="w-full h-10 px-4 rounded-md focus:outline-none"/>
                            </div>
                            <Link href="./admin/HomeAdmin">
                                <div className="pt-4">
                                    <button type="submit" name="submit" className="w-20 bg-black text-white w-full h-10 rounded-md">Login</button>
                                </div>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    );
}
export default IndexAdmin;