import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
import React from "react";

type SectionWrapperProps = {
    idName: string | undefined;
    Component: React.FC;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({ Component, idName }) => {
    return (
        <React.Fragment>
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

                <Component />
            </motion.section>
        </React.Fragment>
    );
};

export default SectionWrapper;
