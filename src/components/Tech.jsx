import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from './hoc'

const Tech = () => {
  return (
    <div className='flex flex-wrap gap-10 flex-row justify-center'>
      {technologies.map((tech) => (
        <div className='w-28 h-28' key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech');