import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
