import React from 'react';
import content from '../data/content.json'

export default function BioArticle() {
    
    return (
        <article className="space-y-5 basis-1/2 order-2 lg:order-1">
            <h1 className="text-5xl">{content.välkommen}</h1>
            <h2 className="text-2xl">{content.javautvecklare}</h2>
            <p>{content.bioswe.firstPart}</p>
            <p>{content.bioswe.secondPart}</p>
            <p>{content.bioswe.thirdPart}</p>
            <p>{content.bioswe.fourthPart}</p>
        </article>
    );
}