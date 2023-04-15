import '@/styles/globals.css'
import Navbar from 'components/Navbar';
import Layout from 'components/Layout'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  </>
  );
}
