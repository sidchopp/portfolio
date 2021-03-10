import React from "react";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";
import Footer from "./Footer";
import '../stylesheets/Home.css'
import Page from "./Page";

function Home() {
  return (
    <Page title="Welcome">
      <div className=" content-wrap">

        <HomeContent />
      </div>
    </Page>



  );
}

export default Home;
