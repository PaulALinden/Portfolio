import React, { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import BioArticle from './BioArticle';
import ProfileSection from './ProfileSection';
import SocialMediaBar from './SocialMediaBar';

export default function Main() {

    const [language, setLanguage] = useState('swe');

    const handleLanguageChange = (selectedLanguage) => {
        setLanguage(selectedLanguage);
    }

    return (
        <main id="main" className=" dark:bg-gray-700 dark:text-white p-4 flex flex-col lg:flex-row space-y-6 space-x-6">

            <LanguageSelector handleLanguageChange={handleLanguageChange} />

            <BioArticle language={language} />

            <ProfileSection language={language} />

            <SocialMediaBar />

        </main>
    );
}