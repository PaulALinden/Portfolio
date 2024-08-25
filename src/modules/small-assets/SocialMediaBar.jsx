import React from 'react';
import websiteLinks from '../../data/websiteLinks.js'
import { SiLinkedin, SiGithub } from 'react-icons/si';

// Class name variables
const footerClassName =
    "text-white order-3 flex space-x-2 bg-[#374151] w-24 border-2 border-slate-400 dark:border-white lg:fixed bottom-6 right-6 p-4";
const anchorClassName =
    "text-2xl";

export default function Footer() {
    return (
        <footer id="socialmedia" className={footerClassName}>
            <a href={websiteLinks.socialmedia.linkedin}><SiLinkedin className={anchorClassName} /></a>
            <a href={websiteLinks.socialmedia.github}><SiGithub className={anchorClassName} /></a>
        </footer>
    );
}
