import Head from "next/head";
import React from "react";
import "../styles/globals.css";
import "../styles/table.css";
import "../styles/interface.css";
import "../styles/nightLightMode.css";
import '../styles/react-tabs.css';
import 'react-table/react-table.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head lang="en">
        <title>root@crystal.hair</title>
      </Head>
        <div id="main">
          <Component {...pageProps} />
        </div>
    </>
  );
}

export default MyApp;