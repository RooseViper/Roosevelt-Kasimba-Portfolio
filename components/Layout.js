import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <div className="w-full">
                <div className="px-5 md:mx-auto md:max-w-6xl">
                    <Navbar/>
                    {children}
                    <Footer/>
                </div>
            </div>
        </>
     );
}
 
export default Layout;