import { Provider } from "next-auth/client";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    /**
     *  @  https://www.bilibili.com/video/BV1Nv41187TA?p=209&vd_source=71f123c00025c38afb1d6d26e9d8742e
     *  @Provider
     *   e.g. profilePage has this session, allows next to skip extra session check performed by use session
     *       if we already have the session from getServerSideProp function
     */
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
