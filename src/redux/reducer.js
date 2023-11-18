import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILURE,
  FETCH_EXAM_QUESTIONS_SUCCESS,
  FETCH_EXAM_QUESTIONS_REQUEST,
  FETCH_EXAM_QUESTIONS_FAILURE,
} from "./actionTypes";







//REGISTER_USER
export const userReducer1 = (
  state = {
    registering: false,
    registeredUser: null,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        registering: true,
        registeredUser: null,
        error: null,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registering: false,
        registeredUser: action.payload,
        error: null,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        registering: false,
        registeredUser: null,
        error: action.error,
      };
    default:
      return state;
  }
};


export const emailVerificationReducer = (
  state = {
    verifying: false,
    verified: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        verifying: true,
        verified: false,
        error: null,
      };
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        verifying: false,
        verified: true,
        error: null,
      };
    case VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        verifying: false,
        verified: false,
        error: action.error,
      };
    default:
      return state;
  }
};


//LOGIN_REDUCER

 export const userReducer = (
  state = {
    user: null,
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case LOGIN_FAILURE:
      return { ...state, user: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

//VERIFYUSER_REDUCER



export const regReducer = (state =  {
  user: null,
  error: null,
}, action) => {
  switch (action.type) {
    case 'SUBMIT_REGISTRATION_SUCCESS':
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case 'SUBMIT_REGISTRATION_FAILURE':
      return {
        ...state,
        formData: null,
        error: action.payload,
      };
    default:
      return state;
  }
}

//examReducer


 export const examReducer = (state =  {
  data: {},
  questions:[],
  loading: false,
  error: null,
}, action) => {
  switch (action.type) {
    case FETCH_EXAM_QUESTIONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_EXAM_QUESTIONS_SUCCESS:
      return {
        ...state,
         questions: action.payload.exam,
        loading: false,
        data: action.payload,
      };
    case FETCH_EXAM_QUESTIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
