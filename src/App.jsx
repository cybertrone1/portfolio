import { useState } from 'react'
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import About from './About';

function App() {

  return (
    <Router>
      <div className="content">
        <NavBar />
        <div className="sub-content">
          <Routes>
            <Route path='/' element={ < Home /> } />
            <Route path='/about' element={ < About /> } />
          </Routes>
        </div>
        < Footer />
      </div>
    </Router>
  )
}

export default App
