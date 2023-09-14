import React from 'react';
import websiteLinks from '../../data/websiteLinks.json'
import { SiLinkedin, SiGithub } from 'react-icons/si';

export default function Footer() {
    return (
        <footer id="socialmedia" className="text-white order-3 flex space-x-2 bg-[#374151] w-24 border-2 border-white lg:fixed bottom-6 right-6 p-4">
            <a href={websiteLinks.socialmedia.linkedin}><SiLinkedin className="text-2xl" /></a>
            <a href={websiteLinks.socialmedia.github}><SiGithub className="text-2xl" /></a>
        </footer>
    );
}
