import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import BestTeam from './components/BestTeam/indext'
import Menu from './components/Menu'
import OurProfession from './components/OurProfession'
import { useLayoutEffect, useRef, useState } from 'react'

function App() {
  const { scrollY } = useViewportScroll()

  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState<number>(0)

  useLayoutEffect(() => {
    const getSize = () => {
      return containerRef.current?.getBoundingClientRect().height ?? 0
    }

    setContainerSize(getSize())

    window.addEventListener('resize', () => {
      setContainerSize(getSize())
    })
  }, [])

  const y = useTransform(scrollY, [0, containerSize], [0, -containerSize])

  const style = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <div className="App">
      <motion.div ref={containerRef} style={{ y: style }}>
        <Menu />
        <BestTeam />
        <OurProfession />
      </motion.div>
    </div>
  )
}
export default App
