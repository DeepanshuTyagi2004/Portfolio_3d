import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {Tilt} from 'react-tilt'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from './hoc'

const ServiceCard = ({title, index, icon}) => {
  return <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right","spring",0.5*index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary py-5 px-12 rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-center text-white text-[20px] font-bold'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
}

const About = () => {
  return (
    <>
      <motion.div variants={
        textVariant()
      }>
        <p className={
          `${
            styles.sectionSubText
          }`
        }>Introduction</p>
        <p className={
          `${
            styles.sectionHeadText
          }`
        }>Overview.</p>
      </motion.div>
      <motion.p variants={
          fadeIn('', '', 0.1, 1)
        }
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus,
                augue eget rhoncus pellentesque, lacus diam suscipit nibh, quis
                pellentesque augue felis quis quam. Sed risus nibh, placerat eget
                molestie vel, fringilla vel urna. Ut pulvinar ut diam sed finibus.
                Nullam porttitor enim lacus, at feugiat purus euismod vitae. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Praesent a tortor
                velit. Donec id lorem tincidunt, semper velit ac, ornare erat. Integer
                suscipit nunc vitae viverra scelerisque. Nunc varius ex nec quam
                facilisis tristique. In hac habitasse platea dictumst. Cras ut tristique
                diam. Curabitur arcu purus, cursus vitae tristique non, semper vel mi.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
      {
        services.map((service, index) => {
          return <ServiceCard index={index}
            key={
              service.title
            }
            {...service}/>})
      }
      </div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about")
