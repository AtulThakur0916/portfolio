import "./skills.css";
import { motion } from "framer-motion";
import { scaleVariants } from "../constants";
import { skills } from "../constants";
import { Skill } from "../interfaces";
import { experiences } from "../constants";
import { Experience } from "../interfaces";
import AppWrap from "../wrapper/appWrap";

const Skills = () => {
    return (
        <>
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="skillCircles"
            >
                {" "}
                <h1>Skills and experience</h1>
            </motion.div>
            <div className="skills-container">
                <motion.div className="skill-list">
                    {skills.map((skill: Skill) => {
                        return (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className="skill app-flex"
                                key={skill.id}
                            >
                                <div
                                    className="app-flex"
                                    style={{
                                        backgroundColor: skill.backgroundColor,
                                    }}
                                >
                                    <img
                                        src={skill.imageUrl}
                                        alt={skill.name}
                                    />
                                </div>
                                <p className="p-text">{skill.name}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

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

export default AppWrap(Skills, "skills", "");
