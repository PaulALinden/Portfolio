import { Link, useLocation } from "react-router-dom";
import { BsHouseDoorFill, BsStack, BsFillEnvelopeAtFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import LanguageSelector from "../home-components/LanguageSelector";

export default function Header({ handleLanguageChange }) {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);

    // Function to determine if a link is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Class name variables
    const containerClassName =
        "sticky top-0 z-10 bg-gradient-to-r from-gray-800 to-gray-500 " +
        "flex justify-between flex-wrap text-white pb-2 h-26";
    const headerClassName =
        "h-12";
    const headerTextClassName =
        "p-4 text-2xl min-w-fit";
    const navClassName =
        "p-4 space-x-4 h-12 flex";
    const linkBaseClassName =
        "space-x-1 flex justify-center items-center text-sm w-24 h-8 hover:bg-gray-900 " +
        "focus:bg-gray-900 rounded-md bg-gray-700 text-white font-semibold shadow-md " +
        "transition duration-300 focus:outline-none focus:ring focus:ring-gray-900";
    const activeLinkStyle =
        "text-white bg-gray-900";
    const inactiveLinkStyle =
        "text-gray-300 hover:bg-gray-900 hover:text-white";

    const checkScreenSize = () => {
        if (window.innerWidth > 768) { // Adjust this pixel value to your needs
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    return (
        <div className={containerClassName}>
            <header id="header" className={headerClassName}>
                <p className={headerTextClassName}>Paul Lindén</p>
            </header>

            <nav className={navClassName}>
                {isVisible ? (
                    <Menu handleLanguageChange={handleLanguageChange} />
                ) : (
                    <>
                        <Link
                            to="/"
                            className={`${linkBaseClassName} ${isActive("/") ? activeLinkStyle : inactiveLinkStyle}`}
                        >
                            <p>Home</p>
                            <BsHouseDoorFill />
                        </Link>

                        <Link
                            to="/portfolio"
                            className={`${linkBaseClassName} ${isActive("/portfolio") ? activeLinkStyle : inactiveLinkStyle}`}
                        >
                            <p>Portfolio</p>
                            <BsStack />
                        </Link>

                        <Link
                            to="/contact"
                            className={`${linkBaseClassName} ${isActive("/contact") ? activeLinkStyle : inactiveLinkStyle}`}
                        >
                            <p>Contact</p>
                            <BsFillEnvelopeAtFill />
                        </Link>

                        <LanguageSelector handleLanguageChange={handleLanguageChange} />
                    </>
                )}
            </nav>
        </div>
    );
}
