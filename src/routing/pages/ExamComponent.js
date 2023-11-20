

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExamQuestions } from '../../redux/action';
import Header from '../components/functional/Header';
import './ExamComponent.css'; 
import { Link } from 'react-router-dom';


function ExamComponent() {
  const dispatch = useDispatch();
  const {data,questions, loading, error } = useSelector((state) => state.exam);
  const [currentIndex, setCurrentIndex] = useState(0);
  const examId = 25; 
  console.log('DAta',data);


  useEffect(() => {
    dispatch(fetchExamQuestions(examId));
    
    
  }, [dispatch]);
console.log('State:', useSelector((state) => state.exam));
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  
  const handleNextQuestion = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  const handlePreviousQuestion = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
  const signout=()=>{

  }
  

  //  console.log(data.exam.forEach((value)=>value.Question.question.above))
  //  console.log(data?.exam?.map((value) => value.Question.question.above));


  return (

    <div>
          <Header/>

      <h1>Exam Questions</h1>

      <div className="question-list">
      {data?.exam && currentIndex < data.exam.length && (
        <div className="question-container">
           <div dangerouslySetInnerHTML={{ __html: data.exam[currentIndex].Question.question.above }} />
        
          <ol className='options-list'>
          <li dangerouslySetInnerHTML={{ __html: data.exam[currentIndex].Question.option1 }} />
          <li dangerouslySetInnerHTML={{ __html: data.exam[currentIndex].Question.option2 }} />
          <li dangerouslySetInnerHTML={{ __html: data.exam[currentIndex].Question.option3 }} />
          <li dangerouslySetInnerHTML={{ __html: data.exam[currentIndex].Question.option4 }} />

          

          </ol>
          <div className='button-container'>
        
          <button  onClick={handlePreviousQuestion}>Previous Question</button>
          <button onClick={handleNextQuestion}>Next Question</button>

</div>
        </div>
      )}
      </div>



      <div>
    <Link to='/'>
    
    <button type='button' >Signout</button>
    
    </Link>
   </div>
      
    </div>
  );
}


export default ExamComponent;
