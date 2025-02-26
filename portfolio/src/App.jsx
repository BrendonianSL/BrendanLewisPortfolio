import './App.css'
import Homepage from './Homepage'
import Header from '../components/Header';
import Footer from '../components/Footer'
import About from './About'
import Experience from './Experience';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Projects from './Projects';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
