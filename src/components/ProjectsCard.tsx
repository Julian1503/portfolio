import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion";
import {github, live, liveHover} from "../assets";

type ProjectCardProps = {
    id: string;
    name: string;
    description: string;
    image: string;
    repo: string[];
    tags: {
        name: string;
        color: string;
    }[];
    demo?: string;
    index: number;
    active: string;
    handleClick: (id: string) => void;
};

const ProjectCard = ({
                         id,
                         name,
                         description,
                         image,
                        tags,
                         repo,
                         demo,
                         index,
                         active,
                         handleClick,
                     } : ProjectCardProps) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className={`relative ${
                active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
            } flex items-center justify-center sm:min-w-[170px]
      min-w-[10rem] sm:h-[420px] h-80 cursor-pointer card-shadow`}
            onClick={() => handleClick(id)}>
            <div
                className="absolute top-0 left-0 z-10 bg-jetLight
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

            <img
                src={image}
                alt={name}
                className="absolute w-full h-full object-cover rounded-[24px]"
            />

            {active !== id ? (
                <div className="flex items-center justify-start pr-[4.5rem]">
                    <h3
                        className="font-extrabold font-beckman uppercase w-full
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
                        {name}
                    </h3>
                </div>
            ) : (
                <>
                    <div
                        className="absolute bottom-0 p-8 justify-start w-full
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
                        <div className="absolute inset-0 flex justify-end m-3">
                            {
                                repo.map((link,index) => (
                                    <div
                                        key={index}
                                        onClick={() => window.open(link, '_blank')}
                                        className="bg-night ml-0.5 mr-0.5 sm:w-11 sm:h-11 w-10 h-10 rounded-full
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                                        <img
                                            src={github}
                                            alt="source code"
                                            className="w-4/5 h-4/5 object-contain"
                                        />
                                    </div>))
                            }
                        </div>

                        <h2
                            className="font-bold sm:text-[32px] text-[24px]
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
                            {name}
                        </h2>
                        <p
                            className="text-silver sm:text-[14px] text-[12px]
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
                            {description}
                        </p>
                        { demo && (
                            <button
                                className="live-demo flex justify-between
              sm:text-[16px] text-[14px] text-timberWolf
              font-bold font-beckman items-center py-5 pl-2 pr-3
              whitespace-nowrap gap-1 sm:w-36 sm:h-12
              w-32 h-11 rounded-[10px] glassmorphism
              sm:mt-[22px] mt-[16px] hover:bg-battleGray
              hover:text-eerieBlack transition duration-[0.2s]
              ease-in-out"
                                onClick={() => window.open(demo, '_blank')}
                                onMouseOver={() => {
                                    document
                                        .querySelector('.btn-icon')
                                        ?.setAttribute('src', liveHover);
                                }}
                                onMouseOut={() => {
                                    document
                                        .querySelector('.btn-icon')
                                        ?.setAttribute('src', live);
                                }}>
                                <img
                                    src={live}
                                    alt="live"
                                    className="btn-icon sm:w-8 sm:h-8
                  w-7 h-7 object-contain"
                                />
                                LIVE DEMO
                            </button>
                        )}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`bg-night px-2 py-1 rounded-md  z-10
                                text-[12px] text-silver font-medium hover:bg-${tag.color}`}>
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default ProjectCard;