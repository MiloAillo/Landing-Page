import { useScroll, useTransform, MotionValue } from 'motion/react'
import Page1Content from '../../components/Page1/page1-content'
import Page1Waves from '../../components/Page1/page1-waves'
import "./page1.container.css"
import { useRef } from 'react'

  interface mainInterface{
    parallax: boolean
  }

function Page1({ parallax }: mainInterface) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    offset: ["start start", "end end"]
  })
  const card: MotionValue<string> = useTransform(scrollYProgress2, [0, 1], ["0vh", parallax ? "50vh" : "0vh"]) // Temp (50vh original)
  const layer1: MotionValue<string> = useTransform(scrollYProgress, [1, 0], ["0px", "0px"])
  const layer2: MotionValue<string> = useTransform(scrollYProgress, [0, 1], [parallax ? "0vh" : "0vh", parallax ? "4vh" : "0vh"])
  const layer3: MotionValue<string> = useTransform(scrollYProgress, [0, 1], [parallax ? "0vh" : "0vh", parallax ? "7vh" : "-0vh"])

  return (
    <div className={parallax ? 'page1' : 'page1-mobile'}>
        <div>
          <Page1Content ref={ref} card={card}/>
        </div>
        <div className={parallax ? "page1-wave-desktop" : "page1-wave-mobile"}>
          <Page1Waves layer1={layer1} layer2={layer2} layer3={layer3} />
        </div>
    </div>
  )
}

export default Page1 