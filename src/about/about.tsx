import "./about.css";
import { motion } from "framer-motion";
import { About } from "../interfaces";
import { abouts } from "../constants";
import AppWrap from "../wrapper/appWrap";

const AboutMe = () => {
    return (
        <>
            <div className="about-bio">
                <p className="about-welcome p-text">
                    Welcome, nice to have you here!
                </p>
                <h2 className="head-text">
                    {" "}
                    I am keen on learning new technologies, logic and systems'
                    patterns, problem solving and combining aesthetics with
                    functionality.{" "}
                </h2>
                <p className="p-text">
                    Currently, I am focused on building customer tailored
                    products at{" "}
                    <a
                        href="https://www.maibornwolff.de/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="company">MaibornWolff</span>
                    </a>
                    .
                </p>
                <p className="p-text">
                    Before pursuing a career in software engineering, I had the
                    opportunity to explore my passion for design, fine arts, and
                    entrepreneurship. Through these experiences, I honed my
                    creativity, attention to detail, and problem-solving skills
                    - all of which have proven invaluable in my work as a
                    software engineer. Outside of coding, I love to unwind by
                    playing chess and tending to my garden.{" "}
                </p>
            </div>
            <div className="app-profiles">
                {abouts.map((each: About) => {
                    return (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                duration: 0.5,
                                type: "tween",
                            }}
                            className="profile-item"
                            key={each.id}
                        >
                            <img src={each.imgUrl} alt={each.title} />
                            <h2 className="bold-text about-titles">
                                {each.title}
                            </h2>
                            <p className="p-text">{each.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
};

export default AppWrap(AboutMe, "about");
