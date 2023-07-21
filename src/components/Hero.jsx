// eslint-disable-next-line no-unused-vars
import React from 'react'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 flex flex-row items-start gap-5 top-[120px] mx-auto max-w-7xl`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="bg-red-800 rounded-full w-5 h-5" />
          <div className=" bg-gradient-to-b from-red-800 w-1 sm:h-80 h-40" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-red-800">Deepanshu.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in
            sem nec est varius consequat sit amet ut leo. Nunc ut pulvinar ante.
            Nulla dignissim magna id erat egestas faucibus.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute w-full flex items-center justify-center xs:bottom-6 bottom-28">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-xl border-4 items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 25, 0],
              }}
              transition={{
                duration: 1.0,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-white"
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero
