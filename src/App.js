import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Alert from './Components/Alert'
import Features from './Components/Features'
import Gallery from './Components/Gallery'
import Reviews from './Components/Reviews'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import About from './Components/About'

function App() {
  const [alert, setAlert] = useState(true)
  const [bg, setbg] = useState('#FFFFF')
  const [greeting, setgreeting] = useState('')
  useEffect(() => {
    const time = new Date().getHours()
    if (time >= 4 && time <= 12) {
      setgreeting('Morning')
    } else if (time >= 12 && time <= 4) {
      setgreeting('Afternoon')
    } else {
      setgreeting('Evening')
    }
    setTimeout(() => {
      setAlert(false)
    }, 10000)
  }, []);

  const changebg = (color) => {
    setbg(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bg }}>
      <Navbar />
      <div className="w-100 border-2 position-fixed bottom-0 end-0 floating-btn d-flex justify-content-end mb-4 me-4">
        <input
          type="text"
          class="form-control bg-primary bg-opacity-75 placeholder-xl  text-white w-25"
          id="exampleInputPassword1"
          placeholder="#FFFFF"
          onChange={(e) => {changebg(e.target.value)}}
        />
      </div>
      <div className=" container-lg pb-5">
        <div style={{ marginBottom: '10rem' }}>
          {alert ? <Alert greeting={greeting} /> : ''}
          <Main />
        </div>
        <Features />
        <About />
        <Gallery />
        <Reviews />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
