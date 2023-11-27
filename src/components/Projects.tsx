import React, {useState} from 'react'
import {SectionWrapper} from "../hoc";
import ProjectCard from "./ProjectsCard";
import {styles} from "../styles";
import {fadeIn, staggerContainer, textVariant} from "../utils/motion";
import { motion } from 'framer-motion';
import {projects} from "../constants";

const ProjectsContent = () => {
    const [active, setActive] = useState('project-2');

    return (
        <div className="-mt-[6rem]">
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Case Studies</p>
                <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
                    These projects demonstrate my expertise with practical examples of
                    some of my work, including brief descriptions and links to code
                    repositories and live demos. They showcase my ability to tackle
                    intricate challenges, adapt to various technologies, and efficiently
                    oversee projects.
                </motion.p>
            </div>

            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            index={index}
                            {...project}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

const Projects: React.FC = () => {
    return <SectionWrapper idName="projects" Component={ProjectsContent}/>;
}

export default Projects;