import { Link } from 'react-router-dom';

export default function ProjectCard({ id, title, description, images }) {

    return (

        <section className="col-span-1 flex flex-col items-center text-center space-y-2 pb-8 border-b-2 border-slate-400 dark:border-white">

            <h3 className="text-2xl">{title}</h3>

            <Link to={`/portfolio/${id}`}>
                <img src={images[0]} alt="image" className="" />
            </Link>


            <p className="text-base/7">{description}</p>

        </section>
    );
}
