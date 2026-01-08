import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import Page1 from './containers/Page1/page1.container'
import Page2 from './containers/Page2/page2-container'
import Page3 from './containers/Page3/page3.container'
import Page4 from './containers/Page4/page4.container'
import Ender from './components/ender'
import './App.css'
import { getAllData } from './api/getAllData'
import type { getAllDataTypes } from './types/getAllDataTypes'
import { Rings, ThreeDots, Oval, TailSpin } from 'react-loader-spinner'

function App() {
  const [ data, setData ] = useState<getAllDataTypes>()
  const [ isNull, setIsNull ] = useState<boolean>(false)

  // fetch data
  useEffect(() => {
    window.scrollTo(0, 0)

    setTimeout(() => {
      fetchData()
    }, 1000)
  }, [])

  const fetchData = async () => {
    const data: getAllDataTypes | null = await getAllData()
    // console.log(data)
    setTimeout(() => {
      if (data == null) {
        setIsNull(true)
      } else {
        setData(data)
      }
    }, 2000)
  }

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
  
  const main = (
    <motion.div 
      className='app-container'
      initial={{
        y: window.innerHeight
      }}
      animate={{
        y: 0
      }}
      transition={{
        type: "spring",
        damping: 20,
        onUpdate: () => window.dispatchEvent(new Event('resize'))
      }}
    >
      <div className='pages'>
        <Page1 parallax={parallax} />
        <Page2 parallax={parallax} data={data ? data : {projects: [], techStacks: []}}/>
        <Page3 parallax={parallax} data={data ? data : {projects: [], techStacks: []}}/>
        <Page4 parallax={parallax}/>
        {/* <Ender /> */}
        <div className='page-plus'>
            <p>&copy; 2025-2026 Faris Kahlil Haidar. All Rights Reserved.</p>
            <div className='filler'> </div>
        </div>
      </div>
    </motion.div>
  )

  const loadingState = (
    <motion.div 
      initial={{
        y: -window.innerHeight
      }}
      animate={{
        y: 0,
        transition: {
          delay: 0.3,
          type: "spring",
          damping: 20
        }
      }}
      className='relative w-screen font-[Alata]'>
        {/* wave and background */}
        {!data && <motion.div
          key={"wave-1"}
          exit={{
            y: -window.innerHeight
          }}
          transition={{
            delay: 0.7,
            type: "spring",
            damping: 20
          }}
          className='relative z-10 -translate-y-17'

        >
          <div className='w-screen h-[85vh] bg-[#2C2C2C]' />
          <div style={{backgroundImage: "url('./Vector-1.svg')" }}  className='-scale-y-100 bg-repeat-x w-screen h-28 -translate-y-1'  />
          <AnimatePresence>
            {/* element */}
            {!data && !isNull && <motion.div
              key={"element"}
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 100,
                transition: {
                  delay: 0.7
                }
              }}
              exit={{
                opacity: 0
              }}
              className='absolute flex flex-col items-center justify-center h-screen top-0 w-full text-white z-11 gap-5'
            >
              {/* <p className='text-center text-4xl'>PREPARE TO ENTER</p> */}
              {/* <div className='h-px w-100 bg-white/80' /> */}
              <div className='flex justify-center items-center gap-10'>
                <p className='hidden sm:block md:text-xl lg:text-2xl font-light text-white/70'><span className='font-normal text-white'>Fetching data </span>from the server</p>
                <TailSpin
                  height={window.innerWidth > 625 ? 30 : 50}
                  width={window.innerWidth > 625 ? 30 : 50}
                  color='#FFFFFF'
                />
              </div>
            </motion.div>}
            {isNull && <motion.div
              key={"element-2"}
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 100,
                transition: {
                  delay: 0.7
                }
              }}
              exit={{
                opacity: 0
              }}
              className='absolute flex flex-col items-center justify-center h-screen top-0 w-full text-white z-11 gap-5'
            >
              <div>
                <p className='hidden sm:block md:text-xl lg:text-2xl font-light text-white/85'>Sorry, couldn't fetch information from the server</p>
              </div>
            </motion.div>}
          </AnimatePresence>
        </motion.div>}
        {!data && <motion.div className='relative z-9 -translate-y-120 '
          key={"wave-2"}
          exit={{
            y: -window.innerHeight
          }}
          transition={{
            delay: 0.72,
            type: "spring",
            damping: 20
          }}
        >
          <div className='w-screen h-[45vh] bg-[#929AAB]' />
          <div style={{backgroundImage: "url('./Vector-2.svg')" }}  className='-scale-y-100 bg-repeat-x w-screen h-28 -translate-y-1'  />
        </motion.div>}
        {!data && <motion.div className='relative z-8 -translate-y-245'
          key={"wave-3"}
          exit={{
            y: -800
          }}
          transition={{
            delay: 0.74,
            type: "spring",
            damping: 20
          }}
        >
          <div className='w-screen h-100 bg-[#EEEEEE]' />
          <div style={{backgroundImage: "url('./Vector.svg')" }}  className='-scale-y-100 bg-repeat-x w-screen h-28 -translate-y-1'  />
        </motion.div>}
    </motion.div>
  )

  const failedState = (
    <div>isFailed</div>
  )

  return (
    <div className={!isNull && !data ? "h-screen overflow-hidden" : ""}>
      <div className='overlay'></div>
      <motion.div className='background' style={{y: backgroundY}}></motion.div>

      <AnimatePresence mode='wait'> 
        {!data ? (
          <motion.div key="loading-wrapper">
            {loadingState}
          </motion.div>
        ) : data ? (
          <motion.div key="main-content">
            {main}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default App
