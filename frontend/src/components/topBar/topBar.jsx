import React from "react";
import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <React.Fragment>
      <div className="top-bar justify-end px-2 py-4 bg-gray-100 border-b border-light-border border-solid flex">
        <div className="container m-auto flex  justify-end">
          <div className="flex items-center mr-3">
            <div className="language mr-4">
              <p className="font-semibold text-gray-600">English</p>
            </div>
            <div className="currency mr-4 font-semibold text-gray-600">
              $ US Dollar
            </div>
            
          </div>
          <div className="flex items-center ml-4">
            <div className="register mr-3">
              <a
                href="#"
                className="font-semibold text-gray-600 flex items-center"
              >
                <LuUser2 className="mr-1" />
                <p>register</p>
              </a>
            </div>
            <span className="text-gray-600 font-semibold">|</span>
            <div className="login ml-3">
              <Link to = "/login" className="font-semibold text-gray-600">
                login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
