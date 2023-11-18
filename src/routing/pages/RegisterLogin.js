import React, { useState } from 'react'
import Header from '../components/functional/Header'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/action';
import { useNavigate } from 'react-router-dom';
  




const RegisterLogin=()=> {


  const state= useSelector(it=>it.user)
  console.log(state);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration =async (event) => {
    event.preventDefault();
    
    try {
  
     
      const response = await dispatch(registerUser(formData));
      console.log("registerresponse",response);
      if (response && response.status === 200 && response.data) {
        navigate('/emailverify');
        // if(!email || !name || !phone || !password || !confirmPassword ){
        //   alert("please enter the valid details")

        // }
      } else {
        console.log('Registration failed',response ?response.data:'no response data');
      }
    } catch (error) {
      console.log('Registration Error:', error.message);
    }
    
  };
 


  return (
<>

<Header/>

      <h2><center>Register</center></h2>

<div className='container'>


        


        <form className='mt-5' onSubmit={handleRegistration}>
          <div className='form-group mt-2'>
          {/* <label htmlFor="email">E Mail</label> */}
            <input type='text' placeholder='email' className='form-control' name="email" id='email' value={formData.email} onChange={handleInputChange} />
          </div>

          <div className='form-group mt-3'>
          {/* <label htmlFor="name">Name</label> */}
            <input type='text' placeholder='name' className='form-control' id='name'  name="name" value={formData.name} onChange={handleInputChange} />
          </div>

          <div className='form-group mt-3'>
          {/* <label htmlFor="phone">Phone Number</label> */}
            <input type='tel' placeholder='phone' className='form-control' id='phone'  name="phone" value={formData.phone} onChange={handleInputChange}/>
          </div>

          <div className='form-group mt-3'>
           
            <input type='password'  placeholder='password' className='form-control' id='password'  name="password" value={formData.password} onChange={handleInputChange} />
          </div>

          <div className='form-group mt-3'>
          
            <input type='password' placeholder='confirmPassword' className='form-control' id='confirmPassword'  name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
          </div>

          <button type='submit' className='btn btn-primary'>Submit</button>
          {/* onClick={() => handleRegistration(formData)}  */}
        </form>
      </div>







</>  )
}

export default RegisterLogin 