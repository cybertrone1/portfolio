import { useState } from 'react'
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

function App() {

  return (
    <Router>
      <div className="content">
        <NavBar />
        <div className="sub-content">
          <Routes>
            <Route exact path='/' element={ < Home /> } />

          </Routes>
        </div>
        < Footer />
      </div>
    </Router>
  )
}

export default App
