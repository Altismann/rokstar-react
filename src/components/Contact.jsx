import SocialMedia from "./SocialMedia";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";

const Contact = () => {
    return (
         <div className="bg-black flex flex-col-reverse px-44 justify-between pt-4 pb-4 lg:flex-row bg-top items-center">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row text-center">
            <li>
              <a
                href="https://anderss-stellar-site.webflow.io"
                className="text-xs text-white hover:text-gray-400 marker:transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/"
                className="text-xs text-white hover:text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                NextJS
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                className="text-xs text-white hover:text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Tailwind css
              </a>
            </li>
            <li>
              <a
                href="https://sitecraft.flywheelsites.com/"
                className="text-xs text-white hover:text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Kontakt
              </a>
            </li>
          </ul>
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row text-center">
            <p
              className="text-xs text-white hover:text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold mb-4"
            >
              Enlundavägen 46 17975 Skå
            </p>
          </ul>
           </div>

             /*  
           <SocialMedia className="mt-6 md:mt-10"/>
               </div>

               <div className="col-span-7 mt-10 md:mt-0">
                   <ContactForm/>
               </div>
           </div>
       </div>
   </section>
    */

    );
};

export default Contact;
