import { motion } from "motion/react"
import Page4Content from "../../components/Page4/page4-content"
import Page1Waves from "../../components/Page1/page1-waves"
import type { MotionValue } from "motion"
import { useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import "./page4.container.css"

interface page4interface {
    parallax: boolean
}

function Page4({ parallax }: page4interface) {
    const ref = useRef(null)
    const ref2 = useRef(null)
    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: ref,
        offset: ["start start", "start end"]
    })
    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: ref2,
        offset: ["start start", "start end"]
    })

    const layer1: MotionValue<string> = useTransform(scrollYProgress1, [1, 0], ["0vh", "0vh"])
    const layer2: MotionValue<string> = useTransform(scrollYProgress1, [1, 0], ["0vh", parallax ? "13vh" : "0vh"])
    const layer3: MotionValue<string> = useTransform(scrollYProgress1, [1, 0], ["0vh", parallax ? "15vh" : "0vh"])
    const page: MotionValue<string> = useTransform(scrollYProgress2, [1, 0], ["0vh", parallax ? "-20vh" : "0vh"])

    return (
        <motion.div className="page4" ref={ref2} style={{y: page}}>
            <div className="page4-wave" ref={ref}>
                <Page1Waves layer1={layer1} layer2={layer2} layer3={layer3} />
            </div>
            <div className={parallax ? "page4-content" : "page4-content-mobile"}>
                <Page4Content />
            </div>
        </motion.div>
    )
}

export default Page4