import React from 'react'
import {textVariant} from "../utils/motion";
import {styles} from "../styles";
import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import { motion } from 'framer-motion';
import {technologies} from "../constants";

const TechContent = () => {
  return (
      <React.Fragment>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubTextLight}>My skills</p>
          <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 mt-14">
          {technologies.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
          ))}
        </div>
      </React.Fragment>
  );
};
const Tech: React.FC = () => {
    return <SectionWrapper idName="" Component={TechContent}/>;
};
export default Tech;