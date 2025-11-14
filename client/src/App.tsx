import './App.css'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import About from './Components/About'
import Objectives from './Components/Objectives'
import Team from './Components/Team'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
      <About />
      <Objectives />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App