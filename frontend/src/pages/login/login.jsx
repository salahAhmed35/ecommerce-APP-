import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";  
import Loadingspinner from "../../components/loadingspinner/loadingspinner";
import Error from "../../components/error/error";
import SuccessMessage from "../../components/successMessage/successMessage";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword , setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    setLoading(true)
    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        userData
      );
      if(response.status === 201){
        setSuccess(response.data.message)
      }
    } catch (error) {
      setError(error.response.data.message)
    }finally{
      setLoading(false)
    }
  };
  const showHidePassword = () => {
    if(showPassword){
      setShowPassword(false)
    }else{
      setShowPassword(true)
    }
  }
  return (
    <>
      <div className="flex items-center justify-center login bg-white-blue h-100vh">
        <div className="p-6 bg-white rounded login-form w-400 h-">
          <h2 className="my-3 text-3xl font-semibold text-center text-blue">
            Login
          </h2>
          {success ? <SuccessMessage message={success} /> : ""}
          {error ? <Error errorMessage={error} /> : ""}
          <form action="Submit" onSubmit={handleSubmit} className="flex flex-col ">
            <div className="my-3 email ">
              <label
                htmlFor="email"
                className="mx-2 font-semibold text-md text-dark-gray"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="px-2 py-3 border border-gray  w-95% mx-2 my-2 rounded"
              />
            </div>
            <div className="password">
              <label
                htmlFor="password"
                className="mx-2 font-semibold text-md text-dark-gray"
              >
                Password
              </label>
              <div className="relative flex items-center">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                type= {showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Password"
                name="password"
                className="px-2 py-3 border border-gray  w-95% mx-2 my-2 rounded"
              />
               <div className="absolute text-lg font-semibold cursor-pointer right-5 eye-icon w-fit" onClick={showHidePassword}>
               {showPassword ? <FiEye /> : <FiEyeOff/>}
               </div>
              </div>
            </div>
            <button
              type="submit"
              className="relative w-95% py-2 mx-2 my-3 text-xl font-semibold text-white border-none rounded bg-blue"
            >
              {loading && <Loadingspinner />}
              Login
            </button>
            <div className="my-3">
              <span>
                Don't have an account ?{" "}
                <Link to={"/register"} className="text-blue">
                  Sign up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
