// import React from 'react'
// import './style.css'
// import { motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

// const BestTeam = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//   })

//   const animationVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   }

//   return (
//     <div className={`BestTeam ${inView ? 'in-view' : ''}`} ref={ref}>
//       <div className="team_inner">
//         <motion.h1
//           className="team_title"
//           initial="hidden"
//           animate={inView ? 'visible' : 'hidden'}
//           variants={animationVariants}
//           transition={{ duration: 0.7, delay: 0.8 }}
//         >
//           Build the <span>best teams</span> with great people
//         </motion.h1>
//         <motion.p
//           className="team_text"
//           initial="hidden"
//           animate={inView ? 'visible' : 'hidden'}
//           variants={animationVariants}
//           transition={{ duration: 0.7, delay: 0.9 }}
//         >
//           Recruitment of managers, experts and senior executives in Data,
//           Innovation, Digital, Marketing and Communication.
//         </motion.p>
//       </div>
//       <div className="team_img">
//         <motion.img
//           src="https://cherchesusan.com/wp-content/uploads/fly-images/419/intro-1-1-1-0x800.png"
//           alt=""
//           className="team_img-item"
//           initial="hidden"
//           animate={inView ? 'visible' : 'hidden'}
//           variants={{
//             hidden: { opacity: 0, x: -50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//         />
//       </div>
//     </div>
//   )
// }

// export default BestTeam

import './style.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React, { useLayoutEffect, useState } from 'react'
import {
  useSpringRef,
  animated,
  useTransition,
  useSpring,
} from '@react-spring/web'

const IMAGES1 = [
  'https://cherchesusan.com/wp-content/uploads/fly-images/490/h21-0x2400.png',
  'https://cherchesusan.com/wp-content/uploads/fly-images/419/intro-1-1-1-0x2400.png',
  'https://cherchesusan.com/wp-content/uploads/fly-images/487/f21-1-0x2400.png',
  'https://cherchesusan.com/wp-content/uploads/fly-images/486/h11-1-0x2400.png',
]
const IMAGES2 = [
  'https://cherchesusan.com/wp-content/uploads/fly-images/492/h22-1-0x800.png',
  'https://cherchesusan.com/wp-content/uploads/fly-images/421/intro-1-3-1-0x800.png',
  'https://cherchesusan.com/wp-content/uploads/fly-images/489/f22-1-0x800.png',
  'https://cherchesusan.com/wp-content/uploads/fly-images/484/h12-1-0x800.png',
]
const IMAGES3 = [
  'https://cherchesusan.com/wp-content/uploads/fly-images/491/h23-1-650x1160-c.png',
  'https://cherchesusan.com/wp-content/uploads/fly-images/420/intro-1-2-1-650x1160-c.png',
  'https://cherchesusan.com/wp-content/uploads/fly-images/488/f23-1-650x1160-c.png',
  'https://cherchesusan.com/wp-content/uploads/fly-images/485/h13-1-650x1160-c.png',
]

const BestTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const springApi = useSpringRef()

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
    },
    enter: {
      clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
    },
    leave: {
      clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
    },
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item) {
        setActiveIndex(activeIndex === IMAGES1.length - 1 ? 0 : activeIndex + 1)
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 700,
    },
    delay: 2000,
    ref: springApi,
  })

  useLayoutEffect(() => {
    springApi.start()
  }, [activeIndex])

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
      <div style={{ height: '800px' }}>
        <div className="team_img">
          {transitions((springs, item) => (
            <animated.div className="img__container" style={springs}>
              <img src={IMAGES1[item]} />
            </animated.div>
          ))}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column-reverse',
            }}
          >
            {transitions((springs, item) => (
              <animated.div className="img__container2" style={springs}>
                <img src={IMAGES2[item]} />
              </animated.div>
            ))}
            {transitions((springs, item) => (
              <animated.div className="img__container3" style={springs}>
                <img src={IMAGES3[item]} />
              </animated.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestTeam
