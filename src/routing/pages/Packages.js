import React from "react";
import Header from "../components/functional/Header";
import "./Home.css";
import pckg from "../pages/package-img.jpg";
import Footerhm from "../components/functional/Footerhm";

function Packages() {
  return (
    <>
      <Header />
<div className="container">
      <div className="row">
        <div className="card col-md-6 ">
          <div className="card-body">
          <img className="card-img-top" src={pckg} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              <strong>Practice-Exam</strong>
            </h5>
            <a href="#" className="btn btn-primary">
              Start Now
            </a>
          </div>
          
          </div>
         
          
        </div>
        <div className="card col-md-6 crd-1">
          <div className="card-body">
          <img className="card-img-top" src={pckg} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              <strong>Premium(Inaugural Offer:Free for 60 days)</strong>
            </h5>
            <h5 className="product"><strong>Exams:</strong>
            <span className="text-info">1995|1996|1997|1998|1999</span></h5>
            <a href="#" className="btn btn-primary">
              Start Now
            </a>
          </div>
          
        
          </div>
          
        </div>
        <div className="card col-md-6 crd-1">
          <div className="card-body">
          <img className="card-img-top" src={pckg} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              <strong>Free</strong>
            </h5>
            <h5 className="product"><strong>Exams:</strong>
            <span className="text-info">1995|1996|1997|1998|1999|</span></h5>
            <a href="#" className="btn btn-primary">
              Start Now
            </a>
          </div>
          
        
          </div>
          
        </div>
        
      </div>
      </div>
      {/* <Footerhm/> */}
    </>
  );
}

export default Packages;
