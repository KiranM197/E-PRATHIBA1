import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Packages from "./Packages";
import RegisterLogin from "./RegisterLogin";
import Login from "./Login";
import Exam from "./Exam";
import EmailVerificationPage from "./verifyEmail";
import FreeExam from "./FreeExam";
import ExamComponent from "./ExamComponent";

function AppRoute() {
  return (
    
    <BrowserRouter>
    {
    Login ?
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/register" element={<RegisterLogin />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/emailverify" element={<EmailVerificationPage/>}/>
        <Route path="/freeexam" element={<FreeExam/>}/>
        <Route path="/examComponent" element={<ExamComponent/>}/>


      

      </Routes>
      :
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/login" element={<Login/>}/>



        <Route/>
      </Routes>
}
    </BrowserRouter>
   
  );
}

export default AppRoute;
