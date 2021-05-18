import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pronto Agendei</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
