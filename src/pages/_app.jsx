import '../styles/globals.css';
import Script from "next/script";

const Rokstar = ({Component, pageProps}) => {
    return (
        <>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MZEMGBYQZR">

  window.dataLayer = window.dataLayer || [];
  function gtag()dataLayer.push(arguments)
  gtag('js', new Date());

  gtag('config', 'G-MZEMGBYQZR');
</script>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
