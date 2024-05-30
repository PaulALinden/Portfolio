import React from "react";
import ProjectCard from './ProjectCard'
import projectsData from '../../data/portfolio-content'

export default function ProjectList({language}) {

    const projectDataKeys = Object.keys(projectsData.portfolio);
    const heading = projectsData.heading[language];

    return (
        <article className=" m-8 place-items-center space-y-2 ">

            <h2 className="w-full text-center text-3xl pb-2 border-b-2">{heading}</h2>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectDataKeys.map((key, index) => {
                    const projectData = projectsData.portfolio[key];

                    return (
                        <React.Fragment key={key}>

                            <ProjectCard
                                id={key}
                                images={projectData.images}
                                title={projectData.title}
                                description={projectData.description[language]}
                            />

                        </React.Fragment>
                    );
                })}
            </section>
        </article>
    );
}