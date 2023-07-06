import "./projects.css";
import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../shared/components/wrapper/appWrap";
import { projectFilter, portfolioProjects } from "../../shared/constants";
import { PortfolioProject, AnimatedCard } from "../../shared/models/interfaces";
import { ProjectFilter } from "../../shared/models/project-filter";
import TechStack from "../../shared/components/tech-stack";

const Projects = () => {
    const [filterProject, setfilterProject] =
        useState<PortfolioProject[]>(portfolioProjects);
    const [activeFilter, setActiveFilter] = useState<string>(ProjectFilter.All);
    const [animateCard, setAnimateCard] = useState<AnimatedCard>({
        y: 0,
        opacity: 1,
    });

    useEffect(() => {
        setAnimateCard({ y: 100, opacity: 0 });
        setTimeout(() => {
            setAnimateCard({ y: 0, opacity: 1 });
        }, 500);

        if (activeFilter === ProjectFilter.All) {
            setfilterProject(portfolioProjects);
        } else {
            let filteredDisplay: PortfolioProject[] = [];

            portfolioProjects.forEach((project) => {
                if (project.tag.includes(activeFilter)) {
                    filteredDisplay.push(project);
                }
            });
            setfilterProject(filteredDisplay);
        }
    }, [activeFilter]);

    const handleProjectFilter = (each: string) => {
        setActiveFilter(each);
    };

    return (
        <>
            <h2 className="head-text project-title">
                Some things I have built
            </h2>
            <div className="project-filter">
                {projectFilter.map((each: string, index: number) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleProjectFilter(each)}
                            className={`project-filter-item app-flex p-text ${
                                activeFilter === each ? "active-item" : ""
                            }`}
                        >
                            {each}
                        </div>
                    );
                })}
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="project-portfolio"
            >
                {filterProject.map((each: PortfolioProject) => {
                    return (
                        <div key={each.id} className="project-item app-flex">
                            <a
                                href={each.repositoryUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="project-image app-flex">
                                    <img src={each.imageUrl} alt={each.title} />
                                    <motion.div
                                        whileHover={{ opacity: [0, 1] }}
                                        transition={{
                                            duration: 0.25,
                                            ease: "easeInOut",
                                            staggerChildren: 0.5,
                                        }}
                                        className="project-hover app-flex"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className="app-flex"
                                        >
                                            <AiFillGithub />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </a>
                            <div className="project-content app-flex">
                                <h4 className="bold-text head-text">
                                    {each.title}
                                </h4>
                                <p className="p-text">{each.description}</p>

                                <TechStack
                                    props={each.techStack.sort()}
                                ></TechStack>

                                <div className="project-tag app-flex">
                                    <p className="p-text"> {each.tag[0]}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </>
    );
};

export default AppWrap(Projects, "projects");