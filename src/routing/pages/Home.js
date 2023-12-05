import React from "react";
import Header from "../components/functional/Header";
import prathiba from "./prathiba.jpg";
import packg from "./package-img.jpg";
import "../components/functional/Header.css"
import Packages from "./Packages";
import "./Home.css"
import { Link } from "react-router-dom";
import Footerhm from "../components/functional/Footerhm";

function Home() {
  return (
    <>
      <Header />

      <br />
      <center>
        {" "}
        <h1>Key Features</h1>
      </center>
      {/* { <p className="styleB" >UPSC PREP</p> }
      { <p className="styleB" > Start with Fundamentals,Attempt,Practice,Review and Improve</p> } */}
      <br />
      <center>
        <img src={prathiba} alt="Prathiba-Curriculum" className="img-fluid" width="900px" />
      </center>
      <div className="container-fluid">
        <div className="container">
          <p>
            A. Civil Services or for that matter any competitive exam tests the
            fundamentals more than anything else
          </p>
          <p>
            B. NCERT develops subject understanding in a systematic way. On the
            way many facts and data are presented
          </p>
          <p>
            C. UPSC in its notification stresses a general understanding of the
            subjects. Fundamentals/Basics are important.
          </p>
          <p>
            D. The shifting emphasis on the depth of basics/subjects can be
            understood from past question papers
          </p>
          <p>
            E. Learning through questions has been Indian way since vedic times
            as seen in Prashnopanishad. It reflects an interactive style where
            the student has worked out the question for himself before he is
            provided an answer.
            <br />
            <span className="poem">Dwell with me a year,</span>
            <br />
            <span className="poem">
              with Tapas, with Brahmacharya, with Sraddha (faith),
            </span>
            <br />
            <span className="poem">Then ask what questions you will,</span>
            <br />
            <span className="poem">If we know, we will tell you all.</span>
          </p>

          <p>
            F. We have compiled an exhaustive question bank of all the subjects
            from 6th – 10th class NCERT. Almost 95% is covered.
          </p>
          <p>
            G. We have also Compiled 26 Years old question papers of Civil
            services Prelims exam and 6 Years old objective question papers of
            Engineering services exam, CDS, NDA, CAPF, CISF, Geo-Scientist (pre)
            and SO ( Departmental).
          </p>
          <p>
            H. Together these 16 thousand odd questions shall provide a solid
            understanding of basics.
          </p>
          <p>
            I. The interactive style is captured in the software, with the scope
            to book mark questions for later review and deeper contemplation.
            The time spent on each question is captured, that will give inputs
            to modify the preparation strategy.
          </p>
          <p>
            J. Focus: With book marking of questions, the time required for
            revision can be compressed to manageable levels. Time saved is time
            earned.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6"> 
              <div className="service-image">
                <img src={packg} alt="packageimg" width="550px" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-content">
                <div>
                  <h2 className="font-bold">Free</h2>
                </div>
                <p>
                  UPSC is Unpredictable. But we can help you in a very small way
                  to prepare smart!
                </p>
                <p>
                  Get a sense of UPSC examination by practising previous years
                  question papers and analyse your performance.
                </p>
                <p>
                  Get your papers evaluated and see where you stand in your
                  journey for cracking UPSC examination this year
                </p>
                <p>A. 3 Years Old Question Paper Civil services (Prelims)</p>
                <p>
                  B. Limited UPSC Old Question Papers ( CDS, Geo
                  Scientists(Pre), CISF, CAPF, NDA, Engineering Services (Pre)
                  and SO)
                </p>
                <p>
                  C. Limited questions from Basics of School NCERT ( 6th to 10th
                  Class)
                </p>
                <div className="btn ">
                  <Link to="/packages">

                  <button  type ="button" className="btn btn-danger" >SHOW PACKAGE</button>

                  </Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
    
    </>
    
  );
}

export default Home;
