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
// const tokenu= "vggb6M6X5CS2zdVSEmki"
// const id =4341
const server_key = "3w99V63pW7tJ7vavGXtCKo8cp";

export const registerUser = (formData) => (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });
  const formDataObject = new FormData();
  formDataObject.append('email', formData.email);
  formDataObject.append('name', formData.name);
  formDataObject.append('phone', formData.phone);
  formDataObject.append('password', formData.password);
  formDataObject.append('confirmPassword', formData.confirmPassword);

  axios
    .post('https://e-prathibha.com/apis/register', formDataObject)
    .then((response) => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: REGISTER_USER_FAILURE, error: error.message });
    });

// const formDataObject = new FormData();
//   formDataObject.append('email', formData.email);
//   formDataObject.append('name', formData.name);
//   formDataObject.append('phone', formData.phone);
//   formDataObject.append('password', formData.password);
//   formDataObject.append('confirmPassword', formData.confirmPassword);

//   dispatch({ type: REGISTER_USER_REQUEST });
//   return async (dispatch) => {
//     dispatch({ type: REGISTER_USER_REQUEST });
//     try {
//       const response = await axios.post('https://e-prathibha.com/apis/register', formDataObject);
//       dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
//       return response;
//     } catch (error) {
//       dispatch({ type: REGISTER_USER_FAILURE, error: error.message });
//       throw error;
//     }
//   };
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
      tokenu: 'KR59t4IXXzvwsNMKfJYe' 
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






//startExam

// export const fetchExamQuestions = (examId) => {
//   return  async(dispatch) => {
//     dispatch(fetchExamQuestionsRequest());
// try{
//   const response = await axios.get(
//     `https://e-prathibha.com/apis/start_exam?examId=${examId}`,
//     {
//       headers: {
//         id: 4341,
//         server_key: server_key,
//         tokenu: 'U7t8LeLpqLfdeHk4KjtB',
//       },
//     }
//   );

// // console.log(response,"response2");
//   const questions = response.data;
//   dispatch(fetchExamQuestionsSuccess(questions));
//   return response

// } catch (error) {
//   dispatch(fetchExamQuestionsFailure(error.message));
// }
   
//   };
// };

export const fetchExamQuestions = (examId) => async (dispatch) => {
  dispatch({ type: 'FETCH_EXAM_QUESTIONS_REQUEST' });

  try {
    const response = await axios.get(` https://e-prathibha.com/apis/start_exam?examId=${examId}`,{headers: {id: 4341, 
    server_key: server_key,
    tokenu: 'KR59t4IXXzvwsNMKfJYe' 
   } });
    const data = await response.data;

    dispatch({ type: 'FETCH_EXAM_QUESTIONS_SUCCESS', payload: data });
    return response
    
  } catch (error) {
    dispatch({ type: 'FETCH_EXAM_QUESTIONS_FAILURE', payload: error.message });
  }
};

// export const fetchExamQuestionsRequest = () => ({
//   type: FETCH_EXAM_QUESTIONS_REQUEST,
// });

// export const fetchExamQuestionsSuccess = (questions) => ({
//   type: FETCH_EXAM_QUESTIONS_SUCCESS,
//   payload: questions,
// });

// export const fetchExamQuestionsFailure = (error) => ({
//   type: FETCH_EXAM_QUESTIONS_FAILURE,
//   payload: error,
// });

// export const examBegins = (formData)  => {
 
//   return async(dispatch)=>{
//     try {
//       const response = await axios.get('https://e-prathibha.com/apis/test_free_exam',formData, {headers: {
//         id: 4341, 
//         server_key: server_key,
//         tokenu: '8sVPGpvMAJ4D3ja3mOmu' 
//        } 
//       });
//       return response
      
//       console.log(response,"axios response");
  
//       dispatch(examSuccess(response.data));
     
//     } catch (error) {
//       dispatch(examFailure(error.message));
//     }
//   }
//   //  console.log(Headers);
//   //  console.log(formData);
  
    
//   };
//   export const examSuccess = (data) => ({
//     type: 'SUBMIT_REGISTRATION_SUCCESS',
//     payload: data,
//   });
  
//   export const examFailure = (error) => ({
//     type: 'SUBMIT_REGISTRATION_FAILURE',
//     payload: error,
//   });



























// const getExam =()=>{
//   return async(dispatch)=>{
//     try{
//       const questions= await axios.get(" https://e-prathibha.com/apis/test_free_exam")
//     }
//   }
// }

// export const registerUser = (userData) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(
//         'https://e-prathibha.com/apis/register',
//         userData,

//       );
//       console.log('Response:', response);
//       dispatch({
//         type: 'REGISTER_SUCCESS',
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: 'REGISTER_FAILURE',
//         payload: error.message,
//       });
//     }
//   };
// };
