import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



import Navbar from "./components/Navbar";
//import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";
import About from './components/About'
import Work from './components/Work'
import Home from './components/Home'
import Contact from './components/Contact'
import Resume from './components/Resume'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './stylesheets/App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <div className=" content-wrap"><Navbar /></div>
        <Switch>
          <Route path="/" exact> <Home /> </Route>
          <Route path="/about" exact> <About /></Route>
          <Route path="/work" exact><Work /> </Route>
          <Route path="/contact" exact><Contact /> </Route>
          <Route path="/resume" exact><Resume /> </Route>
        </Switch>
        <div className="footer"><Footer /> </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
