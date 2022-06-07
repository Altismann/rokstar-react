import Head from "next/head";
import '../styles/globals.css';
const Rokstar = ({Component, pageProps}) => {
    return (
        <>
            <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-224266938-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}{'}'}
  gtag('js', new Date());

  gtag('config', 'UA-224266938-1');
</script>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
