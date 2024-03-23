import {useLocation} from 'react-router-dom';


export default function Project() {
    const {state} = useLocation();
    const project = state ? state.project : null;

    console.log(project)
    return (

        <div
            className="col-span-1 flex flex-col items-center text-center space-y-2 pb-8 border-b-2 border-slate-400 dark:border-white">
            <div className="grid grid-cols-1 gap-4  max-w-3xl m-8 place-items-center space-y-2 ">
                <h1 className="text-2xl">{project.title}</h1>

                {project.images.map((imgUrl, index) => (
                    <div>
                        <img key={index} src={imgUrl} alt="Image description"/>
                        <p>
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                            Här ska skrivas en paragraph kan du tro
                        </p>
                    </div>
                ))}

            </div>
        </div>
    );
};


/*
*
* <h1 className="h-fit">Coming soon....</h1>
* <Link to="/portfolio" className="bg-slate-900  text-white py-2 px-4 rounded transition-transform transform hover:scale-105">Back to Portfolio</Link>
*
* */