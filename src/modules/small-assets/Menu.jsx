import React, {useEffect, useState } from "react";
import LanguageSelector from "../home-components/LanguageSelector";
import {Link, useLocation} from "react-router-dom";

const Menu = ({ handleLanguageChange }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path)=>{
        return location.pathname === path ? "underline" : "";
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleHashChange = () => {
            setIsOpen(false);
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // Class name variables
    const containerClassName =
        "absolute right-3";
    const buttonClassName =
        "flex flex-col items-center justify-between w-8 h-8 focus:outline-none";
    const spanBaseClassName =
        "block w-8 h-1 bg-gray-800 transition-transform duration-300 transform";
    const spanMiddleClassName =
        "block w-8 h-1 bg-gray-800 transition-opacity duration-300";
    const menuListClassName
        = `absolute mt-2 -right-2 w-32 bg-gray-700 border border-gray-200 shadow-lg 
        flex flex-col items-start p-4 space-y-2 transform transition-transform duration-300`;
    const linkClassName =
        "p-1 text-white hover:shadow-[0_0_10px_#3b82f6] hover:bg-blue-500 hover:bg-opacity-50 hover:rounded-lg";

    return (
        <div className={containerClassName}>
            {/* Hamburger Icon */}
            <button className={buttonClassName} onClick={toggleMenu}>
                <span
                    className={`${spanBaseClassName} ${isOpen ? "rotate-45 translate-y-3.5" : ""}`}
                />
                <span
                    className={`${spanMiddleClassName} ${isOpen ? "opacity-0" : ""}`}
                />
                <span
                    className={`${spanBaseClassName} ${isOpen ? "-rotate-45 -translate-y-3.5" : ""}`}
                />
            </button>

            {/* Menu Items */}
            <ul className={`${menuListClassName} ${isOpen ? "scale-100" : "scale-0"}`}>
                <li>
                    <Link to="" className={`${linkClassName} ${isActive("/")}`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="portfolio" className={`${linkClassName} ${isActive("/portfolio")}`}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="contact" className={`${linkClassName} ${isActive("/contact")}`}>
                        Contact
                    </Link>
                </li>
                <LanguageSelector handleLanguageChange={handleLanguageChange} />
            </ul>
        </div>
    );
};

export default Menu;
