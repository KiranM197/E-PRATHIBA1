import React, { useState } from "react";
import Header from "../components/functional/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/action";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const { user, loading, error } = useSelector((state) => state);

  const selectUser = (state) => state.user;
  const selectError = (state) => state.error;
  const user = useSelector(selectUser)
  // const data = useSelector(state=>state);
  // const user = data.user
  // console.log("login user", user);
  const error = useSelector(selectError);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
 
    e.preventDefault()
    if(!email || !password){
      alert("please enter the valid details")
      return
    }
    try {
      const response = await dispatch(
        loginUser({
          email: email,
          password: password,
        })
      );
      console.log("login response",response);

      if (response && response.status === 200) {
        navigate("/exam");
      
      }
    } catch (error) {
      console.log("Login Error:", error.message);
    }
  };

  return (
    <>
      <Header />

      <h3 className=" font-weight-normal">
        <center>Login</center>
      </h3>

      <div className="container ">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <br />
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />

              <center>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </center>
            </form>
            <hr />
            <Link to="/register">
              <center>
                {" "}
                <button type="submit" className="btn btn-success">
                  {" "}
                  Register
                </button>
              </center>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
