// import React from 'react'
// import './style.css'

// const Menu = () => {
//   return (
//     <div className="Menu container">
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

// import { motion, useViewportScroll } from 'framer-motion'
// import './style.css'

// const Menu = () => {
//   const { scrollYProgress } = useViewportScroll()
//   const isScrollingUp = scrollYProgress.get() < 0

//   return (
//     <motion.div
//       initial={{ y: -100 }}
//       animate={{ y: isScrollingUp ? 0 : -100 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="Menu container">
//         <div className="menu_inner">
//           <a href="#" className="menu_link">
//             Cherche <span>Susan</span>.
//           </a>
//           <p className="menu_text">Headhunters & Advisers</p>
//         </div>
//         <ul className="menu_nav">
//           <li className="menu_nav-item">Our Offers</li>
//           <li className="menu_nav-item">Spontaneous Application</li>
//           <li className="menu_nav-item">En</li>
//           <li className="menu_nav-item"></li>
//         </ul>
//       </div>
//     </motion.div>
//   )
// }

// export default Menu

import React, { useEffect, useState } from 'react'
import './style.css'

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true)

  useEffect(() => {
    let prevScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > prevScrollY) {
        // Пользователь скроллит вниз, скрываем меню
        setIsMenuVisible(false)
      } else {
        // Пользователь скроллит вверх, показываем меню
        setIsMenuVisible(true)
      }

      prevScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`Menu  ${isMenuVisible ? '' : 'hidden'}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: '#fff',
        zIndex: 1000,
        transition: 'transform 0.3s ease',
      }}
    >
      <div className="menu_inner">
        <a href="#" className="menu_link">
          Cherche <span>Susan</span>.
        </a>
        <p className="menu_text">Headhunters & Advisers</p>
      </div>
      <ul className="menu_nav">
        <li className="menu_nav-item">Our Offers</li>
        <li className="menu_nav-item">Spontaneous Application</li>
        <li className="menu_nav-item">En</li>
        <li className="menu_nav-item"></li>
      </ul>
    </div>
  )
}

export default Menu
