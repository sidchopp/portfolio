import React from 'react'
//import Home from './components/Home'
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";
//import { BrowserRouter, Switch, Route } from "react-router-dom";
import './stylesheets/App.css'

function App() {
  return (

      <div className="page-container"> 

      <div className=" content-wrap">
        <Navbar />
        <HomeContent />
       </div>
      <div className="footer">
        <Footer />
      </div>
    </div>



  );
}

export default App;
