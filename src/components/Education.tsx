import { motion } from 'framer-motion';
import React from 'react'
import {SectionWrapper} from "../hoc";
import {textVariant} from "../utils/motion";
import {styles} from "../styles";
import ExperienceCard from "./ExperienceCard";
import {VerticalTimeline} from "react-vertical-timeline-component";
import {educations} from "../constants";

const EducationContent = () => {
  return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
            My academic background
          </p>
          <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
            Education.
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline className="vertical-timeline-custom-line">
            {educations.map((education, index) => (
                <ExperienceCard key={index} experience={education} />
            ))}
          </VerticalTimeline>
        </div>
      </>
  );
};

const Education = () => {
  return <SectionWrapper idName="education" Component={EducationContent}/>;
}

export default Education