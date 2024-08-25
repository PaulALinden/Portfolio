import React, { useState, useEffect } from 'react';
import profileContent from '../../data/profil-content.js';
import TechStackCard from './TechStackCard';

export default function AboutMeArticle({ language }) {
    const selectedContent = Object.values(profileContent[language]);
    const [paragraphs, setParagraphs] = useState([]);

    const articleStyle = 'space-y-5 basis-1/2 order-2 lg:order-1';
    const headingStyle = 'text-5xl m-3';

    useEffect(() => {
        const extractedParagraphs = selectedContent.slice(2);
        setParagraphs(extractedParagraphs);
    }, [language]);

    return (
        <article className={articleStyle}>
            <h1 className={headingStyle}>{selectedContent[0]}</h1>
            <TechStackCard />
            {paragraphs.length > 0 &&
                paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))
            }
        </article>
    );
}
