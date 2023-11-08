import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/functional/Header";
import pckg from "../pages/package-img.jpg";
import { useDispatch } from "react-redux";
import { fetchExamQuestions } from "../../redux/action";


function FreeExam() {
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

const startExam=async(e)=>{
  e.preventDefault();

  
  const examId = 25; 
  

    try {
      const response = await dispatch(fetchExamQuestions(examId));
      console.log(response,"questions list");
      if (response.status == 200) {
        navigate("/examComponent",{ state: { response: response.data }});
      }else{
        console.log("response is not as expected");
      }
    } catch (error) {
      console.log("error occured", error);
    }
}
  return (
    <div>
      <Header />
      <h1>Free Exam Page</h1>
      <div className="card col-md-6 crd-1">
          <div className="card-body">
          <img className="card-img-top" src={pckg} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              <strong>Free Exam</strong>
            </h5>
            <span className="text-info"></span>
            <button type="submit" className="btn btn-success" onClick={startExam}>Start Now</button>
          </div>
          
        
          </div>
          
        </div>
   
    </div>
  );
}

export default FreeExam;
