
export default function ProjectCard({ title, description, images }) {

    return (
        <section className="col-span-1 flex flex-col items-center text-center space-y-2 pb-8 border-b-2">

            <h3>{title}</h3>
            <img src={images[0]} alt="image" className="" />
            <p>{description}</p>

        </section>
    );
}