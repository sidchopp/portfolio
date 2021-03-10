import React from 'react'
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";
import About from './components/About'
import Work from './components/Work'
import Home from './components/Home'
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
          {/* <Route path="/sign-in" exact><SignIn /> </Route> */}
        </Switch>
        <div className="footer"><Footer /> </div>
      </div>
    </BrowserRouter>




  );
}

export default App;
