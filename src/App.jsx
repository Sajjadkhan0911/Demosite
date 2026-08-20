
import './App.css'
import Elementor from './components/Elementor'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Prefooter from './components/Prefooter'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import { Routes, Route } from "react-router-dom";
import Travel from './Pages/Travel/Travel'
import LifeStyle from './Pages/LifeStyle/LifeStyle'
import Photography from './Pages/Photography/Photography'
import Beauty from './Pages/Beauty/Beauty'

function App() {

  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/category/travel' element={<Travel />} />
        <Route path='/category/lifestyle' element={<LifeStyle />} />
        <Route path='/category/beauty' element={<Beauty />} />
        <Route path='/category/photography' element={<Photography />} />
      </Routes>
      <Elementor />
      <Prefooter />
      <Footer />
    </div>
  )
}

export default App
