import { MotionValue } from "motion"
import { useScroll, useTransform } from "motion/react"
import "./page3.container.css"
import Page1Waves from "../../components/Page1/page1-waves"
import Page3Content from "../../components/Page3/page3-content"
import { useRef } from "react"

function Page3() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: ref1,
        offset: ["start start", "end end"]
    })
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: ref2,
        offset: ["start start", "start end"]
    })
    const layer1: MotionValue<string> = useTransform(scrollYProgress1, [0, 1], ["0vh", "0vh"])
    const layer2: MotionValue<string> = useTransform(scrollYProgress1, [0, 1], ["0vh", "7vh"])
    const layer3: MotionValue<string> = useTransform(scrollYProgress1, [0, 1], ["0vh", "10vh"])
    const card: MotionValue<string> = useTransform(scrollYProgress2, [0, 1], ["0vh", "-20vh"])

    return (
        <div className="page3">
            <div ref={ref1} className="page3-wave">
                <Page1Waves layer1={layer1} layer2={layer2} layer3={layer3} />
            </div>
            <div className="page3-content" ref={ref2}>
            <Page3Content card={card}/>
            </div>
        </div>
    )
}

export default Page3