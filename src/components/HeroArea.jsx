import Shape from "./Shape";

const heroBg = "/images/hero-bg.jpg";

const HeroArea = () => {
    return (
        <section
            id="hero"
            style={{backgroundImage: `url(${heroBg})`}}
            className="relative bg-cover bg-no-repeat bg-center-top ss:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[800px] flex items-center"
        >
            <div className="container">
                <div className="font-light">
                    <h1 className="text-white font-light text-3xl sm:text-[45px] md:text-[55px] leading-none">SITECRAFT</h1>
                    <h2 className="text-white font-light text-md sm:text-lg tracking-4 mt-2 sm:mt-4">Enklare Hemsidor</h2>
                    <p className="text-white font-light text-3xs ss:text-[11px] sm:text-[12px] md:text-[13px] tracking-1 leading-4">
                    Enklare hemsidor är tillverkade för att vara snabba och minimalistiska i sitt utseende och för att stödja viktiga funktioner och sökoptimeringstekniker (SEO) 
                    Sidorna byggs med Wordpress och NextJS och vi använder oss av nya och stabila hostinglösningar. Då vi endast gör sidor som hobbyverksamhet kostar en färdig sida 
                    mellan 2000-4000kr och vi har ingen support eller egen lagring av data.
                    </p>
                    <nav className="flex-col flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
            <li>
                <a
                  href="/"
                  className="font-semibold text-white hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out border-l border-b border-white"
                >
                  EXEMPEL
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-semibold text-white hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Skå Burgare
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-semibold text-white hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Bromma Bilar
                </a>
              </li>
            </ul>
          </nav>
                </div>
            </div>

            <Shape className="hidden md:block"/>
        </section>
    );
};

export default HeroArea;
