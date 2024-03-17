import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login bg-white-blue h-100vh flex items-center justify-center">
        <div className="login-form bg-white w-400 p-6 rounded h-">
          <h2 className="text-blue font-semibold text-3xl mt-3 mb-7 text-center">
            create a new account
          </h2>
          <form action="Submit">
            <div className="name flex mt-3 mx-2">
              <div className="first-name">
                <label
                  htmlFor="firstname"
                  className="mx-2 text-md  font-semibold text-dark-gray"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="email"
                  placeholder="First Name"
                  className="px-2 py-3 border border-gray  w-95% mx-2 my-2 rounded"
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
              />
            </div>
            <div className="confirm-password">
              <label
                htmlFor="password"
                className="mx-2 text-md font-semibold text-dark-gray"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                name="password"
                className="px-2 py-3 border border-gray  w-95% mx-2 my-2 rounded"
              />
            </div>
            <button className="border-none  bg-blue text-white font-semibold text-xl rounded w-95% px-3 py-2 my-3 mx-2">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
