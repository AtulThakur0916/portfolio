import "./about.css";
import { motion } from "framer-motion";
import { About } from "../../shared/models/interfaces";
import { abouts } from "../../shared/constants";
import AppWrap from "../../shared/components/wrapper/appWrap";

const AboutMe = () => {
  return (
    <>
      <div className="about-bio">
        <p className="about-welcome p-text">Welcome, nice to have you here!</p>
        <h2 className="head-text">
          {" "}
          I have a strong interest in acquiring knowledge about new
          technologies, logical thinking, analyzing system patterns, solving
          problems, and combining aesthetics with functionality.{" "}
        </h2>
        <p className="p-text">
          I take pride in my ability to understand the big picture and translate
          it into actionable steps, breaking down complex problems into
          manageable tasks. With a proactive mindset, I actively seek feedback
          and iterate on my work, continuously improving the codebase and
          enhancing the overall user experience.{" "}
        </p>
        <p className="p-text">
          Ultimately, my goal as a senior full stack engineer is to leverage my
          experience and skills to drive innovation, deliver exceptional
          results, and make a positive impact on the projects I am involved in.{" "}
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
              <h2 className="bold-text about-titles">{each.title}</h2>
              <p className="p-text">{each.description}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AppWrap(AboutMe, "about");
