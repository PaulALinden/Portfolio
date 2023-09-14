
export default function ProjectCard({ images }) {
    //Add onClick fun to take to expanded projectpage
    return (
        <section className="col-span-1 flex flex-col items-center text-center space-y-2 pb-8 border-b-2">

            <h3>Projekt-rubrik</h3>
            <img src={images[0]} alt="image" className="max-w-sm" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto aliquam quae tenetur. Recusandae, modi iste! Ut, possimus delectus soluta sed laudantium nemo, accusamus amet tempore commodi quo, praesentium officia mollitia.</p>

        </section>
    );
}