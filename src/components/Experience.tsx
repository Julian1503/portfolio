import { motion } from 'framer-motion';
import React from 'react'
import {SectionWrapper} from "../hoc";
import {textVariant} from "../utils/motion";
import {styles} from "../styles";
import ExperienceCard from "./ExperienceCard";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {download, downloadHover, resume} from "../assets";
import {experiences} from "../constants";

const ExperienceContent = () => {
  return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
            What I've done so far
          </p>
          <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
            Work Experience.
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline className="vertical-timeline-custom-line">
            {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
            ))}
            <VerticalTimelineElement
                contentStyle={{
                  background: '#eaeaec',
                  color: '#292929',
                  boxShadow:
                      'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid  #232631',
                }}
                iconStyle={{ background: '#333333' }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={resume}
                        alt="resume"
                        className="w-[45%] h-[45%] object-contain"
                    />
                  </div>
                }>
              <button
                  className="live-demo flex justify-between
              sm:text-[18px] text-[14px] text-timberWolf
              font-bold font-beckman items-center py-5 pl-3 pr-3
              whitespace-nowrap gap-1 sm:w-36 sm:h-14
              w-32 h-11 rounded-[10px] bg-jetLight
              sm:mt-[22px] mt-[16px] hover:bg-battleGray
              hover:text-eerieBlack transition duration-[0.2s]
              ease-in-out"
                  onClick={() =>
                      window.open(
                          'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:fc7b6c11-6fde-472b-8db1-9d99ddef99ce',
                          '_blank'
                      )
                  }
                  onMouseOver={() => {
                    document
                        .querySelector('.download-btn')
                        ?.setAttribute('src', downloadHover);
                  }}
                  onMouseOut={() => {
                    document
                        .querySelector('.download-btn')
                        ?.setAttribute('src', download);
                  }}>
                MY RESUME
                <img
                    src={download}
                    alt="download"
                    className="download-btn sm:w-6 sm:h-6
                w-5 h-5 object-contain"
                />
              </button>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </>
  );
};

const Experience = () => {
  return <SectionWrapper idName="experience" Component={ExperienceContent}/>;
}

export default Experience