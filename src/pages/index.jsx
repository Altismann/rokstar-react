import {useEffect, useState} from "react";
import Header from "../components/Header";
import AboutMe from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import HeroArea from "../components/HeroArea";
import Services from "../components/Services";
import Preloader from "../components/Preloader";
import Portfolios from "../components/Portfolios";
import { NextSeo } from "next-seo";

function Home() {
    const [preloaded, setPreloaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPreloaded(true);
        }, 800);
    }, []);

    return (
        <><div className="rokstar">
            <Preloader preloaded={preloaded} />
            <Header />
            {/*<AboutMe/>*/}
            <HeroArea />
            {/*<Services/>*/}
            {/*<Portfolios/>*/}
            <Contact />
            <Footer />

        </div>
        <div className="text-black">
                <NextSeo
                    title="Home: Sitecraft"
                    description="Enklare Hemsidor"
                    canonical="https://sitecraft.se"
                    openGraph={{
                        url: "https://sitecraft.se",
                    }} />

                      <Head>
                     
                      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-224266938-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};&rbrace;
  gtag('js', new Date());

  gtag('config', 'UA-224266938-1');
</script>
</Head>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />  

            </div></>
    );
}

export default Home;
