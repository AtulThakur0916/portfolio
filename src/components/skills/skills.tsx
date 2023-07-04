import "./skills.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideFromLeft, skills } from "../../shared/constants";
import { Skill } from "../../shared/models/interfaces";
import AppWrap from "../../shared/components/wrapper/appWrap";

const Skills = () => {
    const { ref, inView } = useInView({ threshold: 0.2 });

    return (
        <>
            <motion.div
                variants={slideFromLeft}
                initial="whileOutView"
                animate={inView ? "whileInView" : "whileOutView"}
                className="skills-title"
                ref={ref}
            >
                <h1>Technology Stack</h1>
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
            </div>
        </>
    );
};

export default AppWrap(Skills, "skills");
