import { Link } from 'react-router-dom';

export default function ProjectCard({ id, projectData, language }) {
    const imageUrl = projectData.images[0]?.length === 2 ? projectData.images[0][0] : projectData.images[0];

    // Class name variables
    const cardContainerClassName = "col-span-1 flex flex-col items-center text-center space-y-2 pb-8 border-b-2 border-slate-400 dark:border-white";
    const titleClassName = "text-2xl";
    const imageClassName = "my-4 rounded-lg hover:scale-105 transition-transform duration-300";
    const descriptionClassName = "text-base/7 text-left";

    return (
        <section className={cardContainerClassName}>
            <h3 className={titleClassName}>{projectData.title}</h3>

            <Link state={{ project: projectData }} to={{ pathname: `/portfolio/${id}/` }}>
                <img
                    src={imageUrl}
                    alt="image"
                    className={imageClassName}
                />
            </Link>

            <p className={descriptionClassName}>{projectData.description[language]}</p>
        </section>
    );
}

