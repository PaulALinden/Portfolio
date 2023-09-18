import ProjectCard from './ProjectCard'
import { imageArr } from './portfolioImages'
import projectsData from '../../data/portfolio-content.json'

export default function ProjectContainer({language}) {

    const projectDataKeys = Object.keys(projectsData.portfolio);

    return (
        <article className="grid grid-cols-1 gap-4  max-w-3xl m-8 place-items-center space-y-2 text-white">
            <h2 className="w-full text-center pb-2 border-b-2">Mina projekt</h2>

            {projectDataKeys.map((key, index) => {
                const projectData = projectsData.portfolio[key];
                const images = imageArr[index];

                return (
                    <ProjectCard
                        id={index}
                        images={images}
                        title={projectData.title}
                        description={projectData.description[language]}
                    />
                );
            })}

        </article>
    );
}