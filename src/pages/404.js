import Link from 'next/link'
import Head from 'next/head';

const NotFound = () => {
    return (
        <>
        <Head>
            <title>satify - 404 NotFound</title>
            <meta name="keywords" content="LearnNextJs" />
        </Head>
        <div className="not-found text-center mt-72 mb-32">
            <div className='flex justify-center space-x-2'>
                <h3 className='text-4xl'>404 |</h3>
                <h4 className='text-xl mt-2'> This page can not be found!!!!.</h4>
            </div>
            <p className='mt-10'>
                Go back to
                <a href="/" className='text-blue-500'> HomePage</a>
            </p>

        </div>
        </>
    )
}
export default NotFound;