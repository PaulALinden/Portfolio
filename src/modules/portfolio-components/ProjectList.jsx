import React, {useEffect, useState} from "react";

import ProjectCard from './ProjectCard'

import { imageArr } from './PortfolioImages'
import projectsData from '../../data/portfolio-content.json'

export default function ProjectList({ language }) {

    const projectDataKeys = Object.keys(projectsData.portfolio);
    const heading = projectsData.heading[language];

    const [loadedProjects, setLoadedProjects] = useState([]);

    useEffect(() => {
        const preloadImages = async () => {
            for (let i = 0; i < imageArr.length; i++) {
                const images = imageArr[i];
                for (let j = 0; j < images.length; j++) {
                    await new Promise((resolve, reject) => {
                        const img = new Image();
                        img.src = images[j].toString();
                        img.onload = resolve;
                        img.onerror = reject;
                    });
                }
                setLoadedProjects(prevLoadedProjects => [...prevLoadedProjects, true]);
            }
        };

        preloadImages();
    }, []);



    return (
        <article className=" m-8 place-items-center space-y-2 ">

            <h2 className="w-full text-center text-3xl pb-2 border-b-2">{heading}</h2>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectDataKeys.map((key, index) => {
                const projectData = projectsData.portfolio[key];
                const images = imageArr[projectDataKeys.indexOf(key)];

                return (
                    <React.Fragment key={key}>
                        {loadedProjects[index] && (
                            <ProjectCard
                                id={key}
                                images={images}
                                title={projectData.title}
                                description={projectData.description[language]}
                                language={language}
                            />
                        )}
                    </React.Fragment>
                );
            })}
            </section>
        </article>
    );
}