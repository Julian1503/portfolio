import {
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type ExperienceCardProps = {
    experience: {
        title: string;
        company_name: string;
        date: string;
        link:string;
        icon: string;
        iconBg: string;
    };
}

const ExperienceCard = ({ experience } : ExperienceCardProps) => (
    <VerticalTimelineElement
        contentStyle={{
            background: '#eaeaec',
            color: '#292929',
            boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        }}
        contentArrowStyle={{
            borderRight: '7px solid  #232631',
        }}
        date={
            <div>
                <h3 className="text-dim text-[18px] font-bold font-beckman">
                    {experience.date}
                </h3>
            </div>
        }
        iconStyle={{ background: experience.iconBg }}
        icon={
            <a target="_blank" href={experience.link} className="flex justify-center items-center w-full h-full">
                <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                />
            </a>
        }>
        <div>
            <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
                {experience.title}
            </h3>
            <p
                className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
                style={{ margin: 0 }}>
                {experience.company_name}
            </p>
        </div>
    </VerticalTimelineElement>
);

export default ExperienceCard;