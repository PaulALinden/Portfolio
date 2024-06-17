import {Link} from 'react-router-dom';

export default function ProjectCard({id,projectData, language}) {
    const imageUrl = projectData.images[0]?.length === 2 ? projectData.images[0][0] : projectData.images[0];

    return (

        <section
            className="col-span-1 flex flex-col items-center text-center space-y-2 pb-8 border-b-2 border-slate-400 dark:border-white">

            <h3 className="text-2xl">{projectData.title}</h3>

            <Link state={{project: projectData}} to={{pathname: `/portfolio/${id}/`}}>
                <img
                    src={imageUrl}
                    alt="image"
                    decoding={"sync"}
                    className="my-4 rounded-lg hover:scale-105 transition-transform duration-300"
                />
            </Link>


            <p className="text-base/7 text-left">{projectData.description[language]}</p>

        </section>
    );
}
