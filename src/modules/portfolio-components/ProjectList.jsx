import ProjectCard from './ProjectCard'
import { swoshImages, placeholderArr } from './portfolioImages'

export default function ProjectContainer() {

    return (

        <article className="grid grid-cols-1 gap-4 max-w-lg m-8 place-items-center space-y-2 text-white">


            <h2 className="w-full text-center pb-2 border-b-2">Mina projekt</h2>

            <ProjectCard images={swoshImages} />
            <ProjectCard images={placeholderArr} />
            <ProjectCard images={placeholderArr} />
            <ProjectCard images={placeholderArr} />
            <ProjectCard images={placeholderArr} />
            <ProjectCard images={placeholderArr} />

        </article>
    );
}