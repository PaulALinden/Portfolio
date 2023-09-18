import ProjectList from "../portfolio-components/ProjectList";

export default function PortfolioPage({language}) {

    return (
        <main className="flex justify-center">
            <ProjectList language={language}/>
        </main>
    );
}
