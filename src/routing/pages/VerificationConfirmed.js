import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/functional/Header";
import confirmation from './confirmation.gif'

function VerificationConfirmed() {
  return (
    <>
    <Header/>
      <div class="in">
        <img class="gif-image" src={confirmation} alt="confirmation gif" />
      </div>
      <h2>Email is verified</h2>
      <Link to='/login'>
      
      <button type="button">login</button>
      </Link>
    </>
  );
}

export default VerificationConfirmed;
