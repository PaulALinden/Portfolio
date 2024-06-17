import {useLocation} from 'react-router-dom';
import React,{useEffect, useState} from "react";

export default function Project({language}) {

    const paragraphPlaceholder = {
        swe: 'Förbereder information om projektet. Kom tillbaka snart för att få veta mer!',
        eng: 'Preparing information about the project. Come back soon to learn more!'
    }

    const {state} = useLocation();
    const project = state ? state.project : null;

    const [imageUrls, setImageUrls] = useState([]);
    const [imgDescriptions, setImgDescriptions] = useState([]);

    useEffect(() => {
        const urlArr = []
        const descriptionArr = [];
        if (project) {
            const preloadImages = project.images.map(imgData => {
                urlArr.push(imgData[0])
                descriptionArr.push(imgData[1]);
            });

            setImgDescriptions(descriptionArr);
            setImageUrls(urlArr);
        }
    }, [project]);


    return (
        <div
            className="m-8">

            <h1 className="text-2xl m-8 mb-14 text-center">{project.title}</h1>

            <div className="flex flex-wrap">
                {project.images.map((imgUrl, index) => (
                    <React.Fragment key={index}>
                            <div className={`flex flex-col justify-center mb-16 lg:flex-row lg:w-full ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                                <img
                                    src={imgUrl}
                                    alt="Image description"
                                    fetchPriority="high"
                                    decoding="async"
                                    className="lg:w-1/2 mx-4 mb-4 rounded-lg"
                                />
                                <p className="text-center lg:w-1/2 mx-4 self-center">
                                    {imgDescriptions[index] && imgDescriptions[index][language] ? (
                                        imgDescriptions[index][language]
                                    ) : (
                                        language === 'swe' ? paragraphPlaceholder.swe : paragraphPlaceholder.eng
                                    )}
                                </p>
                            </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};