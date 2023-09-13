import React from 'react';
import ReactCountryFlag from "react-country-flag"

export default function LanguageSelector({ handleLanguageChange }) {

    return (
        <div id="language-selector" className="space-x-2">
            <button onClick={() => handleLanguageChange('swe')}>
                <ReactCountryFlag countryCode="SE" />
            </button>

            <button onClick={() => handleLanguageChange('eng')}>
                <ReactCountryFlag countryCode="GB" />
            </button>
        </div>
    );
}

