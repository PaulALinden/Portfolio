import ProjectCard from './ProjectCard'
import { imageArr } from './PortfolioImages'
import projectsData from '../../data/portfolio-content.json'

export default function ProjectList({ language }) {

    const projectDataKeys = Object.keys(projectsData.portfolio);
    const heading = projectsData.heading[language];

    return (
        <article className="grid grid-cols-1 gap-4  max-w-3xl m-8 place-items-center space-y-2 ">
            <h2 className="w-full text-center text-3xl pb-2 border-b-2">{heading}</h2>

            {projectDataKeys.map((key) => {
                const projectData = projectsData.portfolio[key];
                const images = imageArr[projectDataKeys.indexOf(key)];

                return (

                    <ProjectCard
                        key={key}
                        id={key}
                        images={images}
                        title={projectData.title}
                        description={projectData.description[language]}
                    />

                );
            })}

        </article>
    );
}