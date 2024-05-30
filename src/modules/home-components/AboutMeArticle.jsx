import React from 'react';
import profileContent from '../../data/profil-content.js'

export default function AboutMeArticle({ language }) {
    
    const selectedContent = profileContent[language]; 

    return (
        <article className="space-y-5 basis-1/2 order-2 lg:order-1">
            <h1 className="text-5xl">{selectedContent.welcomephrase}</h1>
            <h2 className="text-2xl">{selectedContent.title}</h2>
            <p>{selectedContent.firstPart}</p>
            <p>{selectedContent.secondPart}</p>
            <p>{selectedContent.thirdPart}</p>
            <p>{selectedContent.fourthPart}</p>
        </article>
    );
}