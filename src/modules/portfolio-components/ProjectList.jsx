import React from "react";
import ProjectCard from './ProjectCard';
import projectsData from '../../data/portfolio-content';

export default function ProjectList({ language }) {
    const projectDataKeys = Object.keys(projectsData.portfolio);
    const heading = projectsData.heading[language];

    // Class name variables
    const articleClassName = "m-8 place-items-center space-y-2";
    const headingClassName = "w-full text-center text-3xl pb-2 border-b-2";
    const sectionClassName = "grid grid-cols-1 md:grid-cols-2 gap-8";

    return (
        <article className={articleClassName}>
            <h2 className={headingClassName}>{heading}</h2>

            <section className={sectionClassName}>
                {projectDataKeys.map((key) => {
                    const projectData = projectsData.portfolio[key];

                    return (
                        <React.Fragment key={key}>
                            <ProjectCard
                                id={key}
                                projectData={projectData}
                                language={language}
                            />
                        </React.Fragment>
                    );
                })}
            </section>
        </article>
    );
}
