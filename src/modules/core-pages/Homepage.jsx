import React, { useState } from 'react';
import LanguageSelector from '../home-components/LanguageSelector';
import BioArticle from '../home-components/AboutMeArticle';
import ProfileCardWithCV from '../home-components/ProfileCardWithCV';
import SocialMediaBar from '../small-assets/SocialMediaBar';

export default function Main() {

    const [language, setLanguage] = useState('swe');

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    }

    return (
        <main id="main" className=" dark:bg-gray-700 dark:text-white p-4 flex flex-col lg:flex-row space-y-6 space-x-6">

            <LanguageSelector handleLanguageChange={handleLanguageChange} />

            <BioArticle language={language} />

            <ProfileCardWithCV language={language} />

            <SocialMediaBar />

        </main>
    );
}