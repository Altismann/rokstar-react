import Head from "next/head";
import '../styles/globals.css';
const Rokstar = ({Component, pageProps}) => {
    return (
        <>

<Script
    strategy="lazyOnload"
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
  />

  <Script id="google-analytics" strategy="lazyOnload">
    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
  </Script>
            <Head>
                
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
