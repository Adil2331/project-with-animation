import React from 'react'
import './style.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const OurProfession = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div
      className={`OurProfession container ${inView ? 'in-view' : ''}`}
      ref={ref}
    >
      <motion.img
        className="profession_img"
        src="https://cherchesusan.com/wp-content/uploads/fly-images/489/f22-1-0x1200.png"
        alt=""
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0, x: -500 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.7 }}
      />
      <motion.div
        className="profession_inner"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={animationVariants}
        transition={{ duration: 0.7 }}
      >
        <motion.h3
          className="profession_subtitle"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Our<span>Profession.</span>
        </motion.h3>
        <motion.h1
          className="profession_title"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Headhunters
        </motion.h1>
        <motion.p
          className="profession_text"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Cherche Susan (Seeking Susan) recruits executives and senior
          executives in France and Europe upon strategic function related to
          brand, products, services, data, and consumers.
        </motion.p>
        <motion.a
          href="#"
          className="profession_link"
          style={{ marginTop: '100px' }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          MORE ABOUT OUR JOB
        </motion.a>
      </motion.div>
    </div>
  )
}

export default OurProfession
