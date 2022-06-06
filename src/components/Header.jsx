import Logo from "./Logo";
import Navbar from "./Navbar";
import {useState} from "react";
import MobileNavbar from "./MobileNavbar";
import { Divide as Hamburger } from 'hamburger-react';
import useScrollPosition from "../hooks/useScrollPosition";


const Header = () => {
    const {position} = useScrollPosition();
    const [isMobileNavShow, setIsMobileNavShow] = useState(false);

    return (
        <header className={`fixed bg-transparent left-0 top-0 w-full z-30 duration-400 ${position >= 200 ? "py-2" : "py-2 md:py-5"}`}>

            <div className="container">
                <div className="sm:flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Logo/>

                        {/* Mobile Menu Icon */}
                        <span className="sm:hidden">
                           
                        </span>
                    </div>

                    {/* Desktop Navbar */}
                   

                    {/* Mobile Navbar */}
                
                </div>
            </div>


        </header>
    );
};

export default Header;
