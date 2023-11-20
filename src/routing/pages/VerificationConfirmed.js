import React from "react";
import { Link } from "react-router-dom";

function VerificationConfirmed() {
  return (
    <>
      <div class="in">
        <img class="gif-image" src="./confirmation.gif" alt="GIF Description" />
      </div>
      <h2>Email is verified</h2>
      <Link>
      
      <button type="button" onClick={'/'}>Home</button>
      </Link>
    </>
  );
}

export default VerificationConfirmed;
