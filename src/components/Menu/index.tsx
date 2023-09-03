// import React, { useEffect, useState } from 'react'
// import './style.css'

// const Menu = () => {
//   const [isMenuVisible, setIsMenuVisible] = useState(true)

//   useEffect(() => {
//     let prevScrollY = window.scrollY

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY

//       if (currentScrollY > prevScrollY) {
//         // Пользователь скроллит вниз, скрываем меню
//         setIsMenuVisible(false)
//       } else {
//         // Пользователь скроллит вверх, показываем меню
//         setIsMenuVisible(true)
//       }

//       prevScrollY = currentScrollY
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   return (
//     <div
//       className={`Menu  ${isMenuVisible ? '' : 'hidden'}`}
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         background: '#fff',
//         zIndex: 1000,
//         transition: 'transform 0.3s ease',
//       }}
//     >
//       <div className="menu_inner">
//         <a href="#" className="menu_link">
//           Cherche <span>Susan</span>.
//         </a>
//         <p className="menu_text">Headhunters & Advisers</p>
//       </div>
//       <ul className="menu_nav">
//         <li className="menu_nav-item">Our Offers</li>
//         <li className="menu_nav-item">Spontaneous Application</li>
//         <li className="menu_nav-item">En</li>
//         <li className="menu_nav-item"></li>
//       </ul>
//     </div>
//   )
// }

// export default Menu

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import './style.css'

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    let prevScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > prevScrollY) {
        setIsMenuVisible(false)
      } else {
        setIsMenuVisible(true)
      }

      prevScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isMenuVisible) {
      controls.start({ y: 0, opacity: 1 })
    } else {
      controls.start({ y: -50, opacity: 0 })
    }
  }, [isMenuVisible, controls])

  return (
    <motion.div
      className={`Menu ${isMenuVisible ? '' : 'hidden'}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: '#fff',
        zIndex: 1000,
        transition: 'transform 0.3s ease',
      }}
      animate={controls}
    >
      <div className="menu_inner">
        <motion.a
          href="#"
          className="menu_link"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Cherche <span>Susan</span>.
        </motion.a>
        <motion.p
          className="menu_text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Headhunters & Advisers
        </motion.p>
      </div>
      <ul className="menu_nav">
        <motion.li
          className="menu_nav-item"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Offers
        </motion.li>
        <motion.li
          className="menu_nav-item"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Spontaneous Application
        </motion.li>
        <motion.li
          className="menu_nav-item"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          En
        </motion.li>
        <motion.li
          className="menu_nav-item"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {/* Ваш четвертый элемент */}
        </motion.li>
      </ul>
    </motion.div>
  )
}

export default Menu
