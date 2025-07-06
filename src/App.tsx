import './App.css'

function App() {

  return (
    <div>
      <div className='page1'>
        <div className='page1 main-content'>
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
        </div>
      </div>
      <div className='wave' id='wave1'></div>
      <div className='wave' id='wave2'></div>
      <div className='wave' id='wave3'></div>
    </div>
  )
}

export default App
