import React, { useState } from "react";
import LanguageSelector from "../home-components/LanguageSelector";

const Menu = ({ handleLanguageChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
        "text-white hover:text-blue-500";

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
                    <a href="#" className={linkClassName}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#portfolio" className={linkClassName}>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact" className={linkClassName}>
                        Contact
                    </a>
                </li>
                <LanguageSelector handleLanguageChange={handleLanguageChange} />
            </ul>
        </div>
    );
};

export default Menu;
