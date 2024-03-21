import React, { useState } from "react";
import axios from "axios";
const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
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
         console.log(response.data.message);
    }catch(error) {
      console.log('Registration failed:', error)
    }
  };
  return (
    <>
      <div className="login bg-white-blue h-100vh flex items-center justify-center">
        <div className="login-form bg-white w-400 p-6 rounded h-">
          <h2 className="text-blue font-semibold text-3xl mt-3 mb-7 text-center">
            create a new account
          </h2>
          <form action="Submit" onSubmit={handleSubmit}>
            <div className="name flex mt-3 mx-2">
              <div className="first-name">
                <label
                  htmlFor="firstname"
                  className="mr-2 text-md  font-semibold text-dark-gray"
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
                  className="mx-2 text-md  font-semibold text-dark-gray"
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
            <div className="email my-3  ">
              <label
                htmlFor="email"
                className="mx-2 text-md  font-semibold text-dark-gray"
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
                className="mx-2 text-md  font-semibold text-dark-gray"
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
                className="mx-2 text-md font-semibold text-dark-gray"
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
              className="border-none  bg-blue text-white font-semibold text-xl rounded w-95% px-3 py-2 my-3 mx-2"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
