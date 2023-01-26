import Global from "../styles/globals.js";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
