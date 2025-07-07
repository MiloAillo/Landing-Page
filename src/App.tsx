import { useEffect } from 'react'
import Lenis from 'lenis'
import Page1 from './containers/Page1/page1.container'
import Page2 from './containers/Page2/page2-container'
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
    </div>
  )
}

export default App
