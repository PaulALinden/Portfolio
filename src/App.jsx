import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Header from './modules/small-assets/Header';
import Homepage from './modules/core-components/Homepage';
import PortfolioPage from './modules/core-components/PortfolioPage';
import ContactPage from './modules/core-components/ContactPage';
import NoPage from "./modules/small-assets/NoPage";

export default function App() {

    const [language, setLanguage] = useState('swe');

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    }

    return (
        <div className="dark:bg-gray-700 h-fit min-h-screen w-screen min-w-fit font-serif">

            <BrowserRouter basename="/portfoliopage" >

                <Routes>

                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Outlet />
                            </>
                        } >

                        <Route index element={<Homepage language={language} handleLanguageChange={handleLanguageChange}/>} />

                        <Route path="portfolio" element={<PortfolioPage language={language} />} />

                        <Route path="contact" element={<ContactPage language={language}/>} />

                        <Route path="*" element={<NoPage language={language}/>} />

                    </Route >

                </Routes>

            </BrowserRouter>
        </div>
    );
}