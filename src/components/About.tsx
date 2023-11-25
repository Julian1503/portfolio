import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const AboutContent : React.FC = () => {
  return (
      <>
          <div className="-mt-[6rem]">
              <motion.div variants={textVariant()}>
                  <p className={styles.sectionSubText}>Introduction</p>
                  <h2 className={styles.sectionHeadText}>Overview.</h2>
              </motion.div>

              <motion.p
                  variants={fadeIn('', '', 0.1, 1)}
                  className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
                  As a highly skilled Software Developer with over three years of experience, I specialize in
                  C#, Java, Springboot, .NET, and React.js. Currently in the process of relocating to Australia
                  from Argentina, I am eager to contribute my expertise to innovative projects in the Australian IT industry.

                  My background includes a successful tenure at Sovos, where I played a key role in the development team,
                  contributing to the creation of new features, significantly improving process efficiency, and maintaining
                  tax compliance software products. Proficient in backend development with C#, Java, and TypeScript,
                  I bring a dynamic skill set to every project.

                  Recognized for my passion for creating high-quality software solutions, incredible collaboration and adaptability,
                  I am excited about the opportunity to contribute to the success of Australian tech projects.
              </motion.p>

              <div className="mt-20 flex flex-wrap gap-10">
                  {/*{For each service put a ServiceCard TODO}*/}
              </div>
          </div>
      </>
  );
};

const About: React.FC = () => {
    return <SectionWrapper idName="about" Component={AboutContent}/>;
};
export default About;