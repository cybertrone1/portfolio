import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import DataColection from "./DataCollection";

function App() {

  return (

      <Router>
        <div className="content">
          < NavBar />
          <div className="subContent">
            <Routes>
              < Route exact path="/" element={< Home />} />
              < Route exact path="/data" element={ < DataColection /> } />
            </Routes>
          </div>
        </div>
      </Router>
  )
}

export default App;
