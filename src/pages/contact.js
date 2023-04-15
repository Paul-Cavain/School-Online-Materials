import Navbar from "components/Navbar";
import Head from "next/head";

const contact = ()=>{
    return(
        <>
            <div>
                <Head>
                    <title>Satify - contact</title>
                    <meta name="keywords" content="LearnNextJs" />
                </Head>
                <div className="m-48 text-center text-3xl font-extralight">
                    <h1>This is contact page</h1>
                </div>
            </div>
        </>
    );
}
export default contact;