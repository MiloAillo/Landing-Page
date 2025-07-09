import { useScroll, useTransform, MotionValue } from 'motion/react'
import Page1Content from '../../components/Page1/page1-content'
import Page1Waves from '../../components/Page1/page1-waves'
import "./page1.container.css"
import { useRef } from 'react'

function Page1() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    offset: ["start start", "end end"]
  })
  const card: MotionValue<string> = useTransform(scrollYProgress2, [0, 1], ["0vh", "50vh"]) // Temp (50vh original)
  const layer1: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"])
  const layer2: MotionValue<string> = useTransform(scrollYProgress, [1, 0], ["-5vh", "3vh"])
  const layer3: MotionValue<string> = useTransform(scrollYProgress, [1, 0], ["-7vh", "5vh"])

  return (
    <div className='page1'>
        <div>
        <Page1Content card={card}/>
        </div>
        <div ref={ref}>
        <Page1Waves layer1={layer1} layer2={layer2} layer3={layer3} />
        </div>
    </div>
  )
}

export default Page1 