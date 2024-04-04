import React, {useState} from 'react';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";

import './index.css';
import {AnimatePresence} from "framer-motion";

import Header from './modules/small-assets/Header';
import Homepage from './modules/core-components/Homepage';
import PortfolioPage from './modules/core-components/PortfolioPage';
import Project from './modules/portfolio-components/Project';
import ContactPage from './modules/core-components/ContactPage';
import NoPage from "./modules/small-assets/NoPage";

export default function App() {
    const [language, setLanguage] = useState('swe');

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    }

    return (
        <div
            className="bg-slate-200 dark:bg-gray-700 dark:text-white overflow-auto h-screen w-screen min-w-fit font-serif">
            <AnimatePresence>

                <BrowserRouter basename="">
                    <Routes>
                        <Route
                            path=""
                            element={
                                <>
                                    <Header/>
                                    <Outlet/>
                                </>
                            }>

                            <Route index element={<Homepage language={language} handleLanguageChange={handleLanguageChange}/>}/>

                            <Route path="portfolio" element={<PortfolioPage language={language}/>}/>

                            <Route path="portfolio/:projectId" element={<Project/>}/>

                            <Route path="contact" element={<ContactPage language={language}/>}/>

                            <Route path="*" element={<NoPage language={language}/>}/>


                        </Route>
                    </Routes>
                </BrowserRouter>

            </AnimatePresence>
        </div>

    );
}