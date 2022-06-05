import SocialMedia from "./SocialMedia";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";

const Contact = () => {
    return (
         <div className="bg-black flex flex-col-reverse px-44 justify-between pt-4 pb-4 lg:flex-row bg-top items-center border-t border-stone-900">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row text-center">
            <li>
              <a
                href="https://anderss-stellar-site.webflow.io"
                className="text-xs text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/"
                className="text-xs text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Byggd med NextJS
              </a>
            </li>
          </ul>
          <ul className="text-xs flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <p className="text-center font-medium text-white">
            Tel: 070-2312173
          </p>
          </ul>
            <ul className="text-xs flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row font-semibold">
            <a
              href="mailto:altismann@protonmail.com"
              className="text-md text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              altismann@protonmail.com
            </a>
          </ul>
           </div>
    );
};

export default Contact;
