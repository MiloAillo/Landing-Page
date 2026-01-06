import { motion, MotionValue } from 'motion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./page1-content.css"
import type { Ref } from 'react'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

interface Page1ContentInterface {
    card: MotionValue<string>
    ref: Ref<HTMLDivElement> | undefined
}

function Page1Content({card, ref}: Page1ContentInterface) {
    return (
        <motion.div className='main-content' ref={ref} style={{y: card}}>
          <div className='content1'>
            <div className='pfp'></div>
            <div className='card-content'>
              <p className='card-name'>Mischiko Moe</p>
              <p className='card-number'>ID: 14152089147085185</p>
            </div>
            <div className='card-barcode'></div>
          </div>
          <div className='content2 header'>
            <div className='intro'>
              <div className='name'>
                <p className='name-dialogue'>Hello, my name is</p>
                <p className='name-name'>Faris Kahlil Haidar</p>
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
                <div className='social-link'>
                  <FontAwesomeIcon icon={faLinkedin} size='2x' className='social-link-logo linkedin' />
                  <p className='social-link-tittle'><a href='https://www.linkedin.com/in/faris-kahlil-haidar-7bb35031b/'>Faris Kahlil Haidar</a></p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
    )
}

export default Page1Content