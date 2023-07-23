import React from 'react'
import { testimonials } from '../constants'
import { SectionWrapper } from './hoc'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

const FeedbackCard = ({
  index,
  name,
  designation,
  testimonial,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.5 * index, 1)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white text-[48px] font-bold">"</p>
      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        <div className='mt-7 flex items-center justify-between gap-1'>
          <div className='flex flex-1 flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span>{name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>
          <img 
            src={image}
            alt={name}
            className='rounded-full w-10 h-10 object-cover'
          />
        </div>
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <>
      <div className="bg-black-100 mt-12 rounded-[20px]">
        <div
          className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>What others say</p>
            <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
          </motion.div>
        </div>
        <div className={`-mt-20 ${styles.paddingX} pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Feedbacks, '')
