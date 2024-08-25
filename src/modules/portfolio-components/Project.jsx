import { useLocation } from 'react-router-dom';
import React from "react";

export default function Project({ language }) {

    const { state } = useLocation();
    const project = state ? state.project : null;

    // Class name variables
    const containerClassName = "m-8";
    const titleClassName = "text-2xl m-8 mb-14 text-center";
    const imageWrapperClassName = "flex flex-wrap";
    const imgContainerBaseClassName = "flex flex-col justify-center mb-16 lg:flex-row lg:w-full";
    const imgClassName = "lg:w-1/2 mx-4 mb-4 rounded-lg";
    const descriptionClassName = "text-center lg:w-1/2 mx-4 self-center";

    return (
        <div className={containerClassName}>
            <h1 className={titleClassName}>{project?.title}</h1>

            <div className={imageWrapperClassName}>
                {project?.images.map((img, index) => (
                    <React.Fragment key={index}>
                        <div className={`${imgContainerBaseClassName} ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                            <img
                                src={img[0]}
                                alt="Image"
                                className={imgClassName}
                            />
                            <p className={descriptionClassName}>
                                {img[1][language] ? (
                                    img[1][language]
                                ):null}
                            </p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

