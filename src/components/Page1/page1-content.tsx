import { motion, MotionValue } from 'motion/react'
import "./page1-content.css"

interface Page1ContentInterface {
    card: MotionValue<string>
}

function Page1Content({card}: Page1ContentInterface) {
    return (
        <motion.div className='main-content' style={{y: card}}>
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
                  <p className='social-link-tittle'><a href='https://www.instagram.com/miloukato'>Instagram</a></p>
                </div>
                <div className='social-link'>
                  <div className='social-link-logo email'></div>
                  <p className='social-link-tittle'><a href='mailto:fariskahlilhaidar@gmail.com'>fariskahlilhaidar@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
    )
}

export default Page1Content