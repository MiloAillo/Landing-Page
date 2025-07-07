import { MotionValue } from "motion"
import { useScroll, useTransform } from "motion/react"
import Page3Content from "../../components/Page3/page3-content"
import "./page3.container.css"
import Page1Waves from "../../components/Page1/page1-waves"
import { useRef } from "react"

function Page3() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })
    const layer1: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"])
    const layer2: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0vh", "7vh"])
    const layer3: MotionValue<string> = useTransform(scrollYProgress, [0, 1], ["0vh", "10vh"])

    return (
        <div className="page3">
            <div ref={ref} className="page3-wave">
            <Page1Waves layer1={layer1} layer2={layer2} layer3={layer3} />
            </div>
            <Page3Content />
            <Page3Content />
            <Page3Content />
            <Page3Content />
            <Page3Content />
            <Page3Content />
        </div>
    )
}

export default Page3