// import React from 'react'
// import './style.css'

// const MultiSpecialists = () => {
//   return (
//     <div className="MultiSpecialists">
//       <div className="specialists_inner">
//         <div className="specialists_inner-left">
//           <h3 className="specialists_subtitle">
//             Multi<span>Specialists.</span>
//           </h3>
//           <div>
//             <h1 className="specialists_title">
//               Data, Analytics & Research Digital Marketing Innovation, R&D
//               Communication
//             </h1>
//             <a href="#" className="specialists_link">
//               DISCOVER OUR EXPERTISES
//             </a>
//           </div>
//         </div>
//         <img
//           src="https://cherchesusan.com/wp-content/uploads/fly-images/490/h21-0x1200.png"
//           alt=""
//           className="specialists_img"
//         />
//       </div>
//     </div>
//   )
// }

// export default MultiSpecialists

import React from 'react'
import './style.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MultiSpecialists = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className={`MultiSpecialists ${inView ? 'in-view' : ''}`} ref={ref}>
      <div className="specialists_inner">
        <div className="specialists_inner-left">
          <motion.h3
            className="specialists_subtitle"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Multi<span>Specialists.</span>
          </motion.h3>
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.h1
              className="specialists_title"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Data, Analytics & Research Digital Marketing Innovation, R&D
              Communication
            </motion.h1>
            <motion.a
              href="#"
              className="specialists_link"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              DISCOVER OUR EXPERTISES
            </motion.a>
          </motion.div>
        </div>
        <motion.img
          src="https://cherchesusan.com/wp-content/uploads/fly-images/490/h21-0x1200.png"
          alt=""
          className="specialists_img"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, delay: 1 }}
        />
      </div>
    </div>
  )
}

export default MultiSpecialists
