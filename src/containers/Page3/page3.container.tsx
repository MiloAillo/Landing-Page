import { MotionValue } from "motion"
import { useScroll, useTransform } from "motion/react"
import "./page3.container.css"
import Page1Waves from "../../components/Page1/page1-waves"
import Page3Content from "../../components/Page3/page3-content"
import { useEffect, useRef, useState } from "react"
import type { getAllDataTypes, projectDataTypes } from "@/types/getAllDataTypes"

interface mainInterface {
    parallax: boolean
    data: getAllDataTypes
}

function Page3({ parallax, data }: mainInterface) {
    const [ projectsData, setProjectsData ] = useState<projectDataTypes>([])
    
    useEffect(() => {
        console.log(data.projects)
        setProjectsData(data.projects)
    })

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
    const layer2: MotionValue<string> = useTransform(scrollYProgress1, [0, 1], ["0vh", parallax ? "7vh" : "0vh"])
    const layer3: MotionValue<string> = useTransform(scrollYProgress1, [0, 1], ["0vh", parallax ? "10vh" : "0vh"])
    const card: MotionValue<string> = useTransform(scrollYProgress2, [0, 1], ["0vh", parallax ? "-20vh" : "0vh"])

    return (
        <div className="page3">
            <div ref={ref1} className="page3-wave">
                <Page1Waves layer1={layer1} layer2={layer2} layer3={layer3} />
            </div>
            <div className={parallax ? "" : "page3-content-mobile"} ref={ref2}>
                <Page3Content parallax={parallax} card={card} projectsData={projectsData} />
            </div>
        </div>
    )
}

export default Page3