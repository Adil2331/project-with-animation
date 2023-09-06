import React from 'react'
import './style.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ChoosingUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div
      className={`ChoosingUs container ${inView ? 'in-view' : ''}`}
      ref={ref}
    >
      <motion.img
        className="choosing_img"
        src="https://cherchesusan.com/wp-content/uploads/fly-images/421/intro-1-3-1-0x1200.png"
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
        className="choosing_inner"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={animationVariants}
        transition={{ duration: 0.7 }}
      >
        <motion.h3
          className="choosing_subtitle"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Choosing<span>Us.</span>
        </motion.h3>
        <motion.h1
          className="choosing_title"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Because this is our playground
        </motion.h1>
        <motion.p
          className="choosing_text"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          We combine your need to our field knowledge and build a strong
          partnership. Together, we design the ideal search prospects that will
          perfectly suit your team. We offer you expert profiles selected with
          finesse and accuracy.
        </motion.p>
        <motion.a
          href="#"
          className="choosing_link"
          style={{ marginTop: '100px' }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          DISCOVER OUR DNA
        </motion.a>
      </motion.div>
    </div>
  )
}

export default ChoosingUs
