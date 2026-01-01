import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { motion, useScroll, useTransform } from 'motion/react'
import Page1 from './containers/Page1/page1.container'
import Page2 from './containers/Page2/page2-container'
import Page3 from './containers/Page3/page3.container'
import Page4 from './containers/Page4/page4.container'
import Ender from './components/ender'
import './App.css'

function App() {
  // Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  //viewport tracker
  const [width, setWidth] = useState(window.innerWidth)
  const [parallax, setParallax] = useState<boolean>(false)
  useEffect(() => {
    const resize = () => setWidth(window.innerWidth)
    addEventListener("resize", resize);
    (() => width >= 800 ? setParallax(true) : setParallax(false)) ();
    console.log(width, parallax)
    return () => removeEventListener("resize", resize)
  }, [width])

  // background parallax
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 3000], [0, parallax ? -750 : 0])
  
  return (
    <div className='app-container'>
      <motion.div className='background' style={{y: backgroundY}}></motion.div>
      <div className='overlay'></div>
      <div className='pages'>
        <Page1 parallax={parallax} />
        <Page2 parallax={parallax}/>
        <Page3 parallax={parallax}/>
        <Page4 parallax={parallax}/>
        {/* <Ender /> */}
        <div className='page-plus'>
          aaaaaa
        </div>
      </div>
    </div>
  )
}

export default App
