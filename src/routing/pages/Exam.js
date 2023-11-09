import React, { useState, useEffect } from "react";
import Header from "../components/functional/Header";
import { useDispatch, useSelector } from "react-redux";
import { ExamFreeList, submitRegistration } from "../../redux/action";
import { useNavigate } from "react-router-dom";
import FreeExam from "./FreeExam";

function Exam() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const regUser = useSelector((state) => state.regUser);
  const [responseInUI, setResponseInUI] = useState(null);
  const [loading, setLoading] = useState(false);

  const formData = {
    email: "kiranmouliorugundla@gmail.com",
    name: "kiran",
    phone: 7093481167,
    password: "Kiran@1234$",
    confirmPassword: "Kiran@1234$",
  };

  const freeTest = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(submitRegistration(formData));
      console.log(response,"exam reesponse");
      if (response.status == 200) {
        setResponseInUI(response.data); 
        navigate("/freeexam",{ state: { response: response.data }});
      }else{
        console.log("response is not as expected");
      }
    } catch (error) {
      console.log("error occured", error);
    }finally {
      setLoading(false);}
  };
  


  

  return (
    <div>
      <Header />
      <h1>Exam</h1>
      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={freeTest}
      >
        Free Test
      </button>
    
      </div>

)

      






// {loading ? (
//   <p>Loading...</p>
// ) : responseInUI ? (
//   <div>
//     <h2>Data:</h2>
//     <pre>{JSON.stringify(responseInUI, null, 2)}</pre>
//     <h2>Formatted Data:</h2>
    
//   </div>
// ) : (
//   <p>Click the button to fetch and display data</p>
// )}




}

export default Exam;
