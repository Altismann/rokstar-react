import Shape from "./Shape";

const heroBg = "/images/dim.jpg";

const HeroArea = () => {
    return (
        <section
            id="hero"
            style={{backgroundImage: `url(${heroBg})`}}
            className="relative bg-cover bg-no-repeat bg-center ss:h-[700px] sm:h-[700px] md:h-[750px] lg:h-[950px] xl:h-[1100px] flex items-center"
        >
            <div className="container md:mb-44 lg:mb-44 xl:mb-44">
                <div className="font-light">
                    <h1 className="text-white font-light text-3xl sm:text-[45px] md:text-[55px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-yellow-500">SITECRAFT</h1>
                    <h2 className="text-white font-light text-md sm:text-lg tracking-4">Enklare Hemsidor</h2>
                    <p className="text-white font-light ss:text-[11px] sm:text-[12px] md:text-[13px] tracking-1 leading-4">
                    Sitecraft är en webbyrå som bygger sidor som är snabba och minimalistiska. Dom har stöd för viktiga funktioner och sökoptimeringstekniker SEO. Sidorna byggs
            med Wordpress eller NextJS och vi använder oss av moderna och stabila hostinglösningar. Vi erbjuder endast arbeten 
            som hobbyverksamhet. Vi kan därför inte ge någon support eller erbjuda lagring av data. En färdig sida kostar 2000-4000kr.
                    </p>
                    <nav className="flex-col flex-grow">

            <ul className="flex flex-grow justify-end flex-wrap items-center">
            <li>
                <p
                  className="font-semibold text-white px-5 py-3 flex items-center transition duration-150 ease-in-out border-l border-b border-white"
                >
                  Meny
                </p>
              </li>
            <li>
              <h3>
                <a
                  href="https://sitecraft.flywheelsites.com/alvikcykelcenter/"
                  className="font-semibold text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Alvik Cykelcenter
                </a>
                </h3>
              </li>
              <li>
              <h3>
                <a
                  href="https://sitecraft.flywheelsites.com/ekerofarg/"
                  className="font-semibold text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Ekerö Färg
                </a>
                </h3>
              </li>
              <li>
              <h3>
                <a
                  href="https://sitecraft.flywheelsites.com/skaburgare/"
                  className="font-semibold text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Skå Burgare
                </a>
                </h3>
              </li>
              <li>
              <h3>
                <a
                  href="https://sitecraft.flywheelsites.com/brommabilar/"
                  className="font-semibold text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Bromma Bilar
                </a>
                </h3>
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
