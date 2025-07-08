import { useEffect } from 'react'
import Lenis from 'lenis'
import Page1 from './containers/Page1/page1.container'
import Page2 from './containers/Page2/page2-container'
import Page3 from './containers/Page3/page3.container'
import Page4 from './containers/Page4/page4.container'
import Ender from './components/ender'
import './App.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Ender />
    </div>
  )
}

export default App
