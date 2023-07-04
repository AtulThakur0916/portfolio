import "./header.css";
import { motion } from "framer-motion";
import AppWrap from "../../shared/components/wrapper/appWrap";

const Header = () => {
    return (
        <div className="app-header app-flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app-header-info"
            >
                <div className="app-header-badge">
                    <div className="greeting-badge app-flex">
                        <div>
                            <p className="p-text">Hello World! My name is</p>
                            <h1 className="head-text">João.</h1>
                        </div>
                    </div>
                    <div className="job-tag app-flex">
                        <p className="p-text">Software Engineer</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app-header-image"
            >
                <img
                    src="/joao.jpg"
                    alt="profile"
                    className="profile-picture"
                />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    src="/circle.svg"
                    className="overlay-circle"
                />
            </motion.div>
        </div>
    );
};

export default AppWrap(Header, "home");
