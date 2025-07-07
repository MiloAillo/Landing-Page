import { motion, MotionValue } from "motion/react"
import "./page1-waves.css"

interface Page1Waves {
    layer1: MotionValue<string>
    layer2: MotionValue<string>
    layer3: MotionValue<string>
}

function Page1Waves({layer1, layer2, layer3}: Page1Waves) {
    return (
        <div>
        <motion.div className='wave' id='wave1' style={{y: layer1}}></motion.div>
        <motion.div className='wave' id='wave2' style={{y: layer2}}></motion.div>
        <motion.div className='wave' id='wave3'style={{y: layer3}}></motion.div>
        </div>
    )
}

export default Page1Waves