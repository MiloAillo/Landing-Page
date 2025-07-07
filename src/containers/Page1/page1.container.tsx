import { useScroll, useTransform, MotionValue } from 'motion/react'
import Page1Content from '../../components/Page1/page1-content'
import Page1Waves from '../../components/Page1/page1-waves'
import "./page1.container.css"

function Page1() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  })
  const card: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"])
  const layer1: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"])
  const layer2: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0vh", "7vh"])
  const layer3: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0vh", "10vh"])

  return (
    <div className='page1'>
        <Page1Content card={card}/>
        <Page1Waves layer1={layer1} layer2={layer2} layer3={layer3} />
    </div>
  )
}

export default Page1