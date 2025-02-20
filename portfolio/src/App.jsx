import './App.css'
import Homepage from './Homepage'
import Header from '../components/Header';
import Footer from '../components/Footer'
import About from './About'
import Experience from './Experience';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
