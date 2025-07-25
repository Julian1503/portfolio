import { motion } from "framer-motion";
import {fadeIn} from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon } : ServiceCardProps) => {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className="xs:max-w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-jetLight rounded-[20px] py-5 px-12 min-h-72 flex justify-evenly items-center flex-col">
                <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                <h3 className="text-taupe text-[18px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
};

export default ServiceCard;