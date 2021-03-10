import React from "react";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";
import Footer from "./Footer";
import '../stylesheets/Home.css'

function Home() {
  return (
    <div  >
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

export default Home;
