import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { motion, useScroll, useTransform } from 'motion/react'
import Page1 from './containers/Page1/page1.container'
import Page2 from './containers/Page2/page2-container'
import Page3 from './containers/Page3/page3.container'
import Page4 from './containers/Page4/page4.container'
import Ender from './components/ender'
import './App.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const { scrollY } = useScroll()

  const backgroundY = useTransform(scrollY, [0, 3000], [0, -750])

  return (
    <div className='app-container'>
      <motion.div className='background' style={{y: backgroundY}}></motion.div>
      <div className='overlay'></div>
      <div className='pages'>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Ender />
      </div>
    </div>
  )
}

export default App
