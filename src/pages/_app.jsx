import Head from "next/head";
import '../styles/globals.css';
import Script from "next/script";

const Rokstar = ({Component, pageProps}) => {
    return (
        <>
            <Head>
            <Script
    strategy="lazyOnload"
    src={"https://www.googletagmanager.com/gtag/js?id=UA-224266938-1"}
  />

  <Script id="google-analytics" strategy="lazyOnload">
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-224266938-1');
  `}
  </Script>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
