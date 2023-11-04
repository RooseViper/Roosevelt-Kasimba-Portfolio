import React from "react";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css"
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {
    return( 
      <Layout>
      <Component {...pageProps} />
      </Layout>
    )
  }
  

export default MyApp;