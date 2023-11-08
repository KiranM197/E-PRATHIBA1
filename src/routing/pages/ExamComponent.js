// Your React component where you want to fetch questions

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExamQuestions } from '../../redux/action';
import Header from '../components/functional/Header';


function ExamComponent() {
  const dispatch = useDispatch();
  const { questions, loading, error } = useSelector((state) => state.exam);
  const examId = 24; 
  const headers = {
    id: 'your_id_here',
    server_key: 'your_server_key_here',
    tokenu: 'your_tokenu_here',
  };

  useEffect(() => {
    dispatch(fetchExamQuestions(examId));
  }, [dispatch, examId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
          <Header/>

      <h1>Exam Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExamComponent;
