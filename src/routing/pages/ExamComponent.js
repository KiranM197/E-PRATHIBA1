

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExamQuestions } from '../../redux/action';
import Header from '../components/functional/Header';


function ExamComponent() {
  const dispatch = useDispatch();
  const { data,questions, loading, error } = useSelector((state) => state.exam);
  const examId = 1465; 
  

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
  if (!data || !Array.isArray(data.exam)) {
    console.log('DAta',data);
    return <p>No questions available.</p>;
  }
  
  
  

  return (

    <div>
          <Header/>

      <h1>Exam Questions</h1>

      <ul>
      {data.exam.map((question) => (
        <li key={question.id}>{question.text}</li>
      ))}
    </ul>
    {/* <ul>
        {Array.isArray(questions) ? (
          questions.map((question, index) => (
            <li key={question.id}>{question.text}</li>
          ))
        ) : (
          <p>No questions available.</p>
        )}
      </ul> */}
      
    </div>
  );
}


export default ExamComponent;
