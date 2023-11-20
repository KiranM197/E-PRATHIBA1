import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmail } from '../../redux/action';
import Header from '../components/functional/Header';
import { useNavigate } from 'react-router-dom';

const EmailVerificationPage = () => {
  const [regCode, setRegCode] = useState('');
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const emailVerification = useSelector((state) => state.emailVerification);

  const handleVerification = () => {
    dispatch(verifyEmail(regCode));
  };

  if (emailVerification.verified) {
    navigate('/Verification')
  }

  return (
    <div>
      <h1>Email Verification</h1>
      <input
        type="text"
        placeholder="Enter Registration Code"
        value={regCode}
        onChange={(e) => setRegCode(e.target.value)}
      />
      <button onClick={handleVerification}>Verify</button>

      {/* {emailVerification.verifying && <p>Verifying...</p>}
      {emailVerification.verified && <p>Email has been verified.</p>}
      {emailVerification.error && <p>Error: {emailVerification.error}</p>} */}
    </div>
  );
};

export default EmailVerificationPage;
