import Head from "next/head";
import '../styles/globals.css';
import Script from "next/script";

const Rokstar = ({Component, pageProps}) => {
    return (
        <>
            <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-MZEMGBYQZR"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MZEMGBYQZR');
</script>
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
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
