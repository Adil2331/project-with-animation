import React from 'react'
import './style.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const BestTeam = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className={`BestTeam ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="team_inner">
        <motion.h1
          className="team_title"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Build the <span>best teams</span> with great people
        </motion.h1>
        <motion.p
          className="team_text"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          Recruitment of managers, experts and senior executives in Data,
          Innovation, Digital, Marketing and Communication.
        </motion.p>
      </div>
      <div className="team_img">
        <motion.img
          src="https://cherchesusan.com/wp-content/uploads/fly-images/419/intro-1-1-1-0x800.png"
          alt=""
          className="team_img-item"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.7, delay: 0.4 }}
        />
      </div>
    </div>
  )
}

export default BestTeam
