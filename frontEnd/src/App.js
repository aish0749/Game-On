import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes, useSearchParams} from "react-router-dom"
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const [currentForm, setCurrentForm] = useState ('login');

  return (
    <div className="app">
       <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<Home />} />
        <Route exact path='/contact' element={<Home />} />
        <Route exact path='/result' element={<Result />} />
        <Route exact path='/login'  element={<Login />} /> 
        <Route exact path='/signup' element={<Signup />} />
        </Routes>
        <br></br>
        <hr></hr>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
