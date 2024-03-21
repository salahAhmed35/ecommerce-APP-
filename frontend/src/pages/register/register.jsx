import React, { useState } from "react";
import Error from "../../components/error/error";
import SuccessMessage from "../../components/successMessage/successMessage";
import Loadingspinner from "../../components/loadingspinner/loadingspinner"
import axios from "axios";
const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading , setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const userData = {
      firstname,
      lastname,
      email,
      password,
    };
    try{
      const response = await axios.post(
        'http://localhost:3001/register',
         userData);
         if(response.status === 201){
           setSuccess(response.data.message)
         }
    }catch(error) {
      setError(error.response.data.message)
    }finally{
      setLoading(false)
    }
  };
  return (
    <>
      <div className="flex items-center justify-center login bg-white-blue h-100vh">
        <div className="p-6 bg-white rounded login-form w-400 h-">
          <h2 className="mt-3 text-3xl font-semibold text-center text-blue mb-7">
            create a new account
          </h2>
          {success ? <SuccessMessage message={success} /> : ""}
          {error ? <Error errorMessage={error} /> : ""}
          <form action="Submit" onSubmit={handleSubmit}>
            <div className="flex mx-2 mt-3 name">
              <div className="first-name">
                <label
                  htmlFor="firstname"
                  className="mr-2 font-semibold text-md text-dark-gray"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  value={firstname}
                  name="firstname"
                  placeholder="First Name"
                  className="px-2 py-3 border border-gray  w-95% mr-2 my-2 rounded"
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className="last-name">
                <label
                  htmlFor="firstname"
                  className="mx-2 font-semibold text-md text-dark-gray"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  className="px-2 py-3 border border-gray  w-95% mx-2 my-2 rounded"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="my-3 email ">
              <label
                htmlFor="email"
                className="mx-2 font-semibold text-md text-dark-gray"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="px-2 py-3 border border-gray  w-95% mx-2 my-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="password">
              <label
                htmlFor="password"
                className="mx-2 font-semibold text-md text-dark-gray"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                name="password"
                className="px-2 py-3 border border-gray  w-95% mx-2 my-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="confirm-password">
              <label
                htmlFor="confirmedPassword"
                className="mx-2 font-semibold text-md text-dark-gray"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmedPassword"
                placeholder="Enter Password "
                name="password"
                className="px-2 py-3 border border-gray  w-95% mx-2 my-2 rounded"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="flex relative items-center justify-center border-none  bg-blue text-white font-semibold text-xl rounded w-95% px-3 py-2 my-3 mx-2"
            >
              {loading && <Loadingspinner />}
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
