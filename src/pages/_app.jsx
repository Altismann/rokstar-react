import Head from "next/head";
import '../styles/globals.css';
const Rokstar = ({Component, pageProps}) => {
    return (
        <>
            <Head>
            const ga4react = new GA4React(
'G-MZEMGBYQZR',
{ /* ga custom config, optional */ },
[ /* additional code, optional */ ],
5000 /* timeout, optional, defaults is 5000 */,
options /* { nonce: ['first-script-is-async','second-script'] } */

});
ga4react.initialize().then((ga4) => {
  ga4.pageview('path')
  ga4.gtag('event','pageview','path') // or your custom gtag event
},(err) => {
  console.error(err)
})
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
