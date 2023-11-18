import axios from "axios";
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  FETCH_EXAM_QUESTIONS_REQUEST,
  FETCH_EXAM_QUESTIONS_SUCCESS,
  FETCH_EXAM_QUESTIONS_FAILURE,
} from "./actionTypes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const server_key = "3w99V63pW7tJ7vavGXtCKo8cp";



export const registerUser = (formData) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });

  try {
    const response = await axios.post('https://e-prathibha.com/apis/register', formData);

    dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });

    return response;
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAILURE, error: error.message });
    throw error; 
  }
}
   






//VERIFY_EMAIL

 export const verifyEmail = (regCode) => (dispatch) => {
  dispatch({ type: VERIFY_EMAIL_REQUEST });

  const requestData = { reg_code: regCode };

  axios
    .post("https://e-prathibha.com/apis/verifyEmail", requestData)
    .then((response) => {
      dispatch({ type: VERIFY_EMAIL_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: VERIFY_EMAIL_FAILURE, error: error.message });
    });
};


//LOGIN_USER
export const loginUser = (userCredentials) => {
  return async (dispatch) => {
   
    try {
      const response = await axios.post(
        "https://e-prathibha.com/apis/login",
        userCredentials
      );

      if (response.status == 200) {
        const data = response.data;
        
        console.log(data,"ActionData");
      


        dispatch({ type: LOGIN_SUCCESS, payload: data });
        return response;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };
};








// Examlist

export const submitRegistration = (formData)  => {
 
return async(dispatch)=>{
  try {
    const response = await axios.post('https://e-prathibha.com/apis/test_free_exam',formData, {headers: {
      id: 4341, 
      server_key: server_key,
      tokenu: "oaTBSLkI8PZ38CsLtfV0"
     } 
    });
   
    
    console.log(response,"axios response");

    dispatch(submitRegistrationSuccess(response.data.data));
    return response
   
  } catch (error) {
    dispatch(submitRegistrationFailure(error.message));
  }
}
//  console.log(Headers);
//  console.log(formData);

  
};
export const submitRegistrationSuccess = (data) => ({
  type: 'SUBMIT_REGISTRATION_SUCCESS',
  payload: data,
});

export const submitRegistrationFailure = (error) => ({
  type: 'SUBMIT_REGISTRATION_FAILURE',
  payload: error,
});








export const fetchExamQuestions = (examId) => async (dispatch) => {
  dispatch({ type: 'FETCH_EXAM_QUESTIONS_REQUEST' });

  try {
    const response = await axios.get(` https://e-prathibha.com/apis/start_exam?examId=${examId}`,{headers: {id: 4341, 
    server_key: server_key,
    tokenu: "oaTBSLkI8PZ38CsLtfV0"
   } });
    const data = await response.data.data;
    console.log(data);

    dispatch({ type: 'FETCH_EXAM_QUESTIONS_SUCCESS', payload: data });
    return response
    
  } catch (error) {
    dispatch({ type: 'FETCH_EXAM_QUESTIONS_FAILURE', payload: error.message });
  }
};






























