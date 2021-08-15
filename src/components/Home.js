import React from "react";
import HomeContent from "./HomeContent";
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
