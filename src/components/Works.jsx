import React from 'react'
import { SectionWrapper } from './hoc'
import { projects } from '../constants'
import { styles } from '../styles'
import { github } from '../assets'
import { Tilt } from 'react-tilt'
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'

export const ProjectCard = ({
  index,
  description,
  name,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', 0.5 * index, 1)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full sm:w-[360px] bg-tertiary p-5 rounded-2xl"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-2xl"
          />
          <div className="absolute flex justify-end inset-0 m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="h-10 w-10 black-gradient rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt={name}
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum,
        turpis malesuada sagittis volutpat, ligula nisl faucibus nulla, in
        ultricies turpis magna vel lectus. Phasellus sit amet lacus non felis
        dapibus convallis gravida eget nibh. Cras mollis, odio id maximus
        elementum, nulla ante fringilla arcu.
      </motion.p>

      <div className="flex flex-wrap mt-20 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
