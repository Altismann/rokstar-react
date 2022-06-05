import Shape from "./Shape";

const heroBg = "/images/hero-bg.jpg";

const HeroArea = () => {
    return (
        <section
            id="hero"
            style={{backgroundImage: `url(${heroBg})`}}
            className="relative bg-cover bg-no-repeat bg-center-top h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[800px] flex items-center"
        >
            <div className="container">
                <div className="mt-8 font-light">
                    <h1 className="text-white font-light text-3xl sm:text-[45px] md:text-[55px] leading-none">SITECRAFT</h1>
                    <h2 className="text-white font-light text-md sm:text-lg tracking-4 mt-2 sm:mt-4">Enklare Hemsidor</h2>
                    <p className="text-white font-light text-3xxs md:text-[13px] leading-none tracking-1 leading-4">
                    Enklare hemsidor är tillverkade för att vara snabba och minimalistiska i sitt utseende och för att stödja viktiga funktioner och sökoptimeringstekniker (SEO) 
                    Sidorna byggs med Wordpress och NextJS och vi använder oss av nya och stabila hostinglösningar. Då vi endast gör sidor som hobbyverksamhet kostar en färdig sida 
                    mellan 2000-4000kr och vi har ingen support eller egen lagring av data.</p>
                </div>
            </div>

            <Shape className="hidden md:block"/>
        </section>
    );
};

export default HeroArea;
