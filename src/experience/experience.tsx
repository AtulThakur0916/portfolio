import "./experience.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { slideFromRight, experiences } from "../constants";
import { Experience } from "../interfaces";
import AppWrap from "../wrapper/appWrap";

const WorkExperience = () => {
    const { ref, inView } = useInView({ threshold: 0.2 });

    return (
        <>
            <motion.div
                variants={slideFromRight}
                initial="whileOutView"
                animate={inView ? "whileInView" : "whileOutView"}
                className="experience-title"
                ref={ref}
            >
                <h1>Experience</h1>
            </motion.div>
            <div className="work-experience-container">
                <motion.div className="work-experience">
                    {experiences.map((work: Experience) => {
                        return (
                            <div key={work.id}>
                                <motion.div
                                    whileInView={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.5 }}
                                    className="individual-work-experience"
                                    key={work.name}
                                >
                                    <h4 className="bold-text title-name">
                                        {work.name}{" "}
                                    </h4>
                                    <span className="p-text company">
                                        <a
                                            href={work.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            @{work.company}
                                        </a>
                                    </span>

                                    <p>{work.period}</p>

                                    <ul>
                                        {work.achievements.map(
                                            (item, index) => {
                                                return (
                                                    <li key={index}>{item}</li>
                                                );
                                            }
                                        )}
                                    </ul>

                                    <p className="p-text">
                                        <span className="bold-text">
                                            Tech stack:{" "}
                                        </span>
                                        {work.techStack}
                                    </p>
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(WorkExperience, "experience");
