import React from 'react';
import ReactCountryFlag from "react-country-flag"

export default function LanguageSelector({ handleLanguageChange }) {

    return (
        <div id="language-selector" className="space-x-2 max-w-fit h-fit px-2 bg-gray-800 rounded-md text-xl">
            <button onClick={() => handleLanguageChange('swe')}>
                <ReactCountryFlag countryCode="SE" />
            </button>

            <button onClick={() => handleLanguageChange('eng')}>
                <ReactCountryFlag countryCode="GB" />
            </button>
        </div>
    );
}

