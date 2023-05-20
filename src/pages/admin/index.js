import Head from "next/head";

export default function HomeAdmin(){
    return (
        <>
            <Head>
                <title>Zephanious | Admin | Home</title>
                <meta name="keywords" content="LearnNextJs" />
            </Head>
            <div className="md:pt-32 pt-36 px-4 md:px-0 bg-gray-100">
                <h3 className="text-center text-2xl">Welcome Admin Home</h3>
            </div>
        </>
    )
};
