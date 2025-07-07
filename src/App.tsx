import { motion, useScroll, useTransform } from 'motion/react'
import './App.css'

function App() {
const { scrollYProgress } = useScroll({
  offset: ["start start", "end end"]
})
const card = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"])
const layer1 = useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"])
const layer2 = useTransform(scrollYProgress, [0, 1], ["0vh", "5vh"])
const layer3 = useTransform(scrollYProgress, [0, 1], ["0vh", "7vh"])

  return (
    <div>
      <div className='page1'>
        <motion.div className='page1 main-content' style={{y: card}}>
          <div className='content1 card'>
            <div className='pfp'></div>
            <div className='card-content'>
              <p className='card-number'>0912873465</p>
              <p className='card-name'>Mischiko Moe</p>
            </div>
            <div className='card-barcode'></div>
          </div>
          <div className='content2 header'>
            <div className='intro'>
              <div className='name'>
                <p className='name-dialogue'>Hello, my name is</p>
                <p className='name-name'>Mischiko Moe</p>
              </div>
              <p className='intro-desc'>A software engineer aiming to be a fullstack developer.</p>
            </div>
            <div className='social'>
              <p className='social-tittle'>You can contact me at</p>
              <div className='social-links'>
                <div className='social-link'>
                  <div className='social-link-logo instagram'></div>
                  <p className='social-link-tittle'><a href=''>Instagram</a></p>
                </div>
                <div className='social-link'>
                  <div className='social-link-logo discord'></div>
                  <p className='social-link-tittle'><a href=''>Discord</a></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className='wave' id='wave1' style={{y: layer1}}></motion.div>
        <motion.div className='wave' id='wave2' style={{y: layer2}}></motion.div>
        <motion.div className='wave' id='wave3'style={{y: layer3}}></motion.div>
      </div>
    </div>
  )
}

export default App
