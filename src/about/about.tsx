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
                    Prior to becoming a Software Engineer I studied Fashion
                    Design, Fine Arts and ran an e-commerce business. When I am
                    not coding, I enjoy playing chess and gardening.{" "}
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

export default AppWrap(AboutMe, "about", "");
