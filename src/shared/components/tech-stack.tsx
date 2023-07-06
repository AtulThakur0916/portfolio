import React from "react";

const TechStack: React.FC<{ props: string[] }> = ({ props }) => {
    return (
        <>
            <p className="p-text">
                <span className="bold-text">Tech stack:</span>
                {props.map((tech, index) => (
                    <span key={index}>
                        {" "}
                        {tech}
                        {index === props.length - 1 ? "." : ","}
                    </span>
                ))}
            </p>
        </>
    );
};

export default TechStack;
