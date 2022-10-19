import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="container">
      <Jumbotron />
      <div className="row">
       <div className="col ps-0"><Card /></div>
       <div className="col"><Card /></div>
       <div className="col"><Card /></div>
       <div className="col pe-0"><Card /></div> 
       </div>
        
        
        
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
