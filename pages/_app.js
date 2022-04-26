import React from "react";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

import { StateContext } from "../context/StateContext";
import { Layout } from "../components";

const MyApp = ({ Component, pageProps }) => {
    return(
        <StateContext>
            <Layout>
                <Toaster/>
                <Component {...pageProps} />
            </Layout>
        </StateContext>
    );
}

export default MyApp;