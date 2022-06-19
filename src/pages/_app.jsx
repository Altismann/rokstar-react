import Head from "next/head";
import '../styles/globals.css';
import Script from "next/script";

const Rokstar = ({Component, pageProps}) => {
    return (
        <>
            <Head>
            <Script
    strategy="lazyOnload"
    src={"https://www.googletagmanager.com/gtag/js?id=G-MZEMGBYQZR"}
  />

  <Script id="google-analytics" strategy="lazyOnload">
    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MZEMGBYQZR');
              page_path: window.location.pathname,
            });
                `}
  </Script>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
