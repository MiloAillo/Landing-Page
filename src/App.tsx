import { useEffect, useState, lazy, Suspense } from 'react'
import Lenis from 'lenis'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import './App.css'
import { getAllData } from './api/getAllData'
import type { getAllDataTypes } from './types/getAllDataTypes'
import { TailSpin } from 'react-loader-spinner'

const Page1 = lazy(() => import('./containers/Page1/page1.container'))
const Page2 = lazy(() => import('./containers/Page2/page2-container'))
const Page3 = lazy(() => import('./containers/Page3/page3.container'))
const Page4 = lazy(() => import('./containers/Page4/page4.container'))

const loadingSpinner = <div className="flex justify-center items-center h-screen"><TailSpin height={50} width={50} color="#FFFFFF" /></div>

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
    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  //viewport tracker
  const [width, setWidth] = useState(window.innerWidth)
  const [parallax, setParallax] = useState<boolean>(false)
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 150)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    setParallax(width >= 800)
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
        <Suspense fallback={loadingSpinner}>
          <Page1 parallax={parallax} />
          <Page2 parallax={parallax} data={data ? data : {projects: [], techStacks: []}}/>
          <Page3 parallax={parallax} data={data ? data : {projects: [], techStacks: []}}/>
          <Page4 parallax={parallax}/>
        </Suspense>
        {/* <Ender /> */}
        <div className='relative flex justify-center items-center md:items-start w-full h-10 md:h-25 bg-[#2C2C2C] z-1 text-center md:leading-41 overflow-y-hidden md:-mt-25 text-[rgba(255,255,255,0.781)]'>
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

  return (
    <div className={!isNull && !data ? "h-screen overflow-hidden" : ""}>
      <div className='overlay'></div>
      <motion.div className='background' style={{y: backgroundY}}></motion.div>

      <AnimatePresence mode='wait'> 
        {!data ? (
          <motion.div key="loading-wrapper">
            {loadingState}
          </motion.div>
        ) : (
          <motion.div key="main-content">
            {main}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
