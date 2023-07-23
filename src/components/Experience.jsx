import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { SectionWrapper } from './hoc';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';

export const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#04061e', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[20px] font-bold text-white">{experience.title}</h3>
        <p className="text-secondary m-0 font-semibold text-[16px]">
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li 
            key={`experience-point-${index}`}
            className='text-white-100 tracking-wider text-[14px] pl-1'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=' w-[fit-content] mx-auto'>
        <h2 className={styles.sectionSubText}>what I have done so far</h2>
        <h1 className={styles.sectionHeadText}>Work Experience.</h1>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work');